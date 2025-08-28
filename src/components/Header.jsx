import React from 'react';
import doroWatImage from '../assets/EFC-doro-wat-hero-1280x720-1.jpg';

const Header = ({ title }) => {
  return (
    <section className="title-image text-center py-8 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        {title}
      </h1>
      <div className="max-w-4xl mx-auto mb-6">
        <img 
          src={doroWatImage} 
          alt="Doro Wat - Ethiopian Dish"
          className="w-full max-w-md mx-auto h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="max-w-4xl mx-auto text-left space-y-4">
        <p className="text-gray-700 leading-relaxed">
          Doro Wat is one of the most iconic and beloved dishes in Ethiopian cuisine. It is a spicy chicken stew traditionally made with chicken drumsticks or thighs, slow-cooked in a richly seasoned sauce of onions, berbere spice (a hot chili spice blend), and niter kibbeh (spiced clarified butter). Often, hard-boiled eggs are added toward the end, soaking up the flavors of the sauce.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This dish is deeply rooted in Ethiopian culture and is often prepared for special occasions, festivals, and holidays—especially during religious celebrations like Easter (Fasika) and Christmas (Gena). Doro Wot is not just food; it's a communal experience, commonly served with injera, a sour flatbread made from teff flour, which is used to scoop up the stew.
        </p>
      </div>
    </section>
  );
};

export default Header;

