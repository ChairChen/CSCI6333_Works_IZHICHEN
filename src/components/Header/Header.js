import "./Header.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext);
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? "active" : "";
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };
    
    return (
        <header className="site-header">
            <div className="row">
                <h3>CSCI6333 - IZHICHEN</h3>

                <button className="menu-btn" onClick={toggleMenu}>
                ☰
                </button>

                <nav className={menuOpen ? "open" : ""}>
                    <Link 
                        to="/"
                        aria-current={isActive("/")}
                        className="pageLink"
                        onClick={() => setMenuOpen(false)}
                    >Home</Link>

                    <Link 
                        to="/Exercises"
                        aria-current={isActive("/Exercises")}
                        className="pageLink"
                        onClick={() => setMenuOpen(false)}
                    >Exercises</Link>
                    
                    <Link 
                        to="/Assignments"
                        aria-current={isActive("/Assignments")}
                        className="pageLink"
                        onClick={() => setMenuOpen(false)}
                    >Assignments</Link>

                    <button onClick={()=>{toggleTheme();}} className="theme-toggle" title="Toggle light/dark mode">
                        {theme === "light" ? "🌞" : "🌙"}
                    </button>
                </nav>
            </div>
        </header>
    );
}
