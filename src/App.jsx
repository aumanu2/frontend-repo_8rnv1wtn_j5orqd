import React from 'react';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import DestinationDetail from './components/DestinationDetail';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-black font-['Inter',system-ui,sans-serif] text-white">
      <Hero />
      <Destinations />
      <DestinationDetail />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
