import React, { useState } from "react";
import IssueRow from "./IssueRow";
import "./IssueTable.css"; 

function IssueTable({ issues, setIssues }) {
    const [form, setForm] = useState({
        title: '',
        description: '',
        due: '',
        owner: '',
        priority: ''
    });

    const handleFormChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        try {
            throw new Error("Simulated API Submission Failure");
        } catch (error) {
            alert("Error Raising Issue");
            console.log(error);
        }
    };

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
        <div className="issue-table-container">
            <h2>Issue Tracker</h2>
            
            <form onSubmit={handleFormSubmit}>
                <table className="issue-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Created By</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        
                        <tr className="form-input-row">
                            <td>
                                <input 
                                    type="text" 
                                    name="title" 
                                    placeholder="Enter title..." 
                                    value={form.title} 
                                    onChange={handleFormChange} 
                                    required 
                                />
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    name="description" 
                                    placeholder="Enter description..." 
                                    value={form.description} 
                                    onChange={handleFormChange} 
                                    required 
                                />
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    name="due" 
                                    placeholder="Enter due date..."
                                    value={form.due} 
                                    onChange={handleFormChange} 
                                    required 
                                />
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    name="owner" 
                                    placeholder="Creator..." 
                                    value={form.owner} 
                                    onChange={handleFormChange} 
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
                                <span className="status-badge status-open">Open</span>
                            </td>
                            <td>
                                <button type="submit" className="submit-issue-btn">Submit Issue</button>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {issues.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="empty-table-cell">
                                     
                                </td>
                            </tr>
                        ) : (
                            issues.map((issue) => (
                                <IssueRow
                                    key={issue._id}
                                    issue={issue}
                                    onUpdateStatus={updateStatus}
                                    onDelete={deleteIssue}
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