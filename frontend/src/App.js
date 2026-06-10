import React, { useState } from "react";
import IssueTable from "./components/IssueTable";
import IssueList from "./components/IssueList";

function App() {
  const [issues, setIssues] = useState([]);

  return (
    <div>
       <IssueList issues={issues} setIssues={setIssues} />
       
      <IssueTable issues={issues} setIssues={setIssues} />
      <hr />
     
    </div>
  );
}

export default App;