// eslint-disable-next-line no-unused-vars
import React from 'react';

const AboutUs = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-16 text-gray-800 bg-white" id="about">
      <div className="flex flex-col items-center justify-between max-w-6xl mx-auto space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
        
        {/* Left Side: Image */}
        <div className="flex justify-center w-full h-full lg:w-1/2">
          <img 
            src="https://briotas.com/wp-content/uploads/2023/09/Home-img-06.jpg" 
            alt="Industrial equipment in use" 
            className="object-cover w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Text */}
        <div className="relative flex flex-col justify-center w-full h-full space-y-6 lg:w-1/2 lg:text-left">
          <h1 className="self-start mb-4 text-4xl font-semibold text-red-700">
            We Cater to any of your Industrial Needs and Requirements
          </h1>
          <p className="text-lg text-gray-600">
            At Briota Enterprises, we are committed to delivering high-quality products that cater to a wide range of industry purposes. Our Briota Brand encompasses a comprehensive lineup of innovative solutions designed to tackle common challenges faced by businesses across various sectors. 
          </p>
          <p className="text-lg text-gray-600">
            With our cutting-edge technology and expertise, we provide reliable and effective products to meet your specific needs.
          </p>
          <div className="flex space-x-4">
            <button className="self-start px-4 py-2 font-semibold text-white bg-red-700 border border-red-700 rounded-lg hover:bg-red-800">
              Our Journey
            </button>
            <button className="self-start px-4 py-2 font-semibold text-red-700 border border-red-700 rounded-lg hover:bg-red-100">
              Our Vision
            </button>
            <button className="self-start px-4 py-2 font-semibold text-red-700 border border-red-700 rounded-lg hover:bg-red-100">
              Our Expertise
            </button>
            <button className="self-start px-4 py-2 font-semibold text-red-700 border border-red-700 rounded-lg hover:bg-red-100">
              Our Value
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;