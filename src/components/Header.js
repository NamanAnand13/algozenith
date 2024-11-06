// Header.js
import React from 'react';
import { HiBell } from "react-icons/hi";

const Header = () => {
    return (
        <header className="header">
            <button className="notification-icon"><HiBell color='#172B4D'/></button>
            <div class = "profile"></div>
        </header>
    );
};

export default Header;
