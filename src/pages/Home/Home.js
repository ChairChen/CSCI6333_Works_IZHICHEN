import React from 'react';

export default function Home() {
  return (
    <section className="main-section">
      {/* Navigation Sidebar: Project Info and Packages */}
      <nav className="main-section-nav">
        <h2>Home Demo</h2>
        <p>Packages Used/Link Referenced:</p>
        <br />
        <ul style={{ textAlign: "left"}}>
          <li>
            <a 
              href='https://chairchen.github.io/CSCI6333_Works_IZHICHEN/' 
              target='_blank'
              rel='noreferrer'
            >My React App Link</a>
          </li>
          <li>Core: react-dom, react-scripts</li>
          <li>Routing: react-router-dom</li>
          <li>State Management: redux, react-redux</li>
          <li>Form Handling: react-hook-form</li>
          <li>CSS Styling: styled-components</li>
          <li>CSS Styling: @emotion/react</li>
          <li>CSS Styling: @emotion/styled</li>
          <li>CSS Styling: react-bootstrap bootstrap</li>
          <li>HTTP Request: axios</li>
          <li>API: @apollo/client graphql</li>
          <li>
            <a 
              href='https://www.dremendo.com/html-tutorial/html-emoji-codes' 
              target='_blank'
              rel='noreferrer'
            >Emoji Reference Link</a>
          </li>
          <li>
            <a 
              href='https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp' 
              target='_blank'
              rel='noreferrer'
            >Node.js CI/CD</a>
          </li>
          <li>
            <a 
              href='https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site' 
              target='_blank'
              rel='noreferrer'
            >GitHub Action</a>
          </li>
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
        
        <br />
        
        <details style={{ cursor: "pointer", marginBottom: "10px" }}>
          <summary>⚠️ One Final Check on package.json, having react-router-dom.</summary>
          When you deploy to GitHub Pages,
          <span style={{ color: "red", fontWeight: "bold" }}>
            &nbsp;if you refresh the page on any route other than the home page (like /about), you might get a 404 Error.
          </span>
          &nbsp;To fix this in the future, you
          <span style={{ color: "red", fontWeight: "bold" }}>
            &nbsp;should use HashRouter instead of BrowserRouter
          </span>
          &nbsp;in your index.js or App.js file, or your links will break on refresh.
        </details>
      </div>
    </section>
  );
}