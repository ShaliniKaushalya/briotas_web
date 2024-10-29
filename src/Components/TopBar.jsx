// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function TopBar() {
  return (
    <div className="flex items-center justify-between px-6 py-2 text-sm text-white bg-slate-500">
      {/* Left Section: Social Media */}
      <div className="flex items-center space-x-4">
        <span>Visit our social pages </span>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-blue-500" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-pink-500" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTiktok} className="text-white hover:bg-neutral-950" />
        </a>
      </div>

    

      {/* Right Section: Contact Info */}
      <div className="flex items-center space-x-6">
        {/* Open Days */}
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-white hover:bg-rose-950" />
          <span>Mon-Sat: 8:00 am - 6:00 pm</span>
        </div>
        
        {/* Email Address */}
        <a href="mailto:info@briotas.com" className="flex items-center space-x-2 text-red-700 hover:bg-slate-500">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>info@briotas.com</span>
        </a>
      </div>
    </div>
  );
}

export default TopBar;
