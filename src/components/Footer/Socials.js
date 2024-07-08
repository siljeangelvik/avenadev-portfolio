// src/components/Header/Socials.js
import React from 'react';
import '../../styles/socials.css'; // Create and import your CSS for styling

function Socials() {
    return (
        <div className="socials">
            <a href="https://www.linkedin.com/in/siljeangelvik/" target="_blank" rel="noopener noreferrer">
                <img src="/media/svg/icon-LinkedIn.svg" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://github.com/siljeangelvik" target="_blank" rel="noopener noreferrer">
                <img src="/media/svg/icon-GitHub.svg" alt="GitHub" className="social-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/media/svg/icon-Instagram.svg" alt="Instagram" className="social-icon" />
            </a>
        </div>
    );
}

export default Socials;