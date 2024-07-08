import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import {LanguageProvider} from './context/LanguageContext';
import Header from './components/Header/Header';
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
            <div className="App">
                {/* Pass translations object to LanguageSwitcher */}
                <Header/>
                <Routes>
                    {/* Render enhanced components */}
                    <Route path="/" element={<EnhancedHome/>}/>
                    <Route path="/about" element={<EnhancedAbout/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<EnhancedContact/>}/>
                    <Route path="/notfound" element={<EnhancedNotFound/>}/>
                </Routes>
                <Footer/>
            </div>
        </LanguageProvider>
    );
};

export default App;


// import React from 'react';
// import {GlobalStyles} from './styles/GlobalStyles';
// // import './App.css'; // Import your CSS file
// import Nav from './components/Nav';
// import Wrapper from './components/Wrapper';
// import Box from './components/Box';
// import Hearts from './components/Hearts';
// import Neu from './components/Neu';

// const App = () => {
//     return (
//         <>
//             <GlobalStyles/>
//                 <Nav />
//                 <Wrapper />
//                 <Box />
//                 <Hearts />
//                 <Neu />
//         </>
//     );
// };
//
// export default App;

