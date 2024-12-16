import React, { useState } from 'react';
import './CarCard.scss';
import ArrowImg from '../../assets/images/arrow-bf5523e6.svg'

function getGradient(color) {
    const colors = {
        black: 'linear-gradient(135deg, black, rgb(100, 100, 100), black)',
        green: 'linear-gradient(135deg, rgb(31, 65, 46), rgb(91, 130, 108), rgb(31, 65, 46))',
        red: 'linear-gradient(135deg, rgb(126, 31, 22), rgb(165, 100, 93), rgb(126, 31, 22))',
        white: 'linear-gradient(135deg, rgb(191, 191, 191), rgb(255, 255, 255), rgb(191, 191, 191))',
        grey: 'linear-gradient(135deg, rgb(51, 56, 62), rgb(143, 151, 170), rgb(45, 49, 54))',
        blue: 'linear-gradient(135deg, rgb(128, 155, 191), rgb(174, 191, 214), rgb(128, 155, 191))',
        milk: 'linear-gradient(135deg, rgb(178, 182, 187), rgb(205, 208, 215), rgb(178, 182, 187))',
        dark_blue: 'linear-gradient(135deg, rgb(11, 28, 58), rgb(70, 103, 164), rgb(15, 32, 63))'
    }
    return colors[color]
}

const CarCard = ({ model, discount, car, salon, offers }) => {
    const [selectedColor, setSelectedColor] = useState(Object.keys(car)[0]); // Установить первый цвет как выбранный

    const handleColorChange = (color) => {
        setSelectedColor(color); // Изменить выбранный цвет
    };

    return (
        <div className="car">
            <div className="car-image-wrapper">
                <img className="car__car-of-the-year" src="https://jetour-rolf.ru/assets/carofyear-7fd9270d.png" alt="" />
                <div className="car__benefit">Выгода до {discount}</div>
                <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events car__swiper">
                    <div className="swiper-button-prev swiper-button-disabled"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide car__slide swiper-lazy swiper-lazy-loaded swiper-slide-active">
                            <img
                                src={car[selectedColor]}
                                alt={`${model} - ${selectedColor}`}
                                className="car__img"
                            />
                        </div>
                    </div>
                </div>
                <div className="car__modes">
                    <div className="car__mode car__mode--active" title="Экстерьер">
                        <img src="https://jetour-rolf.ru/assets/exterior-265ae754.svg" alt="" />
                    </div>
                    <div className="car__mode second" title="Интерьер">
                        <img src="https://jetour-rolf.ru/assets/interior-87180411.svg" alt="" />
                    </div>
                </div>
                <div className="car__colors">
                    {Object.keys(car).map((color) => (
                        <div
                            key={color}
                            className="car__color"
                            style={{
                                background: getGradient(color),
                                border: selectedColor === color ? '6px solid #ccc' : '6px solid #efefef',
                            }}
                            onClick={() => handleColorChange(color)}
                        ></div>
                    ))}
                </div>
            </div>
            <div className="car__info car__info-dashing">
                <h2 className="car__title">JETOUR <b>{model}</b></h2>
                <ul className="car__advantages">
                    {offers.map((offer, index) => (
                        <li key={index} className="car__advantage">
                            <img src={ArrowImg} alt="" class="arrow__img" />
                            <p className="arrow-text">{offer}</p>
                        </li>
                    ))}
                </ul>
                <div className="car__btns">
                    <button type="button" className="base-button base-button--grey base-button--bordered car__btn" data-test="callback">Узнать цену по акции</button>
                    <button type="button" className="base-button base-button--primary base-button--bordered car__btn" data-test="callback">Получить предложение</button>
                </div>
            </div>
        </div>
    );
};

export default CarCard;

/*

                <div class="car" id="dashing">
                    <div class="car__image-wrapper">
                        <img class="car__car-of-the-year" src="https://jetour-rolf.ru/assets/carofyear-7fd9270d.png" alt="" />
                        <div class="car__benefit"> Выгода до 570&nbsp;000₽ </div>
                        <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events car__swiper">
                            <div class="swiper-button-prev swiper-button-disabled"></div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-wrapper">
                                <div class="swiper-slide car__slide swiper-lazy swiper-lazy-loaded swiper-slide-active">
                                    <img src="/assets/1-0bf8a252.jpg" alt="" class="car__img" />
                                </div>
                                <div class="swiper-slide car__slide swiper-lazy swiper-slide-next" >
                                    <div class="swiper-lazy-preloader"></div>
                                    <img src="/assets/2-89ca13da.jpg" alt="" class="car__img" />
                                </div>
                                <div class="swiper-slide car__slide swiper-lazy" >
                                    <div class="swiper-lazy-preloader"></div>
                                    <img src="/assets/3-432c1cd3.jpg" alt="" class="car__img" />
                                </div>
                                <div class="swiper-slide car__slide swiper-lazy" >
                                    <div class="swiper-lazy-preloader"></div>
                                    <img src="/assets/4-ca013aea.jpg" alt="" class="car__img" />
                                </div>
                                <div class="swiper-slide car__slide swiper-lazy" >
                                    <div class="swiper-lazy-preloader"></div>
                                    <img src="/assets/5-ad1224b0.jpg" alt="" class="car__img" />
                                </div>
                                <div class="swiper-slide car__slide swiper-lazy" >
                                    <div class="swiper-lazy-preloader"></div>
                                    <img src="/assets/6-5757d7e2.jpg" alt="" class="car__img" />
                                </div>
                            </div>
                        </div>
                        <div class="car__modes">
                            <div class="car__mode car__mode--active" title="Экстерьер">
                                <img src="https://jetour-rolf.ru/assets/exterior-265ae754.svg" alt="" />
                            </div>
                            <div class="car__mode second" title="Интерьер">
                                <img src="https://jetour-rolf.ru/assets/interior-87180411.svg" alt="" />
                            </div>
                        </div>
                        <div class="car__colors">
                            <div class="car__color--active car__color" ></div>
                            <div class="car__color"></div>
                            <div class="car__color"></div>
                            <div class="car__color"></div>
                            <div class="car__color"></div>
                            <div class="car__color"></div>
                            <div class="car__color"></div>
                        </div>
                    </div>
                    <div class="car__info car__info-dashing">
                        <h2 class="car__title"> Jetour <b>DASHING</b></h2>
                        <ul class="car__advantages">
                            <li class="car__advantage">
                                <img src="/assets/arrow-bf5523e6.svg" alt="" />
                                <p>Кредит <nobr><b>от 0,01%</b></nobr></p>
                            </li>
                            <li class="car__advantage">
                                <img src="/assets/arrow-bf5523e6.svg" alt="" />
                                <p>Допы <nobr><b>в подарок</b></nobr></p>
                            </li>
                            <li class="car__advantage">
                                <img src="/assets/arrow-bf5523e6.svg" alt="" />
                                <p>Доп выгода <nobr><b>за трейд-ин</b></nobr></p>
                            </li>
                            <li class="car__advantage">
                                <img src="/assets/arrow-bf5523e6.svg" alt="" />
                                <p>Каско <nobr><b>в подарок</b></nobr></p>
                            </li>
                        </ul>
                        <div class="car__btns">
                            <button type="button" class="base-button base-button--grey base-button--bordered car__btn" data-test="callback">Узнать цену по акции</button>
                            <button type="button" class="base-button base-button--primary base-button--bordered car__btn" data-test="callback">Получить предложение</button>
                        </div>
                    </div>
                </div>

*/
