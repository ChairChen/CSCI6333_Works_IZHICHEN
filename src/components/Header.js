import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Navbar, Nav } from "react-bootstrap";

const siteHeaderStyle = {
  maxWidth: "var(--max-container-width)",
  marginLeft: "auto",
  marginRight: "auto",
};

const themeToggleButtonStyle = {
  border: "none",
  background: "transparent",
  fontSize: "1.2rem",
  cursor: "pointer",
};

const activeLinkStyle = {
  color: "var(--bs-primary)",
  fontWeight: "bold",
  borderBottom: "3px solid var(--bs-primary)",
};

export default function Header() {
    const { theme, setTheme } = useContext(ThemeContext);
    const location = useLocation();
    const isActive = (path) => {
        if (path === '/') {
            const regexp = /^\/$/;
            // return regexp.test(location.pathname) ? "active" : "";
            return regexp.test(location.pathname) ? activeLinkStyle : undefined;
        }
        const escapedPath = path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const patternString = '^' + escapedPath + '(\\/|$)';
        const regexp = new RegExp(patternString);
        return regexp.test(location.pathname) ? activeLinkStyle : undefined;
    }
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    
    return (
        <Navbar 
            expand="md"
            style={siteHeaderStyle}
            className="border-bottom rouded mb-3 p-3"
            data-bs-theme={theme}
        >
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <h3>CSCI6333 Final</h3>
                    <p>IZHI CHEN B00116872</p>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    ☰
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} to="/" style={isActive("/")}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/About" style={isActive("/About")}>About</Nav.Link>
                        <Nav.Link as={Link} to="/Contact" style={isActive("/Contact")}>Contact</Nav.Link>
                        <Nav.Link as={Link} to="/ReduxTodo" style={isActive("/ReduxTodo")}>ReduxTodo</Nav.Link>
                        <Nav.Link as={Link} to="/CRUD" style={isActive("/CRUD")}>CRUD</Nav.Link>
                        <Nav.Link as={Link} to="/Gallery" style={isActive("/Gallery")}>Gallery</Nav.Link>

                        <Button
                            title={theme === "light" ? "Use Dark mode" : "Use Light mode"}
                            onClick={toggleTheme}
                            style={themeToggleButtonStyle}
                            className="ms-md-2"
                            variant="light"
                        >
                            {theme === "light" ? "🌞" : "🌙"}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
