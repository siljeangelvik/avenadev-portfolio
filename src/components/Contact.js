import React from 'react';
import withLanguage from '../utils/withLanguage'; // Import the withLanguage HOC

const Contact = ({ language, translations }) => {
    return (
        <div>
            <h2>{translations[language].menuContact}</h2>
        </div>
    );
}

export default withLanguage(Contact);
