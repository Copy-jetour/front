import React from "react";
import "./Header.scss";
import jetourLogo from "../../assets/images/jetour-logo.png";
import rolfLogo from "../../assets/images/rolf-logo.png";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logos">
                <img src={jetourLogo} alt="Jetour Logo" className="logo jetour" />
                <img src={rolfLogo} alt="Rolf Logo" className="logo rolf" />
            </div>
            <nav className="header__menu">
                <a href="#dashing">JETOUR DASHING</a>
                <a href="#x90plus">JETOUR X90PLUS</a>
                <a href="#x70plus">JETOUR X70PLUS</a>
                <a href="#t2">JETOUR T2</a>
                <a href="#x50">JETOUR X50</a>
            </nav>
            <div className="header__contact">
                <span className="header__phone">+7 (495) 281-41-01</span>
                <button className="header__button">Заказать звонок</button>
            </div>
        </header>
    );
};

export default Header;
