import React from 'react';
import CarCard from '../../components/CarCard/CarCard.jsx';
import "./HomePage.scss";

const cars = [
    {
        model: 'DASHING',
        discount: '570 000₽',
        offers: ['Кредит от 0,01%', 'Допы в подарок', 'До выгода за трейд-ин', 'Каско в подарок'],
        car: {
            black: 'https://jetour-rolf.ru/assets/1-0bf8a252.jpg',
            green: 'https://jetour-rolf.ru/assets/1-59fc8752.jpg',
            red: 'https://jetour-rolf.ru/assets/1-9129dcf2.jpg',
            white: 'https://jetour-rolf.ru/assets/1-7474dc66.jpg',
            grey: 'https://jetour-rolf.ru/assets/1-c9eab1c3.jpg',
            blue: 'https://jetour-rolf.ru/assets/1-9f6429b0.jpg',
            milk: 'https://jetour-rolf.ru/assets/1-7ec987a9.jpg'
        },
        salon: {
            milk: 'https://jetour-rolf.ru/assets/1-7baa38a7.jpg',
            grey: 'https://jetour-rolf.ru/assets/1-4c016462.jpg'
        }
    },
    {
        model: 'X90PLUS',
        discount: '620 000₽',
        offers: ['Кредит от 0,01%', 'Допы в подарок', 'До выгода за трейд-ин', 'Каско в подарок'],
        car: {
            grey: 'https://jetour-rolf.ru/assets/1-f2ec0f69.jpg',
            dark_blue: 'https://jetour-rolf.ru/assets/1-9f4636fc.jpg',
            black: 'https://jetour-rolf.ru/assets/1-13b8e506.jpg',
            white: 'https://jetour-rolf.ru/assets/1-47038492.jpg'
        },
        salon: {
            red: 'https://jetour-rolf.ru/assets/1-fb0e707a.jpg'
        }
    },
    {
        model: 'SMYH',
        discount: '620 000₽',
        image: 'https://jetour-rolf.ru/assets/1-3c8d527c.jpg',
        offers: ['Кредит от 0,01%', 'Допы в подарок', 'До выгода за трейд-ин', 'Каско в подарок'],
        car: {
            dark_blue: 'https://jetour-rolf.ru/assets/1-9f4636fc.jpg',
            red: '',
            grey: 'https://jetour-rolf.ru/assets/1-f2ec0f69.jpg',
            white: 'https://jetour-rolf.ru/assets/1-47038492.jpg',
            milk: '',
            blue: '',
            black: 'https://jetour-rolf.ru/assets/1-13b8e506.jpg',
            green: ''
        },
        salon: {
            black: 'https://jetour-rolf.ru/assets/1-fb0e707a.jpg',
            yellow: ''
        }
    },
];

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="homepage__cars">
                {cars.map((car, index) => (
                    <CarCard
                        key={index}
                        model={car.model}
                        discount={car.discount}
                        car={car.car} // Передаём объект цветов автомобиля
                        salon={car.salon} // Можно использовать для другого функционала
                        offers={car.offers}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
