import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      <InteractiveBackground />
      
      <div className={`relative z-10 flex flex-col min-h-screen transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <Hero />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;