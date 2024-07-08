import React from 'react';
import '../../styles/logo.css';

const LogoImage = () => {
    return (
        <div className="logo-svg">
            <img src={`${process.env.PUBLIC_URL}/media/signature-black.svg`} alt="Signature Logo"/>
        </div>
    );
};

export default LogoImage;