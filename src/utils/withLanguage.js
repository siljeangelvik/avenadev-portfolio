import React from 'react';
import {useLanguage} from '../context/LanguageContext';

const withLanguage = (WrappedComponent) => {
    return (props) => {
        const {language, translations} = useLanguage();

        return <WrappedComponent {...props} language={language} translations={translations}/>;
    };
};

export default withLanguage;
