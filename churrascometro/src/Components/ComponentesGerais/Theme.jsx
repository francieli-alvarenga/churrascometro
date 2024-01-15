import React, { useState } from "react";
import "../../App.css";

const Theme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme";
  };

  return (
    <div className="theme-container">
      <label id="label-theme-text" htmlFor="input-theme">
        {isDarkTheme ? "Tema Claro" : "Tema Escuro"}
      </label>
      <label className="switch">
        <input
          type="checkbox"
          id="input-theme"
          checked={isDarkTheme}
          onChange={handleThemeChange}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Theme;
