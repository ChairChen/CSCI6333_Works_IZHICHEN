import React, { lazy, Suspense } from "react";
import { useFullscreen } from "../../context/FullscreenContext";
import { useParams, useNavigate } from "react-router-dom";
// Exercises here
const Counter               = lazy(() => import("./Counter/Counter"));
const FuncComponentCounter  = lazy(() => import("./Counter/FuncCounter"));
const UseMemo               = lazy(() => import("./Hooks/UseMemo"));
const UseRef                = lazy(() => import("./Hooks/UseRef"));
const UseReducer            = lazy(() => import("./Hooks/UseReducer"));
const ReduxCounter          = lazy(() => import("./Redux/ReduxCounter"));

export default function Exercises() {
  const { exerciseName } = useParams();
  const navigate = useNavigate();
  // const [selected, setSelected] = useState(exerciseName || "");
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  const exercisesMap = {
     "": (()=>(<p>Select an exercise demo.</p>))
    ,"Counter": (() => (<div><Counter /><br /><FuncComponentCounter /></div>))
    ,"UseMemo": UseMemo
    ,"UseRef": UseRef
    ,"UseReducer": UseReducer
    ,"ReduxCounter": ReduxCounter
  };
  const propsToPassMap = {};

  const ExerciseComponent = exercisesMap[exerciseName] || (()=><p>No exercise selected...</p>);
  const propsToPass = propsToPassMap[exerciseName] || {};

  const handleSelect = (name) => {
    // setSelected(name);
    navigate(`/Exercises/${name}`);
  };

  return (
    <section className={`main-section ${isFullscreen ? "is-fullscreen-active" : ""}`}>
      
      {/* Left Navigation */}
      {(!isFullscreen) && 
      <nav className="main-section-nav">
        <h2>Exercises Demo</h2>
        <details open>
          <summary>Class and Functional Component</summary>
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

        <details open>
          <summary>Redux State Container</summary>
          <ol className="details-wrapper">
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("ReduxCounter")}>
                ReduxCounter
              </span>
            </li>
          </ol>
        </details>
       
      </nav>
      }

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <div className="main-section-content">

          {/* --- Fullscreen toggle button --- */}
          <button
            className="fullscreen-toggle"
            onClick={toggleFullscreen}
          >
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
          
          <ExerciseComponent {...propsToPass}/>
        </div>
      </Suspense>
    </section>
  );
}
