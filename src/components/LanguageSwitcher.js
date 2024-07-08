import React from 'react';
import {useLanguage} from '../context/LanguageContext';
import '../styles/language-switcher.css';

const LanguageSwitcher = () => {
    const {language, toggleLanguage} = useLanguage();

    return (
        <button onClick={toggleLanguage}>
            <i className="material-icons">language</i>
            <span>
                {language === 'en'
                    ? 'Norwegian'
                    : 'Engelsk'
                }
            </span>
        </button>
    );
};

export default LanguageSwitcher;
//ENGLISH FLAG:      \uD83C\uDDEC\uD83C\uDDE7
//NORWEGIAN FLAG:    \uD83C\uDDF3\uD83C\uDDF4