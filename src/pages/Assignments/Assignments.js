import React, { lazy, Suspense, useState } from "react";
// Assignments here
const TicTacToe = lazy(() => import("./TicTacToe/TicTacToe"));
const UserProfileLookup = lazy(() => import("./UserProfileLookup/UserProfileLookup"));

export default function Assignments() {
  const [selected, setSelected] = useState("");
  const assignmentsMap = {
     "": (() => (<p>Select an assignment demo.</p>))
    ,"TicTacToe": TicTacToe
    ,"UserProfileLookup": UserProfileLookup
  };
  const AssignmentComponent = assignmentsMap[selected] || (()=>{<p>No such assignment...</p>});
  
  return (
    <section className="main-section">
      <nav className="main-section-nav">
        <h2>Assignments Demo</h2>

        <details open>
          <summary>Assignment01 - TicTacToe / ProfileLookup</summary>
          <div className="details-wrapper">
            <span className="sub-page-text" onClick={() => setSelected("TicTacToe")}>
              TicTacToe
            </span>
            <span className="sub-page-text" onClick={() => setSelected("UserProfileLookup")}>
              UserProfileLookup
            </span>
          </div>
        </details>

      </nav>

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <div className="main-section-content">
          <AssignmentComponent />
        </div>
      </Suspense>
    </section>
  );
}
