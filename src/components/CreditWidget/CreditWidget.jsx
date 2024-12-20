import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './CreditWidget.scss';

const CreditWidget = () => {
    const [phone, setPhone] = useState('');
    const [isValidPhone, setIsValidPhone] = useState(false);
    const [agreed, setAgreed] = useState(false);

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);

        // Проверка номера телефона (например, полный формат: +7 (XXX) XXX-XX-XX)
        const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        setIsValidPhone(phoneRegex.test(value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (agreed && isValidPhone) {
            alert('Заявка отправлена!');
        } else {
            alert('Заполните все поля корректно и подтвердите согласие.');
        }
    };

    return (
        <div className="widget-container" id='credit'>
            <div className="widget-content">
                <h2 className="widget-title">Оформить кредит 0,01% <br /> без первого взноса!</h2>
                <form
                    className="form block-credit__form form--horizontal"
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <div className="form__wrapper">
                        <div className={`form__input ${isValidPhone ? 'valid' : ''}`}>
                            <div className="basel-input">
                                <div className="basel-input__container">
                                    <InputMask
                                        mask="+7 (999) 999-99-99"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        className="basel-input__field"
                                        placeholder="Телефон"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className={`basel-button basel-button--primary basel-button--bordered basel-button--block form__btn ${(!agreed || !isValidPhone) ? 'basel-button--disabled' : ''}`}
                            disabled={!agreed || !isValidPhone}
                        >
                            Оставить заявку
                        </button>
                        <label className="form__agreement basel-checkbox" htmlFor="agreement">
                            <input
                                id="agreement"
                                type="checkbox"
                                checked={agreed}
                                onChange={() => setAgreed(!agreed)}
                            />
                            <span className="basel-checkbox__checkmark"></span>
                            <span className="basel-checkbox__label">
                                <span className="form__agreement-text">Согласен с </span>
                                <a
                                    className="form__agreement-link"
                                    href="https://www.rolf.ru/agreement/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    условиями обработки персональных данных
                                </a>
                            </span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreditWidget;
