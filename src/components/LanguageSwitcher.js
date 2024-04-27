import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button onClick={toggleLanguage}>
            {language === 'en' ? 'Switch to Norwegian \uD83C\uDDEC\uD83C\uDDE7' : 'Bytt til Engelsk \uD83C\uDDF3\uD83C\uDDF4'}
        </button>
    );
};

export default LanguageSwitcher;