import React, { useState, useEffect } from 'react';
import './CarCard.scss';
import ArrowImg from '../../assets/images/arrow-bf5523e6.svg';

function getGradient(color) {
    const colors = {
        black: 'linear-gradient(135deg, black, rgb(100, 100, 100), black)',
        green: 'linear-gradient(135deg, rgb(31, 65, 46), rgb(91, 130, 108), rgb(31, 65, 46))',
        red: 'linear-gradient(135deg, rgb(126, 31, 22), rgb(165, 100, 93), rgb(126, 31, 22))',
        white: 'linear-gradient(135deg, rgb(191, 191, 191), rgb(255, 255, 255), rgb(191, 191, 191))',
        grey: 'linear-gradient(135deg, rgb(51, 56, 62), rgb(143, 151, 170), rgb(45, 49, 54))',
        blue: 'linear-gradient(135deg, rgb(128, 155, 191), rgb(174, 191, 214), rgb(128, 155, 191))',
        light_grey: 'linear-gradient(135deg, rgb(178, 182, 187), rgb(205, 208, 215), rgb(178, 182, 187))',
        dark_blue: 'linear-gradient(135deg, rgb(11, 28, 58), rgb(70, 103, 164), rgb(15, 32, 63))',
        milk: 'linear-gradient(135deg, rgb(202, 192, 169), rgb(239, 238, 234), rgb(202, 192, 169))',
        yellow: 'linear-gradient(135deg, rgb(146, 106, 74), rgb(225, 186, 150), rgb(146, 106, 74))'
    };
    return colors[color];
}

const CarCard = ({ model, discount, car, salon, offers, rate, openModal }) => {
    const [mode, setMode] = useState('exterior'); // Текущий режим: 'exterior' или 'interior'
    const [currentColorIndex, setCurrentColorIndex] = useState(0); // Индекс текущего цвета
    const [currentImageIndex, setCurrentImageIndex] = useState(1); // Индекс текущего изображения внутри цвета

    const currentImages = mode === 'exterior' ? car : salon; // Выбор изображений в зависимости от режима
    const colorKeys = Object.keys(currentImages);
    const currentColor = colorKeys[currentColorIndex];
    const maxImageIndex = Object.keys(currentImages[currentColor]).length;

    const handlePrev = () => {
        if (currentImageIndex > 1) {
            setCurrentImageIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentImageIndex < maxImageIndex) {
            setCurrentImageIndex((prevIndex) => prevIndex + 1);
        }
    };

    const toggleMode = (newMode) => {
        setMode(newMode); // Переключить режим
        setCurrentColorIndex(0); // Сбросить индекс цвета
        setCurrentImageIndex(1); // Сбросить индекс изображения
    };

    const handleColorChange = (color) => {
        const newColorIndex = colorKeys.indexOf(color);
        if (newColorIndex !== -1) {
            setCurrentColorIndex(newColorIndex); // Установить новый цвет
            setCurrentImageIndex(1); // Сбросить индекс изображения
        }
    };

    return (
        <div className="car" id={model.toLowerCase()}>
            <div className="car-image-wrapper">
                <img className="car__car-of-the-year" src={rate} alt="" />
                <div className="car__benefit">Выгода до {discount}</div>
                <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events car__swiper">
                    {maxImageIndex > 1 && currentImageIndex > 1 && (
                        <div className="swiper-button-prev" onClick={handlePrev}>
                            <div className="arrow-2">
                                <div className="arrow-2-top"></div>
                                <div className="arrow-2-bottom"></div>
                            </div>
                        </div>
                    )}
                    {maxImageIndex > 1 && currentImageIndex < maxImageIndex && (
                        <div className="swiper-button-next" onClick={handleNext}>
                            <div className="arrow-2">
                                <div className="arrow-2-top"></div>
                                <div className="arrow-2-bottom"></div>
                            </div>
                        </div>
                    )}
                    <div className="swiper-wrapper">
                        <div className="swiper-slide car__slide swiper-lazy swiper-lazy-loaded swiper-slide-active">
                            <img
                                src={currentImages[currentColor][currentImageIndex]} // Выбор картинки по текущему цвету и индексу
                                alt={`${model} - ${currentColor} - ${currentImageIndex}`}
                                className="car__img"
                            />
                        </div>
                    </div>
                </div>
                <div className="car__modes">
                    <div
                        className={`car__mode ${mode === 'exterior' ? 'car__mode--active' : ''}`}
                        title="Экстерьер"
                        onClick={() => toggleMode('exterior')}
                    >
                        <img
                            src="https://jetour-rolf.ru/assets/exterior-265ae754.svg"
                            alt=""
                            style={{ filter: mode === 'exterior' ? 'contrast(1)' : 'contrast(0)' }}
                        />
                    </div>
                    <div
                        className={`car__mode ${mode === 'interior' ? 'car__mode--active' : ''}`}
                        title="Интерьер"
                        onClick={() => toggleMode('interior')}
                    >
                        <img
                            src="https://jetour-rolf.ru/assets/interior-87180411.svg"
                            alt=""
                            style={{ filter: mode === 'interior' ? 'contrast(1)' : 'contrast(0)' }}
                        />
                    </div>
                </div>
                <div className="car__colors">
                    {colorKeys.map((color) => (
                        <div
                            key={color}
                            className="car__color"
                            style={{
                                background: getGradient(color),
                                border: currentColor === color ? '6px solid #ccc' : '6px solid #efefef',
                            }}
                            onClick={() => handleColorChange(color)}
                        ></div>
                    ))}
                </div>
            </div>
            <div className="car__info car__info-dashing">
                <h2 className="car__title">JETOUR <b>{model}</b></h2>
                <div className="car__advantages">
                    {offers.map((offer, index) => (
                        <div key={index} className="car__advantage">
                            <img src={ArrowImg} alt="" className="arrow__img" />
                            <p className="arrow-text">{offer}</p>
                        </div>
                    ))}
                </div>
                <div className="car__btns">
                    <button type="button" className="base-button base-button--grey base-button--bordered car__btn" onClick={() => openModal(`Car: Узнать цену по акции - ${model}`)}>Узнать цену по акции</button>
                    <button type="button" className="base-button base-button--primary base-button--bordered car__btn" onClick={() => openModal(`Car: Получить предложение - ${model}`)}>Получить предложение</button>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
