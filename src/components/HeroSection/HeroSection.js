import React from "react";
import background from "../../assets/images/background.png";
import "./HeroSection.scss";

function HeroSection() {
    return (
        <section
            className="hero-section"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <div className="hero-section__content">
                <h1>Новогодние продажи JETOUR!</h1>
                <p>Волшебные дни в Рольф! Выгода до 320 000₽</p>
                <div className="hero-section__buttons">
                    <button className="button button--primary">Получить предложение</button>
                    <button className="button button--secondary">Записаться на тест-драйв</button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
