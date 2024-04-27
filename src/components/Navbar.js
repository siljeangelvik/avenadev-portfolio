import React from 'react';
import { Link } from 'react-router-dom';
import withLanguage from '../utils/withLanguage'; // Import the withLanguage HOC


function Navbar({ language, translations }) {
    return (
        <nav>
            <ul>
                <li><Link to="/">{translations[language].menuHome}</Link></li>
                <li><Link to="/about">{translations[language].menuAbout}</Link></li>
                <li><Link to="/projects">{translations[language].menuProjects}</Link></li>
                <li><Link to="/contact">{translations[language].menuContact}</Link></li>
                <li><Link to="/notfound">{translations[language].menuNotFound}</Link></li>
            </ul>
        </nav>
    );
}

export default withLanguage(Navbar);
