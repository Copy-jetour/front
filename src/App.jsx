import React from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
