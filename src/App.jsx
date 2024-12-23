import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import JetourBanner from './components/JetourBanner/JetourBanner.jsx';
import Widget from './components/Widget/Widget.jsx';
import CreditWidget from './components/CreditWidget/CreditWidget.jsx';
import AdvantagesWidget from './components/AdvantagesWidget/AdvantagesWidget.jsx';
import MapWidget from './components/MapWidget/MapWidget.jsx';
import Modal from './components/Modal/Modal.jsx';
import './App.scss';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalParameter, setModalParameter] = useState(null);

  const openModal = (parameter) => {
    setModalParameter(parameter);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalParameter(null);
  };

  return (
    <div>
      <Header openModal={openModal} />
      <JetourBanner openModal={openModal} />
      <Widget openModal={openModal} />
      <HomePage openModal={openModal} />
      <CreditWidget openModal={openModal} />
      <AdvantagesWidget openModal={openModal} />
      <MapWidget openModal={openModal} />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} parameter={modalParameter} />
    </div>
  );
}

export default App;
