import React from 'react';
import withLanguage from '../utils/withLanguage'; // Import the withLanguage HOC

const About = ({ language, translations }) => {
    return (
        <div>
            <h2>{translations[language].menuAbout}</h2>
        </div>
    );
}

export default withLanguage(About);
