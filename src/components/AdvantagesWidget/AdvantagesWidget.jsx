// AdvantagesWidget.js
import React from 'react';
import './AdvantagesWidget.scss';

const AdvantagesWidget = () => {
    return (
        <div className="advantages">
            <div className="container-contacts">
                <h2 className="advantages__title">ПРЕИМУЩЕСТВА</h2>
                <div className="swiper-adventages swiper-adventages-initialized swiper-adventages-horizontal swiper-adventages-pointer-events advantages__list">
                    <div className="swiper-adventages-pagination swiper-adventages-pagination-clickable swiper-adventages-pagination-bullets swiper-adventages-pagination-horizontal swiper-adventages-pagination-lock">
                        <span className="swiper-adventages-pagination-bullet swiper-adventages-pagination-bullet-active"></span>
                    </div>
                    <div className="swiper-adventages-wrapper">
                        <div className="swiper-adventages-slide advantages__item swiper-adventages-slide-active decorator">
                            <div className="advantages__icon">
                                <span>33</span>
                            </div>
                            <p><b>33 года</b><br />на рынке</p>
                        </div>
                        <div className="swiper-adventages-slide advantages__item swiper-adventages-slide-next decorator">
                            <div className="advantages__icon">
                                <img src="https://jetour-rolf.ru/assets/shield-6e44eb5d.svg" alt="" />
                            </div>
                            <p>Официальная<br /><b>гарантия</b></p>
                        </div>
                        <div className="swiper-adventages-slide advantages__item decorator">
                            <div className="advantages__icon">
                                <img src="https://jetour-rolf.ru/assets/car-99e6e908.svg" alt="" />
                            </div>
                            <p>Все модели<br /><b>в наличии</b></p>
                        </div>
                        <div className="swiper-adventages-slide advantages__item decorator">
                            <div className="advantages__icon">
                                <img src="https://jetour-rolf.ru/assets/card-a7055cfd.svg" alt="" />
                            </div>
                            <p><b>Выгодные</b><br />кредитные<br />программы</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvantagesWidget;
