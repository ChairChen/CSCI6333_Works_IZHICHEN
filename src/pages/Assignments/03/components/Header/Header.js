import { NavLink } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  whiteSpace: "nowrap",
};

const activeStyle = {
  fontWeight: "bold",
  textDecoration: "underline",
};

export default function Header({ basePath }) {
  return (
    <nav className="mini-spa-nav"
      style={{
        padding: "1rem 2rem",
        borderBottom: "1px solid #ddd",
        marginBottom: "1.5rem",
      }}
    >
      <NavLink
        to={basePath}
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        end
      >
        Home
      </NavLink>

      <NavLink
        to={`${basePath}/about`}
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        About
      </NavLink>

      <NavLink
        to={`${basePath}/contact`}
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        Contact
      </NavLink>

      <NavLink
        to={`${basePath}/feedback`}
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        Feedback
      </NavLink>

      <NavLink
        to={`${basePath}/account/profile`}
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        Account/Profile
      </NavLink>

      <NavLink
        to={`${basePath}/account/settings`}
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        Account/Settings
      </NavLink>
    </nav>
  );
}
