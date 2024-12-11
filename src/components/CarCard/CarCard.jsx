import React from 'react';
import './CarCard.scss';

const CarCard = ({ model, discount, image, offers }) => (
    <div className="car-card">
        <div className="car-card__image-wrapper">
            <div className="car-card__discount">Выгода до {discount}</div>
            <img src={image} alt={model} className="car-card__image" />
            <div className="car-card__color-selector">
                <div className="car-card__color" style={{ backgroundColor: '#000' }}></div>
                <div className="car-card__color" style={{ backgroundColor: '#555' }}></div>
                <div className="car-card__color" style={{ backgroundColor: '#aaa' }}></div>
            </div>
        </div>
        <div className="car-card__content">
            <h2 className="car-card__model">{model}</h2>
            <ul className="car-card__offers">
                {offers.map((offer, index) => (
                    <li key={index} className="car-card__offer">
                        <span>&#8594;</span> {offer}
                    </li>
                ))}
            </ul>
            <button className="car-card__action-button car-card__action-button--price">Узнать цену по акции</button>
            <button className="car-card__action-button">Получить предложение</button>
        </div>
    </div>
);

export default CarCard;
