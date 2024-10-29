// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Products = () => {
  
  const [selectedBox, setSelectedBox] = useState(null);
  

  const handleClick = (index) => {
    setSelectedBox(index);
  };

  const handleButtonClick = () => {
    
  };

  const products = [
    {
      id: 1,
      title: 'Power Distribution',
      description:
        'This category includes products such as circuit breakers, switches, distribution boards, and power meters designed for efficient electrical power distribution.',
      icon: '/icons/power-distribution-icon.png', 
    },
    {
      id: 2,
      title: 'Automation and Control',
      description:
        'Schneider Electric provides products and solutions for industrial automation, including programmable logic controllers (PLCs), human-machine interfaces (HMIs), and industrial communication devices.',
      icon: '/icons/automation-control-icon.png', 
    },
    {
      id: 3,
      title: 'Energy Management',
      description:
        'Schneider Electric offers energy monitoring and management solutions to help organizations optimize their energy consumption and improve sustainability.',
      icon: '/icons/energy-management-icon.png', 
    },
    {
      id: 4,
      title: 'Building Automation and Control',
      description:
        'his category focuses on products for building management systems, including HVAC (heating, ventilation, and air conditioning) control, lighting control, and security systems',
      icon: '/icons/building-automation-icon.png', 
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <button
            onClick={handleButtonClick}
            className={`self-start px-6 py-4 text-xl font-semibold text-white bg-red-700 border border-red-700 rounded-lg hover:bg-black transition-all duration-300`}
          >
            Our Products
          </button>
          <p className="mt-2 font-semibold text-gray-600" style={{ fontFamily: "'Segoe UI Emoji', sans-serif" }}>
            Explore the wide range of products we offer
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`p-8 border rounded-lg cursor-pointer transform transition-all duration-300 ${
                selectedBox === index
                  ? 'bg-black text-white' 
                  : 'bg-white text-black' 
              }`}
              onClick={() => handleClick(index)}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={product.icon}
                  alt={product.title}
                  className="object-contain w-16 h-16"
                  style={{
                    filter: selectedBox === index ? 'invert(1)' : 'invert(0)', 
                  }}
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold" style={{ fontFamily: "'Segoe UI Emoji', sans-serif" }}>{product.title}</h3>
              <p className="text-sm" style={{ fontFamily: "'Segoe UI Emoji', sans-serif" }}>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

