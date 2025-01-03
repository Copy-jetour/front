import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './JetourBanner.scss';

const images = [
  { src: require('../../assets/images/image1.jpg'), benefit: 'ВЫГОДА ДО 320 000₽', model: 'T2' },
  { src: require('../../assets/images/image2.jpg'), benefit: 'ВЫГОДА ДО 570 000₽', model: 'DASHING' },
  { src: require('../../assets/images/image3.jpg'), benefit: 'ВЫГОДА ДО 620 000₽', model: 'X90PLUS' },
  { src: require('../../assets/images/image4.jpg'), benefit: 'ВЫГОДА ДО 520 000₽', model: 'X70PLUS' },
  { src: require('../../assets/images/image5.jpg'), benefit: 'УЖЕ В НАЛИЧИИ', model: 'X50' },
];

const JetourBanner = ({ openModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleMouseDown = (e) => {
    setDragStartX(e.clientX || e.touches?.[0]?.clientX || 0);
  };

  const handleMouseMove = (e) => {
    if (dragStartX !== null) {
      const currentX = e.clientX || e.touches?.[0]?.clientX || 0;
      setDragOffset(currentX - dragStartX);
    }
  };

  const handleMouseUp = () => {
    if (dragOffset > 50) {
      prevSlide();
    } else if (dragOffset < -50) {
      nextSlide();
    }
    setDragOffset(0);
    setDragStartX(null);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  const getTransform = () => {
    return `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`;
  };

  return (
    <div
      className="jetour-banner"
      {...swipeHandlers}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      <div className="jetour-banner__container" style={{ transform: getTransform() }}>
        {images.map((image, index) => (
          <div className="jetour-banner__image" key={index}>
            <img src={image.src} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="block-main">
        <div className="block-main__titles">
          <h1 className="block-main__title">
            НОВОГОДНИЕ ПРОДАЖИ JETOUR!<br /> ВОЛШЕБНЫЕ ДНИ В РОЛЬФ!
          </h1>
          <h1 className="block-main__subtitle">{images[currentIndex].benefit}</h1>
        </div>
        <div className="container">
          <button
            className="header__callback-button bunner-button"
            onClick={() => openModal(`Банер: Получить предложение - ${images[currentIndex].model}`)}
          >
            Получить предложение
          </button>
          <button
            className="bunner__callback-button bunner-button"
            onClick={() => openModal(`Банер: Записаться на тест-драйв - ${images[currentIndex].model}`)}
          >
            Записаться на тест-драйв
          </button>
        </div>
      </div>
      <div className="jetour-banner__dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`jetour-banner__dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default JetourBanner;
