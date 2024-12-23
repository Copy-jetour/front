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
            black: {
                1: 'https://jetour-rolf.ru/assets/1-0bf8a252.jpg',
                2: 'https://jetour-rolf.ru/assets/2-89ca13da.jpg',
                3: 'https://jetour-rolf.ru/assets/3-432c1cd3.jpg',
                4: 'https://jetour-rolf.ru/assets/4-ca013aea.jpg',
                5: 'https://jetour-rolf.ru/assets/5-ad1224b0.jpg',
                6: 'https://jetour-rolf.ru/assets/6-5757d7e2.jpg',
            },
            green: {
                1: 'https://jetour-rolf.ru/assets/1-59fc8752.jpg',
                2: 'https://jetour-rolf.ru/assets/2-cdd437b6.jpg',
                3: 'https://jetour-rolf.ru/assets/3-311b4df3.jpg',
                4: 'https://jetour-rolf.ru/assets/4-c30f9fb1.jpg',
                5: 'https://jetour-rolf.ru/assets/5-683c0361.jpg',
                6: 'https://jetour-rolf.ru/assets/6-048407da.jpg',
                7: 'https://jetour-rolf.ru/assets/7-a47fa34e.jpg'
            },
            red: {
                1: 'https://jetour-rolf.ru/assets/1-9129dcf2.jpg',
                2: 'https://jetour-rolf.ru/assets/2-5d75a68a.jpg',
                3: 'https://jetour-rolf.ru/assets/3-9e59db46.jpg',
                4: 'https://jetour-rolf.ru/assets/4-1e541da6.jpg',
                5: 'https://jetour-rolf.ru/assets/5-b289a20a.jpg',
                6: 'https://jetour-rolf.ru/assets/6-f1bd7c34.jpg',
                7: 'https://jetour-rolf.ru/assets/7-358fd2a9.jpg'
            },
            white: {
                1: 'https://jetour-rolf.ru/assets/1-7474dc66.jpg',
                2: 'https://jetour-rolf.ru/assets/2-b2cd0150.jpg',
                3: 'https://jetour-rolf.ru/assets/3-313f3150.jpg',
                4: 'https://jetour-rolf.ru/assets/4-cad4600a.jpg',
                5: 'https://jetour-rolf.ru/assets/5-70b8da87.jpg',
                6: 'https://jetour-rolf.ru/assets/6-f740e57e.jpg'
            },
            grey: {
                1: 'https://jetour-rolf.ru/assets/1-c9eab1c3.jpg',
                2: 'https://jetour-rolf.ru/assets/2-b7792e57.jpg',
                3: 'https://jetour-rolf.ru/assets/3-900fe76e.jpg',
                4: 'https://jetour-rolf.ru/assets/4-eab6a99f.jpg',
                5: 'https://jetour-rolf.ru/assets/5-0971350e.jpg',
                6: 'https://jetour-rolf.ru/assets/6-f740e57e.jpg',
                7: 'https://jetour-rolf.ru/assets/7-b71b7d41.jpg'
            },
            blue: { 1: 'https://jetour-rolf.ru/assets/1-9f6429b0.jpg' },
            light_grey: { 1: 'https://jetour-rolf.ru/assets/1-7ec987a9.jpg' }
        },
        salon: {
            light_grey: {
                1: 'https://jetour-rolf.ru/assets/1-7baa38a7.jpg',
                2: 'https://jetour-rolf.ru/assets/2-1a25a154.jpg',
                3: 'https://jetour-rolf.ru/assets/3-fadd6a74.jpg',
                4: 'https://jetour-rolf.ru/assets/4-2d1f1a07.jpg',
                5: 'https://jetour-rolf.ru/assets/5-e7fef3cb.jpg',
                6: 'https://jetour-rolf.ru/assets/6-2b021f26.jpg'
            },
            grey: {
                1: 'https://jetour-rolf.ru/assets/1-4c016462.jpg',
                2: 'https://jetour-rolf.ru/assets/1-4c016462.jpg',
                3: 'https://jetour-rolf.ru/assets/2-f21e76ca.jpg',
                4: 'https://jetour-rolf.ru/assets/3-0c8a092f.jpg',
                5: 'https://jetour-rolf.ru/assets/4-3bca0146.jpg',
                6: 'https://jetour-rolf.ru/assets/5-aa35e866.jpg',
                7: 'https://jetour-rolf.ru/assets/6-1d440a34.jpg'

            }
        }
    },
    {
        model: 'X90PLUS',
        discount: '620 000₽',
        offers: ['Кредит от 0,01%', 'Допы в подарок', 'До выгода за трейд-ин', 'Каско в подарок'],
        rate: 'https://jetour-rolf.ru/assets/car-of-the-year-20e94caf.webp',
        car: {
            grey: {
                1: 'https://jetour-rolf.ru/assets/1-f2ec0f69.jpg',
                2: 'https://jetour-rolf.ru/assets/2-63597168.jpg',
                3: 'https://jetour-rolf.ru/assets/3-8d9b84c9.jpg',
                4: 'https://jetour-rolf.ru/assets/4-4f58c85b.jpg',
                5: 'https://jetour-rolf.ru/assets/5-3cd7ba1d.jpg',
                6: 'https://jetour-rolf.ru/assets/6-09429e78.jpg',
                7: 'https://jetour-rolf.ru/assets/7-a3c8fda8.jpg'

            },
            dark_blue: { 1: 'https://jetour-rolf.ru/assets/1-9f4636fc.jpg' },
            black: { 1: 'https://jetour-rolf.ru/assets/1-13b8e506.jpg' },
            white: { 1: 'https://jetour-rolf.ru/assets/1-47038492.jpg' }
        },
        salon: {
            red: {
                1: 'https://jetour-rolf.ru/assets/1-fb0e707a.jpg',
                2: 'https://jetour-rolf.ru/assets/2-d760fcd7.jpg',
                3: 'https://jetour-rolf.ru/assets/3-a41b742b.jpg',
                4: 'https://jetour-rolf.ru/assets/4-bab592f2.jpg',
                5: 'https://jetour-rolf.ru/assets/5-90ec4baa.jpg',
                6: 'https://jetour-rolf.ru/assets/6-7f607cf2.jpg'
            }
        }
    },
    {
        model: 'X70PLUS',
        discount: '520 000₽',
        offers: ['Кредит от 0,01%', 'Допы в подарок', 'До выгода за трейд-ин', 'Каско в подарок'],
        rate: '',
        car: {
            dark_blue: {
                1: 'https://jetour-rolf.ru/assets/1-3c8d527c.jpg',
                2: 'https://jetour-rolf.ru/assets/2-8d60f157.jpg',
                3: 'https://jetour-rolf.ru/assets/3-f7a86463.jpg',
                4: 'https://jetour-rolf.ru/assets/4-87569aa0.jpg',
                5: 'https://jetour-rolf.ru/assets/5-1683ad61.jpg',
                6: 'https://jetour-rolf.ru/assets/6-82d6e012.jpg',
                7: 'https://jetour-rolf.ru/assets/7-010123be.jpg'
            },
            red: {
                1: 'https://jetour-rolf.ru/assets/1-a98d4795.jpg',
                2: 'https://jetour-rolf.ru/assets/1-a98d4795.jpg',
                3: 'https://jetour-rolf.ru/assets/2-bc3f9ba6.jpg',
                4: 'https://jetour-rolf.ru/assets/3-5f9f007c.jpg',
                5: 'https://jetour-rolf.ru/assets/4-ad72bb2e.jpg',
                6: 'https://jetour-rolf.ru/assets/5-547acd0e.jpg',
                7: 'https://jetour-rolf.ru/assets/6-a11c868e.jpg',
                8: 'https://jetour-rolf.ru/assets/7-379a41b7.jpg'
            },
            grey: {
                1: 'https://jetour-rolf.ru/assets/1-2600b21a.jpg',
                2: 'https://jetour-rolf.ru/assets/2-b5770e46.jpg',
                3: 'https://jetour-rolf.ru/assets/3-90689228.jpg',
                4: 'https://jetour-rolf.ru/assets/4-dcebca91.jpg',
                5: 'https://jetour-rolf.ru/assets/5-d6a4737e.jpg',
                6: 'https://jetour-rolf.ru/assets/6-9ab453a7.jpg',
                7: 'https://jetour-rolf.ru/assets/7-6f27c399.jpg'
            },
            white: {
                1: 'https://jetour-rolf.ru/assets/1-882e4329.jpg'
            },
            light_grey: {
                1: 'https://jetour-rolf.ru/assets/1-1bf4ebdd.jpg'
            },
            blue: {
                1: 'https://jetour-rolf.ru/assets/1-babc5953.jpg'
            },
            black: {
                1: 'https://jetour-rolf.ru/assets/1-4322d581.jpg'
            },
            green: {
                1: 'https://jetour-rolf.ru/assets/1-b9a733c6.jpg'
            },
        },
        salon: {
            black: {
                1: 'https://jetour-rolf.ru/assets/1-98baeb99.jpg',
                2: 'https://jetour-rolf.ru/assets/2-33438111.jpg',
                3: 'https://jetour-rolf.ru/assets/3-d404c370.jpg',
                4: 'https://jetour-rolf.ru/assets/4-c4abd74e.jpg',
                5: 'https://jetour-rolf.ru/assets/5-868b1e79.jpg',
                6: 'https://jetour-rolf.ru/assets/6-5c02d038.jpg'
            },
            yellow: {
                1: 'https://jetour-rolf.ru/assets/1-55cf2e1b.jpg',
                2: 'https://jetour-rolf.ru/assets/2-c06dc8e8.jpg',
                3: 'https://jetour-rolf.ru/assets/3-10fee938.jpg',
                4: 'https://jetour-rolf.ru/assets/4-0645961d.jpg',
                5: 'https://jetour-rolf.ru/assets/5-2f2ea313.jpg',
                6: 'https://jetour-rolf.ru/assets/6-63f1cd16.jpg'
            }
        }
    },
    {
        model: 'T2',
        discount: '320 000₽',
        offers: ['Кредит от 0,01%', 'Допы в подарок', 'До выгода за трейд-ин', 'Каско в подарок'],
        rate: '',
        car: {
            milk: {
                1: 'https://jetour-rolf.ru/assets/1-17ee857b.jpg',
                2: 'https://jetour-rolf.ru/assets/2-0784b008.jpg',
                3: 'https://jetour-rolf.ru/assets/3-00187962.jpg',
                4: 'https://jetour-rolf.ru/assets/4-3968da56.jpg',
                5: 'https://jetour-rolf.ru/assets/5-bfdde6b7.jpg',
                6: 'https://jetour-rolf.ru/assets/6-23ead84e.jpg',
                7: 'https://jetour-rolf.ru/assets/7-b62b04ff.jpg'
            },
            black: {
                1: 'https://jetour-rolf.ru/assets/1-b6d286c1.jpg',
                2: 'https://jetour-rolf.ru/assets/2-a880fd02.jpg',
                3: 'https://jetour-rolf.ru/assets/3-c41633f5.jpg',
                4: 'https://jetour-rolf.ru/assets/4-16228b3e.jpg',
                5: 'https://jetour-rolf.ru/assets/5-13fe7b1a.jpg',
                6: 'https://jetour-rolf.ru/assets/6-cdc57a02.jpg'
            },
            blue: {
                1: 'https://jetour-rolf.ru/assets/1-e3becb09.jpg',
                2: 'https://jetour-rolf.ru/assets/2-b1817950.jpg',
                3: 'https://jetour-rolf.ru/assets/3-1f7e257e.jpg',
                4: 'https://jetour-rolf.ru/assets/4-65b2249a.jpg',
                5: 'https://jetour-rolf.ru/assets/5-60fddde5.jpg',
                6: 'https://jetour-rolf.ru/assets/6-d8122bb9.jpg',
                7: 'https://jetour-rolf.ru/assets/7-48b07e51.jpg'
            },
            blue: {
                1: 'https://jetour-rolf.ru/assets/1-0040a6c0.jpg',
                2: 'https://jetour-rolf.ru/assets/2-c06dc8e8.jpg',
                3: 'https://jetour-rolf.ru/assets/3-10fee938.jpg',
                4: 'https://jetour-rolf.ru/assets/4-0645961d.jpg',
                5: 'https://jetour-rolf.ru/assets/5-2f2ea313.jpg',
                6: 'https://jetour-rolf.ru/assets/6-63f1cd16.jpg'
            },
            grey: {
                1: 'https://jetour-rolf.ru/assets/1-f659787e.jpg',
            },
            white: {
                1: 'https://jetour-rolf.ru/assets/1-c58bd682.jpg',
            },
        },
        salon: {
            yellow: {
                1: 'https://jetour-rolf.ru/assets/1-4703a2ac.jpg',
                2: 'https://jetour-rolf.ru/assets/2-24dd64bd.jpg',
                3: 'https://jetour-rolf.ru/assets/3-81f73391.jpg',
                4: 'https://jetour-rolf.ru/assets/4-a8de0f97.jpg',
                5: 'https://jetour-rolf.ru/assets/5-20cec4d4.jpg',
                6: 'https://jetour-rolf.ru/assets/6-5517ead3.jpg'
            },
            black: {
                1: 'https://jetour-rolf.ru/assets/1-d05bce2a.jpg',
                2: 'https://jetour-rolf.ru/assets/2-e981456d.jpg',
                3: 'https://jetour-rolf.ru/assets/3-a5860127.jpg',
                4: 'https://jetour-rolf.ru/assets/4-637315d0.jpg',
                5: 'https://jetour-rolf.ru/assets/5-a99b5f67.jpg',
                6: 'https://jetour-rolf.ru/assets/6-7d3c5f08.jpg'
            },
        }
    },
    {
        model: 'X50',
        discount: 'Уже в продаже',
        offers: [],
        rate: '',
        car: {
            black: {
                1: 'https://jetour-rolf.ru/assets/1-776a002c.jpg',
                2: 'https://jetour-rolf.ru/assets/2-96a77e20.jpg',
                3: 'https://jetour-rolf.ru/assets/3-f1fdb777.jpg',
                4: 'https://jetour-rolf.ru/assets/4-edf3c7c2.jpg',
                5: 'https://jetour-rolf.ru/assets/5-1878fe21.jpg',
                6: 'https://jetour-rolf.ru/assets/6-53879240.jpg',
                7: 'https://jetour-rolf.ru/assets/7-733bea48.jpg'
            },
            grey: {
                1: 'https://jetour-rolf.ru/assets/1-2da88321.jpg',
                2: 'https://jetour-rolf.ru/assets/2-768fe964.jpg',
                3: 'https://jetour-rolf.ru/assets/3-6b77ad10.jpg',
                4: 'https://jetour-rolf.ru/assets/4-cb1fe716.jpg',
                5: 'https://jetour-rolf.ru/assets/5-152f9f32.jpg',
                6: 'https://jetour-rolf.ru/assets/6-195b347a.jpg',
                7: 'https://jetour-rolf.ru/assets/7-a8c98995.jpg',
                8: 'https://jetour-rolf.ru/assets/8-13bc8202.jpg'
            },
            light_grey: {
                1: 'https://jetour-rolf.ru/assets/1-1fdc92be.jpg',
            },
            white: {
                1: 'https://jetour-rolf.ru/assets/1-5576b28e.jpg',
            },
            light_grey: {
                1: 'https://jetour-rolf.ru/assets/1-b05520e0.jpg',
            },
        },
        salon: {
            black: {
                1: 'https://jetour-rolf.ru/assets/1-2705e6fb.jpg',
                2: 'https://jetour-rolf.ru/assets/2-9fb02e4d.jpg',
                3: 'https://jetour-rolf.ru/assets/3-809eba38.jpg',
                4: 'https://jetour-rolf.ru/assets/4-56a12f31.jpg',
                5: 'https://jetour-rolf.ru/assets/5-a57fd211.jpg',
                6: 'https://jetour-rolf.ru/assets/6-90c42510.jpg'
            },
            dark_blue: {
                1: 'https://jetour-rolf.ru/assets/1-34e9249e.jpg',
                2: 'https://jetour-rolf.ru/assets/2-5817cf0d.jpg',
                3: 'https://jetour-rolf.ru/assets/3-e2d1ca58.jpg',
                4: 'https://jetour-rolf.ru/assets/4-c593af31.jpg',
                5: 'https://jetour-rolf.ru/assets/5-588c091d.jpg',
                6: 'https://jetour-rolf.ru/assets/6-7d3c5f08.jpg',
                7: 'https://jetour-rolf.ru/assets/6-55f63a44.jpg'
            },
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
