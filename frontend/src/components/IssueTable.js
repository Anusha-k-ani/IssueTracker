import React, { useState } from "react";
import IssueRow from "./IssueRow";
import "./IssueTable.css";

function IssueTable({
  issues,
  onCreateIssue,
  onDelete,
  onUpdateStatus,
}) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    due: "",
    owner: "",
    priority: "",
  });

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await onCreateIssue(form);

    setForm({
      title: "",
      description: "",
      due: "",
      owner: "",
      priority: "",
    });
  };

  return (
    <div className="issue-table-container">
      <h2>Issue Tracker</h2>

      <form onSubmit={handleFormSubmit}>
        <table className="issue-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Days</th>
              <th>Created By</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

            <tr className="form-input-row">
              <td>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleFormChange}
                  placeholder="Title"
                  required
                />
              </td>

              <td>
                <input
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={handleFormChange}
                  placeholder="Description"
                  required
                />
              </td>

              <td>
                <input
                  type="number"
                  name="due"
                  value={form.due}
                  onChange={handleFormChange}
                  required
                />
              </td>

              <td>
                <input
                  type="text"
                  name="owner"
                  value={form.owner}
                  onChange={handleFormChange}
                  placeholder="Owner"
                  required
                />
              </td>

              <td>
                <select
                  name="priority"
                  value={form.priority}
                  onChange={handleFormChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </td>

              <td>
                <span className="status-badge status-open">
                  Open
                </span>
              </td>

              <td>
                <button
                  type="submit"
                  className="submit-issue-btn"
                >
                  Submit
                </button>
              </td>
            </tr>
          </thead>

          <tbody>
            {issues.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No issues found
                </td>
              </tr>
            ) : (
              issues.map((issue) => (
                <IssueRow
                  key={issue._id}
                  issue={issue}
                  onDelete={onDelete}
                  onUpdateStatus={onUpdateStatus}
                />
              ))
            )}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default IssueTable;