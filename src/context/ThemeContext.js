import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    // const [theme, setTheme] = useState("light");
    const defaulTheme = 'light';
    const reactTheme = 'react_theme';
    const [theme, setTheme] = useState(() => {
        try {
            const item = window.localStorage.getItem(reactTheme);
            return item ? JSON.parse(item) : defaulTheme;
        } catch (error) {
            console.error("Error reading localStorage key “" + reactTheme + "”:", error);
            return defaulTheme;
        }
    });

    // not trigger re-render, when theme change change the css style only
    useEffect(() => {
        try {
            window.localStorage.setItem(reactTheme, JSON.stringify(theme));
            document.body.classList.toggle("dark", theme === "dark");
        } catch (error) {
             console.error("Error setting localStorage key “" + reactTheme + "”:", error);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}