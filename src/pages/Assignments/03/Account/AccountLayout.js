import { NavLink, Outlet } from "react-router-dom";

export default function AccountLayout() {
  const linkStyle = {
    textDecoration: "none",
  };

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Account</h1>

      <nav style={{ marginBottom: "1.5rem" }}>
        <NavLink
          to="profile"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Profile
        </NavLink>

        <br />

        <NavLink
          to="settings"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Settings
        </NavLink>
      </nav>

      {/* Child route content renders here */}
      <Outlet />
    </div>
  );
}
