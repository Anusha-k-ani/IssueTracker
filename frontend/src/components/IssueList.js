import React from "react";


function IssueList({ issues, setIssues }) {
    const deleteIssue = (id) => {
        setIssues(issues.filter((issue) => issue._id !== id));
    };

    const updateStatus = (id, newStatus) => {
        setIssues(
            issues.map((issue) =>
                issue._id === id ? { ...issue, status: newStatus } : issue
            )
        );
    };

    return (
        <div className="issue-list-container">
            <h2>Issue List</h2>

            {issues.length === 0 && <p className="no-cards">No issues found to display </p>}

            <div className="cards-grid">
                {issues.map((issue) => (
                    <div key={issue._id} className="issue-card">
                        <h3>{issue.title}</h3>
                        <p><strong>Description:</strong> {issue.description}</p>
                        <p><strong>Due Date:</strong> {issue.due }</p>
                        <p><strong>Owner:</strong> {issue.owner}</p>
                        <p><strong>Priority:</strong> {issue.priority}</p>
                        <p>
                            <strong>Status:</strong>{" "}
                            <span className={`status-badge ${issue.status === "Update" ? "status-in-progress" : issue.status === "Resolved" ? "status-resolved" : "status-open"}`}>
                                {issue.status || "Open"}
                            </span>
                        </p>

                        <div className="issue-card-buttons">
                            <button onClick={() => updateStatus(issue._id, "Update")}>
                                Update
                            </button>
                            <button onClick={() => updateStatus(issue._id, "Resolved")}>
                                Resolved
                            </button>
                            <button className="delete-btn" onClick={() => deleteIssue(issue._id)}>
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