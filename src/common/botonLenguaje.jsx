import React from "react";
import '../App.css';
import { useLanguage } from './lenguajes.jsx';
import { useTheme } from './themeContext.jsx';

function LanguageToggleButton() {
    const { language, toggleLanguage } = useLanguage();
    const { theme } = useTheme();

    return (
        <button
            style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: theme === 'light' ? "#222" : "#fff", // Fondo negro en 'light' y blanco en 'dark'
                color: theme === 'light' ? "#fff" : "#222", // Texto blanco en 'light' y negro en 'dark'
                border: "1px solid #ccc", // Borde para un mejor contraste
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s, color 0.3s", // Transición suave
            }}
            onClick={toggleLanguage}
        >
            {language === "en" ? "English" : "Español"}
        </button>
    );
}

export default LanguageToggleButton;
