import React, { createContext, useContext, useState } from 'react';
import enTranslations from '../translations/en.json';
import noTranslations from '../translations/no.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Default language is English

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'no' : 'en'));
    };

    const translations = {
        en: enTranslations,
        no: noTranslations
    };

    return (
        <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
