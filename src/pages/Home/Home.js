export default function Home() {
  return (
    <section className="main-section">
      <nav className="main-section-nav">
        <h2>Works Demo</h2>
        Packages Downloaded...
        <ul>
          <li>react-dom</li>
          <li>react-router-dom</li>
          <li>react-scripts</li>
        </ul>
      </nav>

      <div className="main-section-content">
        <h2>Welcome to My Home Page</h2>
        <p>
          This is my React Practice Hub — choose a section above to get started.
          <br />
          This lecture covered below concepts and hands-on exercise:
        </p>
        <br />
        <h3>Library react</h3>
        <ol>
          <li>useState</li>
          <li>useEffect</li>
          <li>useRef</li>
          <li>useMemo</li>
          <li>Suspense</li>
          <li>Lazy</li>
          <li>Component</li>
        </ol>

        <h3>Library react-router-dom</h3>
        <ol>
          <li>BrowserRouter</li>
          <li>Routes</li>
          <li>Route</li>
          <li>useParams</li>
          <li>useNavigate</li>
        </ol>

        <strong>
          implement all the hook
          , and find the differences between functional component and constant component and an normal class component
          , and download the formik thrid party packages to npm
          , and download the react troubleshooting debugger to Chrome Extension
          , and finally organize/list all the notes here
        </strong>

      </div>
    </section>
  );
}
