import React from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import JetourBanner from './components/JetourBanner/JetourBanner.jsx';
import Widget from './components/Widget/Widget.jsx';
import CreditWidget from './components/CreditWidget/CreditWidget.jsx';
import AdvantagesWidget from './components/AdvantagesWidget/AdvantagesWidget.jsx';
import MapWidget from './components/MapWidget/MapWidget.jsx';
import './styles/main.scss';
//import './styles/index_style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <JetourBanner />
        <Widget />
        <HomePage />
        <CreditWidget />
        <AdvantagesWidget />
        <MapWidget />
        <Footer />
      </main>
    </div>
  );
}

export default App;
