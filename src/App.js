import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import { LanguageProvider } from './context/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import enTranslations from './translations/en.json';
import noTranslations from './translations/no.json';
import withLanguage from './utils/withLanguage'; // Import the withLanguage HOC

// Wrap components with the withLanguage HOC
const EnhancedHome = withLanguage(Home);
const EnhancedAbout = withLanguage(About);
const EnhancedContact = withLanguage(Contact);
const EnhancedNotFound = withLanguage(NotFound);

const App = () => {
    const translations = {
        en: enTranslations,
        no: noTranslations
    };

    return (
        <LanguageProvider>
            <div className="app">
                {/* Pass translations object to LanguageSwitcher */}
                <LanguageSwitcher defaultLanguage="en" translations={translations}/>
                <Header/>
                <Routes>
                    {/* Render enhanced components */}
                    <Route path="/" element={<EnhancedHome/>}/>
                    <Route path="/about" element={<EnhancedAbout/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<EnhancedContact/>}/>
                    <Route path="/notfound" element={<EnhancedNotFound/>}/>
                </Routes>
            </div>
        </LanguageProvider>
    );
};

export default App;