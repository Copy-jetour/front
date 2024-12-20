import React, { useState } from 'react';
import './Footer.scss';

const Footer = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(prevState => !prevState);
    };

    return (
        <footer className="footer">
            <div className="container-footer">
                <section className="footer__top">
                    <ul className="footer__cars">
                        <li className="footer__car">
                            <a href='#dashing'><img src="https://jetour-rolf.ru/assets/dashing-eb0234bb.png" alt="" /></a>
                            <p>DASHING</p>
                        </li>
                        <li className="footer__car">
                            <a href='#x90plus'><img src="https://jetour-rolf.ru/assets/x90plus-8d7fac97.png" alt="" /></a>
                            <p>X90PLUS</p>
                        </li>
                        <li className="footer__car">
                            <a href='#x70plus'><img src="https://jetour-rolf.ru/assets/x70plus-e03c9714.png" alt="" /></a>
                            <p>X70PLUS</p>
                        </li>
                        <li className="footer__car">
                            <a href='#t2'><img src="https://jetour-rolf.ru/assets/t2-dfe9a5ab.png" alt="" /></a>
                            <p>T2</p>
                        </li>
                        <li className="footer__car">
                            <a href='#x50'><img src="https://jetour-rolf.ru/assets/x50-cfe86dd4.png" alt="" /></a>
                            <p>X50</p>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="container-footer">
                <section className="footer__bottom">
                    <button type="button" className="base-button base-button--text base-button--bordered footer__button" onClick={toggleLogin}>Подробные условия акции</button>
                    <a href="https://www.rolf.ru/policy/" className="footer__button" target="_blank" rel="noopener">Политика АО «РОЛЬФ» в области обработки и обеспечения безопасности персональных данных</a>
                    <p className={isLoggedIn ? '' : 'block-footer__action-info'}> Указанные цены и выгоды достигаются за счет покупки автомобиля в кредит или по программе трейд-ин. <br /><br /> Условия кредитной программы ЧЕСТНАЯ АВТОРАССРОЧКА: первоначальный взнос (ПВ) от 0% от стоимости автомобиля при сроке 12 месяцев с возможностью увеличения до 18 месяцев (стоимость рассрочки для клиента - 1 ежемесячный платеж), от 70% при сроке рассрочки 18 месяцев с возможностью пролонгации до 24 или 30 месяцев (до 24 месяцев стоимость рассрочки для клиента - 1 ежемесячный платеж, до 30 месяцев – 2 ежемесячных платежа). <br /><br /> Условия кредитной программы JETOUR DIRECT и JETOUR DIRECT PROMO***: срок кредита (СК) от 36 до 84 месяцев, процентная ставка (ПС) от 10,9% при ПВ от 70% и СК 36 месяцев. Валюта кредита: рубли РФ. Обязательное оформление полиса КАСКО, минимальный набор рисков угон/тоталь автомобиля. Для сохранения процентной ставки необходимо совершение не менее 5(пяти) расходных операции по карте ХАЛВА на общую сумму от 10000 рублей (при невыполнении условия – увеличение процентной ставки на 6 п.п.). <br /><br /> *Джетур <br /><br /> **Рассрочка предоставляется Банками: АО «Альфа-Банк» лицензия ЦБ РФ № 1326 от 16 января 2015 г., ПАО Банк «ФК Открытие» Лицензия ЦБ, 2209, ПАО «Совкомбанк» Лицензия ЦБ, 963, ПАО «Росбанк» лицензия ЦБ, 2272. Первоначальный взнос 70%, Ставка 0,01%, Срок 12 мес. Сумма рассрочки от 100 000 руб до 10 000 000 руб. Подробные условия уточняйте в отделе продаж. <br /><br /> Все минимальные расчеты являются ориентировочными на момент публикации информации. Не являются офертой. Подробности, условия и сроки действия акций уточняйте в отделе продаж. </p>
                    <div className="footer__info">
                        <p>© 2024, РОЛЬФ ДЖЕТУР</p><p>АКЦИОНЕРНОЕ ОБЩЕСТВО “РОЛЬф”</p>
                        <p>ИНН: 7810019725</p><p>ОГРН: 1057810067150</p>
                    </div>
                </section>
            </div>
        </footer >
    );
};

export default Footer;
