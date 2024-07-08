import React from 'react';
import Socials from './Socials';
import '../../styles/footer.css';

const Footer = () => {
    return (
        <footer>
            <span className="material-symbols-outlined">copyright</span>
            <Socials/>
        </footer>
    );
};

export default Footer;