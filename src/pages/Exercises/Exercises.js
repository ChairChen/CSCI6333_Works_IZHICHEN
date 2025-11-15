import React, { lazy, Suspense, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Exercises here
const Counter               = lazy(() => import("./Counter/Counter"));
const FuncComponentCounter  = lazy(() => import("./Counter/FuncCounter"));
const UseMemo               = lazy(() => import("./Hooks/UseMemo"));
const UseRef                = lazy(() => import("./Hooks/UseRef"));
const UseReducer            = lazy(() => import("./Hooks/UseReducer"));

export default function Exercises() {
  const exerciseName = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(exerciseName || "");
  const exercisesMap = {
     "": (()=>(<p>Select an exercise demo.</p>))
    ,"Counter": (() => (<div><Counter /><br /><FuncComponentCounter /></div>))
    ,"UseMemo": UseMemo
    ,"UseRef": UseRef
    ,"UseReducer": UseReducer
  };
  const propsToPassMap = {};

  const ExerciseComponent = exercisesMap[selected] || (()=><p>No such exercise...</p>);
  const propsToPass = propsToPassMap[selected] || {};

  const handleSelect = (name) => {
    setSelected(name);
    navigate(`/Exercises/${name}`);
  };

  return (
    <section className="main-section">
      <nav className="main-section-nav">
        <h2>Exercises Demo</h2>
        <details open>
          <summary>Class Component and Functional Component</summary>
          <ol className="details-wrapper">
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("Counter")}>
                Counter
              </span>
            </li>
          </ol>
        </details>

        <details open>
          <summary>Hooks</summary>
          <ol className="details-wrapper">
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("UseMemo")}>
                UseMemo
              </span>
            </li>
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("UseRef")}>
                UseRef
              </span>
            </li>
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("UseReducer")}>
                UseReducer
              </span>
            </li>
          </ol>
        </details>
       
      </nav>
      
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <div className="main-section-content">
          <ExerciseComponent {...propsToPass}/>
        </div>
      </Suspense>
    </section>
  );
}
