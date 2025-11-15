import React, { lazy, Suspense, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Assignments here
const TicTacToe                 = lazy(() => import("./01/TicTacToe/TicTacToe"));
const UserProfileLookup         = lazy(() => import("./01/UserProfileLookup/UserProfileLookup"));
const TextInputLogger           = lazy(() => import("./02/TextInputLogger/TextInputLogger"));
const TextInputLoggerComponent  = lazy(() => import("./02/TextInputLogger/TextInputLoggerComponent"));
const TodoList                  = lazy(() => import("./02/TodoList/TodoList"));
const NameSaver                 = lazy(() => import("./02/NameSaver/NameSaver"));
const Messager                  = lazy(() => import("./02/Messager/Messager"));
const ParentChildComponent      = lazy(() => import("./02/ParentChildComponent/ParentComponent"));
const MyButton                  = lazy(() => import("./02/MyButton/MyButton"));
const SearchApp                 = lazy(() => import("./02/SearchApp/SearchApp"));
const LoginForm                 = lazy(() => import("./02/LoginForm/LoginForm"));

export default function Assignments() {
  const assignmentName = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(assignmentName || "");
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
  };
  const propsToPassMap = {
    "TodoList": { initialTodos: [{ id: 1, text: "Learn React" }, { id: 2, text: "Practice Hooks" }, { id: 3, text: "Build a Project" }] }
  };

  const AssignmentComponent = assignmentsMap[selected] || (()=><p>No such assignment...</p>);
  const propsToPass = propsToPassMap[selected] || {};

  const handleSelect = (name) => {
    setSelected(name);
    navigate(`/Assignments/${name}`);
  };

  return (
    <section className="main-section">
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

      </nav>

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <div className="main-section-content">
          <AssignmentComponent {...propsToPass}/>
        </div>
      </Suspense>
    </section>
  );
}
