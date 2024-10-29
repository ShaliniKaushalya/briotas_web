

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const slides = [
    {
      url: 'https://briotas.com/wp-content/uploads/2023/09/B-Banner-03.png',
      text: 'THE ULTIMATE SOLUTION FOR INDUSTRY NEEDS',
    },
    {
      url: 'https://briotas.com/wp-content/uploads/2023/09/Home-img-01.jpg',
      text: 'INNOVATIVE TECHNOLOGY SOLUTIONS FOR YOUR BUSINESS',
    },
  ];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(interval); 
  }, [slides.length]);

  return (
    <div className="relative min-h-screen text-white bg-gray-900">
      {/* Navigation Bar */}
      <header className="flex items-center justify-between p-6 bg-gray-800">
        {/* Logo */}
        <a href="/">
          <img 
            src="https://briotas.com/wp-content/uploads/2023/09/Briyotas_Product_Logo_Final.png" 
            alt="Briotas Logo" 
            className="w-auto h-12" 
          />
        </a>

        {/* Navigation Links */}
        
<nav className="space-x-6">
  <a href="#home" className="hover:text-red-500">Home</a>
  <a href="#about" className="hover:text-red-500">About Us</a>
  <a href="#products" className="hover:text-red-500">Products</a>
  <a href="/contact" className="hover:text-red-500">Contact Us</a>
  <a href="#contact" className="hover:text-red-500">011 2437891</a>
</nav>

      </header>

      {/* Slide Show with Text */}
      <AnimatePresence>
        <motion.section
          key={currentSlide}
          className="relative flex flex-col items-start justify-center w-full h-screen bg-center bg-cover"
          style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* WELCOME TO BRIOTAS Text */}
          <motion.div
            className="absolute p-4 left-10 top-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-semibold tracking-wider text-white">
              WELCOME TO BRIOTAS
            </h1>
          </motion.div>

          {/* Text Content on the left side */}
          <motion.div
            className="absolute p-4 left-10 top-1/4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-extrabold">
              {slides[currentSlide].text}
            </h1>
          </motion.div>

          {/* Scroll Down Button */}
          <motion.div
            className="absolute left-10 bottom-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button className="px-6 py-3 text-lg font-semibold text-red-700 bg-white rounded hover:bg-red-700 hover:text-white">
              Scroll Down
            </button>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="absolute left-0 flex items-center justify-between w-full px-4 transform -translate-y-1/2 top-1/2">
            <button
              className="px-4 py-2 font-bold text-red-700 bg-white rounded-full"
              onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)}
            >
              PREV
            </button>
            <button
              className="px-4 py-2 font-bold text-red-700 bg-white rounded-full"
              onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)}
            >
              NEXT
            </button>
          </div>

          {/* "2024" Animation with Castellar font, 50xl size, and bold */}
          <motion.div
            className="absolute right-0 text-white transform -translate-y-1/2 text- top-1/2"
            style={{ fontFamily: 'Castellar, sans-serif', fontSize: '12rem', fontWeight: 'bold', opacity: 0.1 }}
            initial={{ x: -200 }}
            animate={{ x: 200 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            2024
          </motion.div>
        </motion.section>
      </AnimatePresence>
    </div>
  );
};

export default HomePage;