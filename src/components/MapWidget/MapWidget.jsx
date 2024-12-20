import React from 'react';
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import ImgPlacemark from '../../assets/images/placemark-af34a028.svg';
import './MapWidget.scss';

const MapWidget = () => {
    const position = [55.767210, 37.522926]; // Example coordinates for Moscow

    return (
        <div className="map-widget">
            <YMaps>
                <Map
                    defaultState={{ center: [55.767210, 37.522926], zoom: 9 }}
                    style={{ width: '100%', height: '100%' }}
                >
                    <ZoomControl options={{ position: { right: 10, top: 280 } }} />
                    <Placemark
                        geometry={position}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: ImgPlacemark,
                            iconImageSize: [40, 40],
                            iconImageOffset: [-20, -20],
                        }}
                    />
                </Map>
            </YMaps>
            <div className="widget-card">
                <div className="container-adventages">
                    <div className="block-contacts__office">
                        <div className="logo">
                            <img src="https://jetour-rolf.ru/assets/logo-dealer-ecca3fdd.svg" alt="РОЛЬФ" className="logo__dealer" />
                            <img src="https://jetour-rolf.ru/assets/logo-brand-5b245844.svg" alt="JETOUR" className="logo__brand" />
                        </div>
                        <div className="block-contacts__info">
                            <p className="decor"><b>Адрес:</b></p><p className="decor">2-й Магистральный тупик, 5А</p>
                            <p className="decor"><b>Телефон:</b></p>
                            <a href="tel:+74952923237" className="base-phone block-contacts__phone">
                                <img src="https://jetour-rolf.ru/assets/phone-508bd2d3.svg" alt="+7&nbsp;(495)&nbsp;780‑40‑75" className="base-phone__icon image" />
                                <span>+7&nbsp;(495)&nbsp;292‑32‑37</span>
                            </a>
                            <p className="decor"><b>Время работы:</b></p><p className="decor">Ежедневно с 9:00 до 22:00</p>
                        </div>
                        <button type="button" className="base-button base-button--primary base-button--bordered block-contacts__button" data-test="callback">Заказать звонок</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapWidget;
