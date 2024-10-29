// eslint-disable-next-line no-unused-vars
import React from 'react';

const WhyChooseUs = () => {
  return (
    <section
      className="flex flex-col items-center justify-center px-4 py-16 text-white bg-center bg-cover"
      style={{ backgroundImage: 'url(https://wptf.themepul.co/fitmas/wp-content/uploads/2023/07/testi_box-bg.png)', fontFamily: "'Segoe UI Emoji', sans-serif" }} // Set font style here
      id="whychooseus"
    >
      <div className="flex flex-col items-center justify-between max-w-6xl mx-auto space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
        
        {/* Left Side: Text */}
        <div className="flex flex-col justify-center w-full h-full space-y-6 text-center lg:w-1/2 lg:text-left" style={{ fontFamily: "'Segoe UI Emoji', sans-serif" }}>
          
          {/* Why Choose Us Button */}
          <button className="self-start px-6 py-4 text-xl font-semibold text-white bg-red-700 border border-red-700 rounded-lg hover:bg-black">
            Why Choose Us?
          </button>

          <p className="text-lg leading-relaxed">
            Briotas operates on a global scale, connecting industries and businesses across continents.
            We are proud to be an authorized distributor of Schneider Electric products, bringing their 
            renowned solutions to clients worldwide.
          </p>

          {/* Global Reach */}
          <div className="flex space-x-2">
            <span className="font-bold text-red-700 font-Segoe UI Emoji">✔</span>
            <p><strong>Global Reach:</strong> We connect businesses across continents and bring renowned solutions worldwide.</p>
          </div>

          {/* Quality Assurance */}
          <div className="flex space-x-2">
            <span className="font-bold text-red-700 font-Segoe UI Emoji">✔</span>
            <p><strong>Quality Assurance:</strong> We ensure only the highest quality products that are rigorously tested.</p>
          </div>

          {/* Expert Guidance */}
          <div className="flex space-x-2">
            <span className="font-bold text-red-700 font-Segoe UI Emoji">✔</span>
            <p><strong>Expert Guidance:</strong> Our team provides personalized guidance and support for your needs.</p>
          </div>
        </div>

        {/* Right Side: Image with Animation */}
        <div className="flex justify-center w-full h-full lg:w-1/2">
          <img 
            src="https://briotas.com/wp-content/uploads/2023/09/Home-img-03.jpg" // Add the image for the right side here
            alt="Why Choose Us" 
            className="object-cover w-full h-auto rounded-lg shadow-lg animate-updown" // Apply the animation here
          />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;



