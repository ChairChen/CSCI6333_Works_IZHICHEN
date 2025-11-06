import logo from "../../logo.svg";
import "./Preview.css";

export default function Preview() {
  return (
    <header className="Preview-header">
      <img src={logo} className="Preview-logo" alt="logo" />
      <a
        className="Preview-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <br />
      <p>
        Check the link for any incorrect spelling...
      </p>
      <br />
      <h4 className="my-component">
        <strong>This is a Default / Preview Page</strong>
      <br />
        <strong>In-Class Tutorial on 2025/10/27 by IZhi Chen</strong>
      </h4>
       
    </header>
  );
}
