import React from "react";
import "./IssueList.css";
function IssueList({
  issues,
  onDelete,
  onUpdateStatus,
}) {
  return (
    <div className="issue-list-container">
      <h2>Issue List</h2>

      {issues.length === 0 && (
        <p>No issues found to display</p>
      )}

      <div className="cards-grid">
        {issues.map((issue) => (
          <div
            key={issue._id}
            className="issue-card"
          >
            <h3>{issue.title}</h3>

            <p>
              <strong>Description:</strong>{" "}
              {issue.description}
            </p>

            <p>
              <strong>Due Date:</strong>{" "}
              {issue.due}
            </p>

            <p>
              <strong>Owner:</strong>{" "}
              {issue.owner}
            </p>

            <p>
              <strong>Priority:</strong>{" "}
              {issue.priority}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`status-badge ${
                  issue.status === "Open"
                    ? "status-open"
                    : issue.status ===
                      "In Progress"
                    ? "status-in-progress"
                    : "status-resolved"
                }`}
              >
                {issue.status}
              </span>
            </p>

            <div className="issue-card-buttons">
              <button
                onClick={() =>
                  onUpdateStatus(
                    issue._id,
                    "In Progress"
                  )
                }
              >
                In Progress
              </button>

              <button
                onClick={() =>
                  onUpdateStatus(
                    issue._id,
                    "Resolved"
                  )
                }
              >
                Resolve
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  onDelete(issue._id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IssueList;