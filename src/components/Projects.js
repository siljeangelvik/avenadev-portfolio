import React from 'react';
import withLanguage from '../utils/withLanguage'; // Import the withLanguage HOC

const Projects = ({ language, translations }) => {
    return (
        <div>
            <h2>{translations[language].menuProjects}</h2>
        </div>
    );
}

export default withLanguage(Projects);
