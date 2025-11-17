// src/pages/Assignments/04/Pages/HomePage.js
import { Link } from "react-router-dom";

export default function HomePage({ basePath }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to Assignment 03</h1>
      <p>
        This is a mini single-page application demonstrating React Router,
        controlled & uncontrolled forms, and nested routes.
      </p>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Quick Navigation</h2>
        <p>Use the global navigation above, or jump directly from here:</p>
        <ul>
          <li>
            <Link to={`${basePath}/about`}>Go to About Page</Link>
          </li>
          <li>
            <Link to={`${basePath}/contact`}>Go to Contact Page (Controlled Form)</Link>
          </li>
          <li>
            <Link to={`${basePath}/feedback`}>Go to Feedback Page (Uncontrolled Form)</Link>
          </li>
          <li>
            <Link to={`${basePath}/account/profile`}>Go to Account Profile</Link>
          </li>
          <li>
            <Link to={`${basePath}/account/settings`}>Go to Account Settings</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
