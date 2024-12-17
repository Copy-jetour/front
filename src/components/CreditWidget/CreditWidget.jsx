import React, { useState } from 'react';
import './CreditWidget.scss';

const CreditWidget = () => {
    const [phone, setPhone] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (agreed && phone) {
            alert('Заявка отправлена!');
        } else {
            alert('Заполните все поля и подтвердите согласие.');
        }
    };

    return (
        <div className="widget-container">
            <div className="widget-content">
                <h1 className="widget-title">Оформить кредит 0,01% <br /> без первого взноса!</h1>
                <form onSubmit={handleSubmit} className="widget-form">
                    <input
                        type="tel"
                        placeholder="Телефон"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="phone-input"
                    />
                    <div className="agreement">
                        <input
                            type="checkbox"
                            id="agreement"
                            checked={agreed}
                            onChange={() => setAgreed(!agreed)}
                        />
                        <label htmlFor="agreement">
                            Согласен с <a href="#!">условиями обработки персональных данных</a>
                        </label>
                    </div>
                    <button type="submit" className="submit-button">
                        Оставить заявку
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreditWidget;
