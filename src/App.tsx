import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import StarField from './components/StarField';

function App() {
  return (
    <div className="bg-illusion-dark text-white font-display overflow-x-hidden relative min-h-screen">
      <StarField />
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-illusion-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-illusion-purple/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-illusion-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-illusion-primary/5 to-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default App;