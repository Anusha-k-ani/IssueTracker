import React, { useEffect, useState } from "react";
import axios from "axios";
import IssueTable from "./components/IssueTable";
import IssueList from "./components/IssueList";

const API_URL = "http://localhost:5000/api/issues";

function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    try {
      const res = await axios.get(API_URL);
      setIssues(res.data);
    } catch (error) {
      console.error("Error fetching issues:", error);
    }
  };

  const createIssue = async (issueData) => {
    try {
      const res = await axios.post(API_URL, {
        ...issueData,
        status: "Open",
      });

      setIssues((prev) => [...prev, res.data]);
    } catch (error) {
      console.error(error);
      alert("Error creating issue");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, {
        status,
      });

      setIssues((prev) =>
        prev.map((issue) =>
          issue._id === id ? res.data : issue
        )
      );
    } catch (error) {
      console.error(error);
      alert("Error updating issue");
    }
  };

  const deleteIssue = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);

      setIssues((prev) =>
        prev.filter((issue) => issue._id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Error deleting issue");
    }
  };

  return (
    <div>
      <IssueTable
        issues={issues}
        onCreateIssue={createIssue}
        onDelete={deleteIssue}
        onUpdateStatus={updateStatus}
      />
      <hr/>
      <IssueList
        issues={issues}
        onDelete={deleteIssue}
        onUpdateStatus={updateStatus}
      />

      <hr />

      
    </div>
  );
}

export default App;