import React, { lazy, Suspense, useState } from "react";
// Exercises here
const Counter               = lazy(() => import("./Counter/Counter"));
const FuncComponentCounter  = lazy(() => import("./Counter/FuncCounter"));
const UseMemo               = lazy(() => import("./Hooks/UseMemo"));
const UseRef                = lazy(() => import("./Hooks/UseRef"));

export default function Exercises() {
  const [selected, setSelected] = useState("");
  const exercisesMap = {
     "": (()=>(<p>Select an exercise demo.</p>))
    ,"Counter": (() => (<div><Counter /><br /><FuncComponentCounter /></div>))
    ,"UseMemo": UseMemo
    ,"UseRef": UseRef
  };
  const ExerciseComponent = exercisesMap[selected] || (()=><p>No such exercise...</p>);

  return (
    <section className="main-section">
      <nav className="main-section-nav">
        <h2>Exercises Demo</h2>
        <details open>
          <summary>Class Component and Functional Component</summary>
          <ol className="details-wrapper">
            <li>
              <span className="sub-page-text" onClick={() => setSelected("Counter")}>
                Counter
              </span>
            </li>
          </ol>
        </details>

        <details open>
          <summary>Hooks</summary>
          <ol className="details-wrapper">
            <li>
              <span className="sub-page-text" onClick={() => setSelected("UseMemo")}>
                UseMemo
              </span>
            </li>
            <li>
              <span className="sub-page-text" onClick={() => setSelected("UseRef")}>
                UseRef
              </span>
            </li>
          </ol>
        </details>
       
      </nav>
      
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <div className="main-section-content">
          <ExerciseComponent />
        </div>
      </Suspense>
    </section>
  );
}
