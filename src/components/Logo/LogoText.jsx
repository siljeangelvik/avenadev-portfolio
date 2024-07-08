import React from 'react';
import '../../styles/logo.css'; // Assuming you added the CSS in App.css

const LogoText = () => {
    return (
        <>
            {/* Script Fonts */}
            <div className="logo logo-pacifico">Angelvik</div>
            {/* Sans Serif Fonts */}
            <div className="logo logo-montserrat">Angelvik</div>
            <div className="logo logo-montserrat">Readable</div>
            <br/>
            <div className="logo logo-roboto">Angelvik</div>
            <div className="logo logo-roboto">Readable</div>
        </>
    );
};

export default LogoText;