import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import withLanguage from '../../utils/withLanguage'; // Import the withLanguage HOC
import '../../styles/logo.css';
import '../../styles/navbar.css';

function Navbar({language, translations}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='header-nav'>
            <div className='container'>
                <Link to="/" className='logo-nav logo-pacifico'>^ven^Dev</Link>
                <div className={`burger-wrapper ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className={`material-symbols-outlined ${isOpen ? 'close' : 'menu'}`}>{isOpen ? 'close' : 'menu'}</span>
                </div>
            </div>
            <ul className={isOpen ? 'open' : ''}>
                <li><Link to="/">{translations[language].menuHome}</Link></li>
                <li><Link to="/about">{translations[language].menuAbout}</Link></li>
                <li><Link to="/projects">{translations[language].menuProjects}</Link></li>
                <li><Link to="/contact">{translations[language].menuContact}</Link></li>
                <li><LanguageSwitcher defaultLanguage="en" translations={translations}/></li>
            </ul>
        </nav>
    );
}

export default withLanguage(Navbar);