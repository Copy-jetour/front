import React, { useState, useEffect } from 'react';
import './Header.scss';
import PhoneImg from '../../assets/images/phone-508bd2d3.svg'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const checkScreenWidth = () => {
        if (window.innerWidth < 1000) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    useEffect(() => {
        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);

        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

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
                    {isSmallScreen ? '' : (<a href="tel:+74952921025" className="header__phone base-phone">+7 (495) 292-10-25</a>)}
                    {isSmallScreen ? '' : (<button className="header__callback-button">Заказать звонок</button>)}
                    {isSmallScreen ? (
                        <a href="tel:+74952923237" className="base-phone block-contacts__phone">
                            <img src={PhoneImg} alt="+7&nbsp;(495)&nbsp;780‑40‑75" className="base-phone__icon image" />
                        </a>
                    ) : ''}

                </div>
                <button
                    className={`header__menu-button ${isMenuOpen ? 'header__menu-button--open' : ''}`}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
                >
                    <span className="header__menu-icon"></span>
                </button>
            </div>
            <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                <ul className="header__nav-list">
                    <li><a href="#dashing" className="header__nav-link">JETOUR DASHING</a></li>
                    <li><a href="#x90plus" className="header__nav-link">JETOUR X90PLUS</a></li>
                    <li><a href="#x70plus" className="header__nav-link">JETOUR X70PLUS</a></li>
                    <li><a href="#t2" className="header__nav-link">JETOUR T2</a></li>
                    <li><a href="#x50" className="header__nav-link">JETOUR X50</a></li>
                    <li><a href="#credit" className="header__nav-link">КРЕДИТ</a></li>
                    <li><a href="#contacts" className="header__nav-link">КОНТАКТЫ</a></li>
                    {isMenuOpen ? (<li><button className="header__callback-button">Заказать звонок</button></li>) : ''}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
