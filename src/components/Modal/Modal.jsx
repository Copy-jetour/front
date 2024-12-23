import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './Modal.scss';
import CloseImg from "../../assets/images/close-18403a2f.svg";

const Modal = ({ isOpen, onClose }) => {
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

    if (!isOpen) {
        return <div style={{ display: 'none' }} />;
    }

    return (
        <div className="modal-overlay">
            <div className="base-dialog" tabIndex="-1">
                <div className="base-dialog__content">
                    <header className="base-dialog__header">
                        <h4 className="base-dialog__title">ОБРАТНЫЙ ЗВОНОК</h4>
                    </header>
                    <div className="base-dialog__body">
                        <form
                            className="form"
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
                                                className="basel-input__field modal-input"
                                                placeholder="Телефон"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form__wrapper modal-component">
                                <button
                                    type="submit"
                                    className={`basel-button basel-button--primary basel-button--bordered modal-button basel-button--block form__btn ${(!agreed || !isValidPhone) ? 'basel-button--disabled' : ''}`}
                                    disabled={!agreed || !isValidPhone}
                                >
                                    Оставить заявку
                                </button>
                            </div>
                            <div className="form__wrapper modal-component">
                                <label className="form__agreement_modal basel-checkbox" htmlFor="agreement_modal">
                                    <input
                                        id="agreement_modal"
                                        type="checkbox"
                                        checked={agreed}
                                        onChange={() => { console.log("Agreeting..."); setAgreed(!agreed); }}
                                    />
                                    <span className="basel-checkbox__checkmark"></span>
                                    <span className="basel-checkbox__label">
                                        <span className="form__agreement_modal-text">Согласен с </span>
                                        <a
                                            className="form__agreement_modal-link"
                                            href="https://www.rolf.ru/agreement_modal/"
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
                    <button
                        type="button"
                        className="base-button base-button--default base-button--bordered base-button--icon-only base-button--circle base-dialog__close"
                        onClick={onClose}
                    >
                        <i className="base-icon">
                            <img src={CloseImg} alt="Закрыть" className="base-dialog__close-icon" />
                        </i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
