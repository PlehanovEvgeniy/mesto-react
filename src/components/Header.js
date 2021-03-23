import React from 'react';
import logo_mesto_img from "../images/logo_mesto.svg"

const Header = () => {
    return (
        <header className="header">
            <a className="logo" href="#" target="_blank">
                <img className="logo__picture" src={logo_mesto_img} alt="Логотип Место" />
            </a>
        </header>
    );
}

export default Header