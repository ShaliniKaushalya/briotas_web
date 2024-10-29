
// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect, useState } from 'react';

const ContactPage = () => {
  const formRef = useRef(null);
  const [formHeight, setFormHeight] = useState('auto');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.offsetHeight); 
    }
  }, []);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-center bg-cover"
      style={{ backgroundImage: "url('https://wptf.themepul.co/fitmas/wp-content/uploads/2023/07/counter-bg1-1.png')" }}
    >
      {/* Centered Contact Us Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleButtonClick}
          className={`px-6 py-4 text-xl font-semibold text-white bg-red-700 border border-red-700 rounded-lg hover:bg-black transition-all duration-300 ${
            isButtonClicked ? 'bg-black' : 'bg-red-700'
          }`}
          style={{ fontFamily: "'Segoe UI Emoji', sans-serif" }}
        >
          Contact Us
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-8 p-4 mt-8">
        {/* Call Us Section */}
        <div className="flex flex-col items-center p-6 space-y-2 text-center bg-white border border-gray-300 rounded-lg shadow-lg bg-opacity-80">
          <div className="text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 003 3h3l3-3v-6l-3-3h-3a3 3 0 00-3 3v6zM9 12a3 3 0 01-3 3H3l-3-3V6l3-3h3a3 3 0 013 3v6z" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-red-500" style={{ fontFamily: "'Segoe UI Emoji', sans-serif" }}>CALL US 24/7</h2>
          <p className="text-black" style={{ fontFamily: "'Segoe UI Emoji', sans-serif" }}>011 2437891</p>
        </div>

        {/* Email Us Section */}
        <div className="flex flex-col items-center p-6 space-y-2 text-center bg-white border border-gray-300 rounded-lg shadow-lg bg-opacity-80">
          <div className="text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8V4a2 2 0 00-2-2H6a2 2 0 00-2 2v4M16 8V4m0 4v6M8 12h8l1-1M7 17h10l1-1m-1-4H7m4-4H7m8-4H7m8 4h2m-2-4h2M7 12H5m2-4H5m2-2H5" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-red-500" style={{ fontFamily: "'Segoe UI Emoji', sans-serif" }}>EMAIL US</h2>
          <p className="text-black" style={{ fontFamily: "'Segoe UI Emoji', sans-serif" }}>info@briotas.com</p>
        </div>

        {/* Office Location Section */}
        <div className="flex flex-col items-center p-6 space-y-2 text-center bg-white border border-gray-300 rounded-lg shadow-lg bg-opacity-80">
          <div className="text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c2.21 0 4-1.79 4-4S14.21 0 12 0 8 1.79 8 4s1.79 4 4 4zm-3 4c-4 0-7 3-7 7v1h2v-1c0-2.21 1.79-4 4-4s4 1.79 4 4v1h2v-1c0-4-3-7-7-7zm1 0h4v1H9v-1zm-5 5h14v1H4v-1zm1 3h12v1H5v-1z" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-red-500" style={{ fontFamily: "'Segoe UI Emoji', sans-serif" }}>OFFICE LOCATION</h2>
          <p className="text-black" style={{ fontFamily: "'Segoe UI Emoji', sans-serif" }}>N0.123, Depanama Road, Pannipitiya</p>
        </div>
      </div>

      {/* Contact Form Section with Left-Side Animated Image */}
      <div className="flex items-start mt-10">
        {/* Left-Side Animated Image */}
        <div className="mr-4 animate-bounce" style={{ height: formHeight }}>
          <img
            src="https://briotas.com/wp-content/uploads/2023/09/Home-img-07.jpg"
            alt="Animated Side Image"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>

        {/* Enlarged Contact Form */}
        <div ref={formRef} className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg bg-opacity-90">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800" style={{ fontFamily: "'Segoe UI Emoji', sans-serif" }}>Send Us a Message</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required style={{ fontFamily: "'Segoe UI Emoji', sans-serif" }} />
            <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required style={{ fontFamily: "'Segoe UI Emoji', sans-serif" }} />
            <input type="text" placeholder="Subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required style={{ fontFamily: "'Segoe UI Emoji', sans-serif" }} />
            <textarea placeholder="Type Your Message" className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg" required style={{ fontFamily: "'Segoe UI Emoji', sans-serif" }}></textarea>
            <button type="submit" className="w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600" style={{ fontFamily: "'Segoe UI Emoji', sans-serif" }}>Send a Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

