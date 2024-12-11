import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__info">
                <p>© 2024 Jetour. Все права защищены.</p>
                <p>Телефон: <a href="tel:+79999999999">+7 (999) 999-99-99</a></p>
            </div>
            <nav className="footer__nav">
                <a href="#privacy" className="footer__link">Политика конфиденциальности</a>
                <a href="#terms" className="footer__link">Условия использования</a>
            </nav>
        </footer>
    );
};

export default Footer;
