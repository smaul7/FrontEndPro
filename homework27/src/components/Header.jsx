import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <header className="header">
      <h1 className="header-title">Emoji Voting App</h1>
      <button className="theme-btn" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </header>
  );
};

export default Header;
