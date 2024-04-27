import React from 'react';
import withLanguage from '../utils/withLanguage'; // Import the withLanguage HOC

const Home = ({ language, translations }) => {
    return (
        <div>
            <h1>{translations[language].greeting}</h1>
            <p>{translations[language].welcomeMessage}</p>
        </div>
    );
};

export default withLanguage(Home);
