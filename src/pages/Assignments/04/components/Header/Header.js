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
        to={`${basePath}/ReduxShoppingCart`}
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        end
      >
        Redux Shopping Cart
      </NavLink>

      <NavLink
        to={`${basePath}/ReduxTodoList`}
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        Redux TodoList
      </NavLink>

    </nav>
  );
}
