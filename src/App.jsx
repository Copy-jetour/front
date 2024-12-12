import React from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import JetourBanner from './components/JetourBanner/JetourBanner.jsx';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <JetourBanner />
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;