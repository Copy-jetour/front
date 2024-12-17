import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="header__logo">
                    <img
                        src="https://jetour-rolf.ru/assets/logo-brand-5b245844.svg"
                        alt="Jetour"
                        className="header__logo-image"
                    />
                    <span className="header__divider">|</span>
                    <img
                        src="https://jetour-rolf.ru/assets/logo-dealer-ecca3fdd.svg"
                        alt="Рольф"
                        className="header__rolf-logo"
                    />
                </div>
                <div className="header__contact">
                    <a href="tel:+74952921025" className="header__phone">+7 (495) 292-10-25</a>
                    <button className="header__callback-button">Заказать звонок</button>
                </div>
            </div>
            <nav className="header__nav">
                <div className="header__nav-list">
                    <div><a href="#" className="header__nav-link">JETOUR DASHING</a></div>
                    <div><a href="#" className="header__nav-link">JETOUR X90PLUS</a></div>
                    <div><a href="#" className="header__nav-link">JETOUR X70PLUS</a></div>
                    <div><a href="#" className="header__nav-link">JETOUR T2</a></div>
                    <div><a href="#" className="header__nav-link">JETOUR X50</a></div>
                    <div><a href="#" className="header__nav-link">КРЕДИТ</a></div>
                    <div><a href="#" className="header__nav-link">КОНТАКТЫ</a></div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
