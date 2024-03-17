import React from 'react';
import Header from './header'; // Import Header component
import Footer from './footer'; // Import Footer component
import UranusCarousel from './carousel'; // Import UranusCarousel component
import uranus from './assets/uranus.jpeg'; // Import image

function App() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <Header />
        <img src={uranus} alt="" className="h-67 md:h-96" /> {/* Adjust image height for responsiveness */}
        <UranusCarousel />
      </div>
      <Footer />
    </>
  );
}

export default App;


