// eslint-disable-next-line no-unused-vars
import React from 'react';
import './index.css';
import TopBar from './Components/TopBar';
import HomePage from './Components/HomePage';  
import AboutUs from './Components/AboutUs'; 
import WhyChooseUs from './Components/WhyChooseUs';
import Products from './Components/Products';
import ContactPage from './Components/ContactPage';

function App() {
  return (
    <div>
      <TopBar />
      <HomePage />
      <AboutUs />
      <WhyChooseUs />
      <Products />
      <ContactPage />
     
    </div>
  );
}

export default App;