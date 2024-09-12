import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      <p className="mb-4">© 2024 Vishal Prajapati. All rights reserved.</p>
      <div className="flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/vishal-prajapati-445799289/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
          <FaLinkedin className="text-2xl" />
        </a>
        <a href="https://github.com/VISHALX33/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
          <FaGithub className="text-2xl" />
        </a>
        <a href="https://www.instagram.com/vishal_20_03/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
          <FaInstagram className="text-2xl" />
        </a>
       
      </div>
      
    </footer>
  );
};

export default Footer;
