// App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css'
import HeroSection from './components/HeroSection';
const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Header />
        <HeroSection />
      </main>
    </div>
  );
};

export default App;
