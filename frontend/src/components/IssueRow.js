import React from "react";

function IssueRow({
  issue,
  onUpdateStatus,
  onDelete,
}) {
  return (
    <tr>
      <td>{issue.title}</td>
      <td>{issue.description}</td>
      <td>{issue.due}</td>
      <td>{issue.owner}</td>

      <td>{issue.priority}</td>

      <td>
        <span
          className={`status-badge ${
            issue.status === "Open"
              ? "status-open"
              : issue.status === "In Progress"
              ? "status-in-progress"
              : "status-resolved"
          }`}
        >
          {issue.status}
        </span>
      </td>

      
    </tr>
  );
}

export default IssueRow;