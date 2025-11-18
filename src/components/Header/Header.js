import "./Header.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useFullscreen } from "../../context/FullscreenContext";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext);
    const { isFullscreen } = useFullscreen();
    const location = useLocation();
    const isActive = (path) => {
        // implement the regexp: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
        // 1. Handle the Root Path ('/') Case Separately
        if (path === '/') {
            // If the target path is '/', it should ONLY match when location.pathname is exactly '/'
            // We use the full match anchors: ^ (start) and $ (end)
            const regexp = /^\/$/;
            return regexp.test(location.pathname) ? "active" : "";
        }
        // 2. Handle All Other Paths (e.g., '/Exercises', '/Assignments')
        // We use a pattern that requires the location.pathname to START with the target path.
        // Escape any special regex characters in the path first (good practice)
        const escapedPath = path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Pattern: 
        // ^ : Start of the string
        // ${escapedPath} : The literal path, e.g., /Exercises
        // (\/|$): Followed by either a forward slash (for subpages) OR the end of the string (for the parent page itself)
        const patternString = '^' + escapedPath + '(\\/|$)';
        // Create the RegExp object
        const regexp = new RegExp(patternString);
        return regexp.test(location.pathname) ? "active" : "";
    }
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    // if its under fullscreen mode, terminate this function and return null to display empty = hide
    if (isFullscreen) return null;
    
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

                    <button 
                        onClick={ () => { 
                            toggleTheme();
                            setMenuOpen(false);
                        } }
                        className="theme-toggle"
                        title="Toggle light/dark mode">
                        {theme === "light" ? "🌞" : "🌙"}
                    </button>
                </nav>
            </div>
        </header>
    );
}
