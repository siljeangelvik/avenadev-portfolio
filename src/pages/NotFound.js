import React from 'react';
import withLanguage from '../utils/withLanguage'; // Import the withLanguage HOC

const NotFound = ({ language, translations }) => {
    return (
        <div>
            <h2>{translations[language].menuNotFound}</h2>
        </div>
    );
}

export default withLanguage(NotFound);