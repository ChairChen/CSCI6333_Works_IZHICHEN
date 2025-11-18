import React from 'react';

export default function Home() {
  return (
    <section className="main-section">
      {/* Navigation Sidebar: Project Info and Packages */}
      <nav className="main-section-nav">
        <h2>Home Demo</h2>
        <p>Packages Downloaded and Used:</p>
        <ul style={{ textAlign: "left"}}>
          <li>Core: react-dom, react-scripts</li>
          <li>Routing: react-router-dom</li>
          <li>State Management: redux, react-redux</li>
          <li>Form Handling: react-hook-form</li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className="main-section-content">
        <h1>Welcome to My React Practice Hub</h1>
        <p>
          This is your central React training ground. Please select a section from the navigation to view the corresponding demo.
        </p>
        
        <br />
        <hr />
        <br />
        
        <h2>Key Concepts and Hands-on Exercises Covered</h2>
        
        {/* React Hooks and Core Concepts */}
        <div className="concept-group">
          <h3>Core React Hooks and Features</h3>
          <ol style={{ textAlign: "left"}}>
            <li>Hooks: useState, useEffect, useRef, useMemo</li>
            <li>Performance & Loading: Suspense, Lazy (Code Splitting)</li>
            <li>Component Types: Functional Component, Class Component</li>
          </ol>
        </div>

        <br />

        {/* Routing Concepts */}
        <div className="concept-group">
          <h3>Library: react-router-dom Routing</h3>
          <ol style={{ textAlign: "left"}}>
            <li>Components: BrowserRouter, Routes, Route</li>
            <li>Hooks: useParams (Parameter Retrieval), useNavigate (Programmatic Navigation)</li>
          </ol>
        </div>
        
        <br />
        <hr />
        <br />

        {/* Detailed Exercise List */}
        <h3>Detailed Hands-on Exercises</h3>
        <ol style={{ textAlign: "left"}}>
          <li>Component Fundamentals: JSX, Functional vs. Class Components, Component Lifecycle, State and Props.</li>
          <li>Hooks Application: Implementing all hooks, Event Handling (Synthetic Events) and Event Binding.</li>
          <li>Component Comparison: Analyzing the differences between functional components, constant components, and normal class components.</li>
          <li>Debugging: Downloading and using the React DevTools Chrome Extension for troubleshooting.</li>
          <li>Routing & Navigation: Implementing route components, Nested Routes, and Programmatic Navigation.</li>
          <li>State Management: Implementing the full Redux state management flow.</li>
          <li>Form Handling: Using third-party packages like Formik and React Hook Form for form management (Controlled/Uncontrolled Components) and Validation.</li>
        </ol>

      </div>
    </section>
  );
}