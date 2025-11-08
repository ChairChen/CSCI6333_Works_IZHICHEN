import React, { lazy, Suspense, useState } from "react";
// Assignments here
const TicTacToe = lazy(() => import("./TicTacToe/TicTacToe"));
const UserProfileLookup = lazy(() => import("./UserProfileLookup/UserProfileLookup"));
const TextInputLogger = lazy(() => import("./TextInputLogger/TextInputLogger"));

export default function Assignments() {
  const [selected, setSelected] = useState("");
  const assignmentsMap = {
     "": (() => (<p>Select an assignment demo.</p>))
    ,"TicTacToe": TicTacToe
    ,"UserProfileLookup": UserProfileLookup
    ,"TextInputLogger": TextInputLogger
  };
  const AssignmentComponent = assignmentsMap[selected] || (()=><p>No such assignment...</p>);
  console.log(AssignmentComponent);
  
  return (
    <section className="main-section">
      <nav className="main-section-nav">
        <h2>Assignments Demo</h2>

        <details open>
          <summary>Assignment01 - TicTacToe / ProfileLookup</summary>
          <ol className="details-wrapper">
            <li>
              <span className="sub-page-text" onClick={() => setSelected("TicTacToe")}>
                TicTacToe
              </span>
            </li>
            <li>
              <span className="sub-page-text" onClick={() => setSelected("UserProfileLookup")}>
                UserProfileLookup
              </span>
            </li>
          </ol>
        </details>

        <details open>
          <summary>Assignment02 - Hooks / Synthetic Events</summary>
          <ol className="details-wrapper">
            <li>
              <span className="sub-page-text" onClick={() => setSelected("TextInputLogger")}>
                TextInputLogger
              </span>
            </li>
          </ol>
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
