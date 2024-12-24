import React, { useState, useEffect } from 'react';
import FireIcon from '../../assets/images/fire.svg';
import './Widget.scss';
import './Timer.scss';

const splitTime = (days, hours, minutes, seconds) => {
    const daysStr = String(days).padStart(2, '0');
    const hoursStr = String(hours).padStart(2, '0');
    const minutesStr = String(minutes).padStart(2, '0');
    const secondsStr = String(seconds).padStart(2, '0');

    return {
        days_first: Number(daysStr[0]),
        days_second: Number(daysStr[1]),
        hours_first: Number(hoursStr[0]),
        hours_second: Number(hoursStr[1]),
        minutes_first: Number(minutesStr[0]),
        minutes_second: Number(minutesStr[1]),
        seconds_first: Number(secondsStr[0]),
        seconds_second: Number(secondsStr[1]),
    };
};

const Widget = ({ openModal }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 9, hours: 0, minutes: 4, seconds: 35 });
    const [splitDigits, setSplitDigits] = useState(splitTime(9, 0, 4, 35));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                const { days, hours, minutes, seconds } = prevTime;
                let newTime;

                if (seconds > 0) newTime = { ...prevTime, seconds: seconds - 1 };
                else if (minutes > 0) newTime = { ...prevTime, seconds: 59, minutes: minutes - 1 };
                else if (hours > 0) newTime = { ...prevTime, minutes: 59, seconds: 59, hours: hours - 1 };
                else if (days > 0) newTime = { ...prevTime, hours: 23, minutes: 59, seconds: 59, days: days - 1 };
                else {
                    clearInterval(timer);
                    return prevTime;
                }

                setSplitDigits(splitTime(newTime.days, newTime.hours, newTime.minutes, newTime.seconds));
                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="widget">
            <div className="container_time">
                <div className="widget-header">
                    <h3 className="block-clock__title">Выгоды <nobr> до 620&nbsp;000₽</nobr></h3>
                    <div className="block-clock__icon" title="Предложение ограничено" data-test="callback">
                        <img src={FireIcon} alt="Fire" />
                    </div>

                    <div className="timer">
                        <div className="timer__timer">
                            <div className="timer__stat">
                                <div className="timer__stat-value-container">
                                    <div className="timer__stat-value">{splitDigits.days_first}</div>
                                    <div className="timer__stat-value">{splitDigits.days_second}</div>
                                </div>
                                <div className="timer__stat-name">дней</div>
                            </div>
                            <div className="separator"></div>
                            <div className="timer__stat">
                                <div className="timer__stat-value-container">
                                    <div className="timer__stat-value">{splitDigits.hours_first}</div>
                                    <div className="timer__stat-value">{splitDigits.hours_second}</div>
                                </div>
                                <div className="timer__stat-name">часа</div>
                            </div>
                            <div className="separator"></div>
                            <div className="timer__stat">
                                <div className="timer__stat-value-container">
                                    <div className="timer__stat-value">{splitDigits.minutes_first}</div>
                                    <div className="timer__stat-value">{splitDigits.minutes_second}</div>
                                </div>
                                <div className="timer__stat-name">минуты</div>
                            </div>
                            <div className="separator"></div>
                            <div className="timer__stat">
                                <div className="timer__stat-value-container">
                                    <div className="timer__stat-value">{splitDigits.seconds_first}</div>
                                    <div className="timer__stat-value">{splitDigits.seconds_second}</div>
                                </div>
                                <div className="timer__stat-name">секунда</div>
                            </div>
                        </div>
                    </div>
                    <button className="base-button base-button--primary base-button--bordered block-clock__btn" onClick={() => openModal(`Зафиксировать выгоду: ${timeLeft.days} дней ${timeLeft.hours} часов ${timeLeft.minutes} минут ${timeLeft.seconds} секунд`)}>Зафиксировать выгоду</button>
                </div>
                <div className="block-offer" alt="Car">
                    <div className="block-offer__content">
                        <div className="credit-rate">Кредит 0,01%</div>
                        <p className="credit-details"> Без первоначального взноса<br />на срок <b> до 84 месяцев</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Widget;
