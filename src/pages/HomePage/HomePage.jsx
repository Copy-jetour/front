import React from 'react';
import CarCard from '../../components/CarCard/CarCard.jsx';
import "./HomePage.scss";

const cars = [
    {
        model: 'JETOUR DASHING',
        discount: '570 000₽',
        image: 'https://jetour-rolf.ru/assets/1-0bf8a252.jpg',
        offers: ['Кредит от 0,01%', 'Допы в подарок', 'До выгода за трейд-ин', 'Каско в подарок'],
    },
    {
        model: 'JETOUR X90PLUS',
        discount: '620 000₽',
        image: 'https://jetour-rolf.ru/assets/1-f2ec0f69.jpg',
        offers: ['Кредит от 0,01%', 'Допы в подарок', 'До выгода за трейд-ин', 'Каско в подарок'],
    },
    {
        model: 'JETOUR SMYH',
        discount: '620 000₽',
        image: 'https://jetour-rolf.ru/assets/1-3c8d527c.jpg',
        offers: ['Кредит от 0,01%', 'Допы в подарок', 'До выгода за трейд-ин', 'Каско в подарок'],
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
                        image={car.image}
                        offers={car.offers}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
