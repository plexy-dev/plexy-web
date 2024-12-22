import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import DevelopmentProcess from './components/DevelopmentProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import NeuralBackground from './components/NeuralBackground';

function App() {
  return (
    <div className="relative min-h-screen">
      <NeuralBackground />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Features />
          <DevelopmentProcess />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;