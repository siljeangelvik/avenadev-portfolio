import React from 'react';
import Logo from '../components/Logo/Logo';
import withLanguage from '../utils/withLanguage'; // Import the withLanguage HOC
import '../styles/background-circles.css';

const Home = ({ language, translations }) => {
    return (
        <div className='hero__wrapper'>
            <h1>{translations[language].greeting}</h1>
            <p>{translations[language].welcomeMessage}</p>

            <Logo/>

            <h2>Pages:</h2>
            <p>Home</p>
            <p>Projects</p>
            <p>Gallery</p>

            <h2>Social Links:</h2>
            <p>GitHub</p>
            <p>LinkedIn</p>
            <p>Email</p>

        </div>
    );
};

export default withLanguage(Home);
