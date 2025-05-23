import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <header className="header">
      <h1 className="header-title">Emoji Voting App</h1>
      <nav className="nav">
        <NavLink to="/" className="nav-link">Головна</NavLink>
        <NavLink to="/contacts" className="nav-link">Контакти</NavLink>
        <NavLink to="/about" className="nav-link">Про мене</NavLink>
        <NavLink to="/todo" className="nav-link">Todo</NavLink>
      </nav>
      <button className="theme-btn" onClick={toggleTheme}>
        Тема: {theme === "light" ? "Світла" : "Темна"}
      </button>
    </header>
  );
};

export default Header;
