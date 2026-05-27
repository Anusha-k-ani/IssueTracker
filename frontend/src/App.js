import React from "react";
import IssueList from "./components/IssueList";
import IssueAdd from "./components/IssueAdd";
import IssueTable from "./components/IssueTable";
import IssueFilter from "./components/IssueFilter";
import IssueRow from "./components/IssueRow";
function App() {
  return (
    <div>
      <hr/>
      <IssueAdd/>
      <hr/>
      <IssueFilter/>
      <hr/>
      <IssueList />
      <hr/>
      <IssueTable/>
      <hr/>

      
    </div>
  );
}

export default App;