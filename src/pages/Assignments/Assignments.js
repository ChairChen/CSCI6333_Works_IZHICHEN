import React, { lazy, Suspense } from "react";
import { useFullscreen } from "../../context/FullscreenContext";
import { useParams, useNavigate } from "react-router-dom";
// Assignments here
// Assignment01
const TicTacToe                 = lazy(() => import("./01/TicTacToe/TicTacToe"));
const UserProfileLookup         = lazy(() => import("./01/UserProfileLookup/UserProfileLookup"));
// Assignment02
const TextInputLogger           = lazy(() => import("./02/TextInputLogger/TextInputLogger"));
const TextInputLoggerComponent  = lazy(() => import("./02/TextInputLogger/TextInputLoggerComponent"));
const TodoList                  = lazy(() => import("./02/TodoList/TodoList"));
const NameSaver                 = lazy(() => import("./02/NameSaver/NameSaver"));
const Messager                  = lazy(() => import("./02/Messager/Messager"));
const ParentChildComponent      = lazy(() => import("./02/ParentChildComponent/ParentComponent"));
const MyButton                  = lazy(() => import("./02/MyButton/MyButton"));
const SearchApp                 = lazy(() => import("./02/SearchApp/SearchApp"));
const LoginForm                 = lazy(() => import("./02/LoginForm/LoginForm"));
// Assignment03
const miniSPA                   = lazy(() => import("./03/miniSPA"));
// Assignment04
const reduxSPA         = lazy(() => import("./04/reduxSPA"));

export default function Assignments() {
  const { assignmentName } = useParams();
  const navigate = useNavigate();
  // const [selected, setSelected] = useState(assignmentName || "");
  // const [isFullscreen, setIsFullscreen] = useState(false);
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  
  const assignmentsMap = {
     "": (() => (<p>Select an assignment demo.</p>))
    ,"TicTacToe": TicTacToe
    ,"UserProfileLookup": UserProfileLookup
    ,"TextInputLogger": TextInputLogger
    ,"TextInputLoggerComponent": TextInputLoggerComponent
    ,"TodoList": TodoList
    ,"NameSaver": NameSaver
    ,"Messager": Messager
    ,"ParentChildComponent": ParentChildComponent
    ,"MyButton": MyButton
    ,"SearchApp": SearchApp
    ,"LoginForm": LoginForm
    ,"miniSPA":miniSPA
    ,"reduxSPA":reduxSPA
  };
  const propsToPassMap = {
    "TodoList": { initialTodos: [{ id: 1, text: "Learn React" }, { id: 2, text: "Practice Hooks" }, { id: 3, text: "Build a Project" }] }
    ,"miniSPA": { basePath: "/Assignments/"+assignmentName }
    ,"reduxSPA": { basePath: "/Assignments/"+assignmentName }
  };

  const AssignmentComponent = assignmentsMap[assignmentName] || (()=><p>No assignment selected...</p>);
  const propsToPass = propsToPassMap[assignmentName] || {};

  const handleSelect = (name) => {
    // setSelected(name);
    navigate(`/Assignments/${name}`);
  };

  return (
    <section className={`main-section ${isFullscreen ? "is-fullscreen-active" : ""}`}>

      {/* Left Navigation */}
      {(!isFullscreen) && 
      <nav className="main-section-nav">
        <h2>Assignments Demo</h2>

        <details open>
          <summary>Assignment01 - TicTacToe / ProfileLookup</summary>
          <ol className="details-wrapper">
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("TicTacToe")}>
                TicTacToe
              </span>
            </li>
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("UserProfileLookup")}>
                UserProfileLookup
              </span>
            </li>
          </ol>
        </details>

        <details open>
          <summary>Assignment02 - Hooks / Synthetic Events</summary>
          <ol className="details-wrapper">
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("ParentChildComponent")}>
                ParentChildComponent
              </span>
            </li>
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("MyButton")}>
                MyButton
              </span>
            </li>
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("TextInputLogger")}>
                TextInputLogger
              </span>
            </li>
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("TextInputLoggerComponent")}>
                TextInputLoggerComponent
              </span>
            </li>
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("TodoList")}>
                TodoList
              </span>
            </li>
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("NameSaver")}>
                NameSaver
              </span>
            </li>
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("Messager")}>
                Messager
              </span>
            </li>
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("SearchApp")}>
                SearchApp
              </span>
            </li>
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("LoginForm")}>
                LoginForm
              </span>
            </li>
          </ol>
        </details>


        <details open>
          <summary>Assignment03 - Controlled/Uncontrolled Form</summary>
          <ol className="details-wrapper">
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("miniSPA")}>
                miniSPA
              </span>
            </li>
          </ol>
        </details>


        <details open>
          <summary>Assignment04 - Redux</summary>
          <ol className="details-wrapper">
            <li>
              <span className="sub-page-text" onClick={() => handleSelect("reduxSPA")}>
                reduxSPA
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

          <AssignmentComponent {...propsToPass}/>
        </div>
      </Suspense>
    </section>
  );
}
