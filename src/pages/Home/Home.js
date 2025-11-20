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
          <br />
          <strong><a href='https://chairchen.github.io/CSCI6333_Works_IZHICHEN/'>LINK TO REACT APP</a></strong>
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
        deployed by Node.js CI/CD on 11/18/2025
        ref - https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp
        ref - https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
        ⚠️ One Final Check on your package.json
        I noticed in your package.json you have react-router-dom.
        When you deploy to GitHub Pages, if you refresh the page on any route other than the home page (like /about), you might get a 404 Error.
        To fix this in the future, you should use HashRouter instead of BrowserRouter in your index.js or App.js file, or your links will break on refresh.

      </div>
    </section>
  );
}