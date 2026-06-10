import React from "react";

function IssueRow({ issue, onUpdateStatus, onDelete }) {
    return (
        <tr>
            <td><strong>{issue.title}</strong></td>
            <td>{issue.description}</td>
            <td>{issue.due }</td>
            <td>{issue.owner}</td>
            <td>
                <span className={`priority-tag ${issue.priority?.toLowerCase()}`}>
                    {issue.priority}
                </span>
            </td>
            <td>
                <span
                    className={`status-badge ${
                        issue.status === "Open"
                            ? "status-open"
                            : issue.status === "Update"
                            ? "status-in-progress"
                            : "status-resolved"
                    }`}
                >
                    {issue.status || "Open"}
                </span>
            </td>
            <td>
                <div className="issue-buttons">
                    <button type="button" onClick={() => onUpdateStatus(issue._id, "Update")}>
                        Update
                    </button>
                    <button type="button" onClick={() => onUpdateStatus(issue._id, "Resolved")}>
                        Resolved
                    </button>
                    <button type="button" className="delete-btn" onClick={() => onDelete(issue._id)}>
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default IssueRow;