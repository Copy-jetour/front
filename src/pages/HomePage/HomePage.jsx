import React from 'react';
import CarCard from '../../components/CarCard/CarCard.jsx';
import "./HomePage.scss";

const cars = [
    {
        model: 'DASHING',
        discount: '570 000₽',
        offers: ['Кредит от 0,01%', 'Допы в подарок', 'До выгода за трейд-ин', 'Каско в подарок'],
        rate: 'https://jetour-rolf.ru/assets/carofyear-7fd9270d.png',
        car: {
            black: 'https://jetour-rolf.ru/assets/1-0bf8a252.jpg',
            green: 'https://jetour-rolf.ru/assets/1-59fc8752.jpg',
            red: 'https://jetour-rolf.ru/assets/1-9129dcf2.jpg',
            white: 'https://jetour-rolf.ru/assets/1-7474dc66.jpg',
            grey: 'https://jetour-rolf.ru/assets/1-c9eab1c3.jpg',
            blue: 'https://jetour-rolf.ru/assets/1-9f6429b0.jpg',
            light_grey: 'https://jetour-rolf.ru/assets/1-7ec987a9.jpg'
        },
        salon: {
            light_grey: 'https://jetour-rolf.ru/assets/1-7baa38a7.jpg',
            grey: 'https://jetour-rolf.ru/assets/1-4c016462.jpg'
        }
    },
    {
        model: 'X90PLUS',
        discount: '620 000₽',
        offers: ['Кредит от 0,01%', 'Допы в подарок', 'До выгода за трейд-ин', 'Каско в подарок'],
        rate: 'https://jetour-rolf.ru/assets/car-of-the-year-20e94caf.webp',
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
        model: 'X70PLUS',
        discount: '520 000₽',
        offers: ['Кредит от 0,01%', 'Допы в подарок', 'До выгода за трейд-ин', 'Каско в подарок'],
        rate: '',
        car: {
            dark_blue: 'https://jetour-rolf.ru/assets/1-3c8d527c.jpg',
            red: 'https://jetour-rolf.ru/assets/1-a98d4795.jpg',
            grey: 'https://jetour-rolf.ru/assets/1-2600b21a.jpg',
            white: 'https://jetour-rolf.ru/assets/1-882e4329.jpg',
            light_grey: 'https://jetour-rolf.ru/assets/1-1bf4ebdd.jpg',
            blue: 'https://jetour-rolf.ru/assets/1-babc5953.jpg',
            black: 'https://jetour-rolf.ru/assets/1-4322d581.jpg',
            green: 'https://jetour-rolf.ru/assets/1-b9a733c6.jpg'
        },
        salon: {
            black: 'https://jetour-rolf.ru/assets/1-98baeb99.jpg',
            yellow: 'https://jetour-rolf.ru/assets/1-55cf2e1b.jpg'
        }
    },
    {
        model: 'T2',
        discount: '320 000₽',
        offers: ['Кредит от 0,01%', 'Допы в подарок', 'До выгода за трейд-ин', 'Каско в подарок'],
        rate: '',
        car: {
            milk: 'https://jetour-rolf.ru/assets/1-17ee857b.jpg',
            black: 'https://jetour-rolf.ru/assets/1-b6d286c1.jpg',
            blue: 'https://jetour-rolf.ru/assets/1-e3becb09.jpg',
            blue: 'https://jetour-rolf.ru/assets/1-0040a6c0.jpg',
            grey: 'https://jetour-rolf.ru/assets/1-f659787e.jpg',
            white: 'https://jetour-rolf.ru/assets/1-c58bd682.jpg',
        },
        salon: {
            yellow: 'https://jetour-rolf.ru/assets/1-4703a2ac.jpg',
            black: 'https://jetour-rolf.ru/assets/1-98baeb99.jpg',
        }
    },
    {
        model: 'X50',
        discount: 'Уже в продаже',
        offers: [],
        rate: '',
        car: {
            black: 'https://jetour-rolf.ru/assets/1-776a002c.jpg',
            grey: 'https://jetour-rolf.ru/assets/1-2da88321.jpg',
            light_grey: 'https://jetour-rolf.ru/assets/1-1fdc92be.jpg',
            white: 'https://jetour-rolf.ru/assets/1-5576b28e.jpg',
            light_grey: 'https://jetour-rolf.ru/assets/1-b05520e0.jpg',
        },
        salon: {
            black: 'https://jetour-rolf.ru/assets/1-2705e6fb.jpg',
            dark_blue: 'https://jetour-rolf.ru/assets/1-34e9249e.jpg'
        }
    },
];

const HomePage = ({ openModal }) => {
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
                        rate={car.rate}
                        openModal={openModal}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
