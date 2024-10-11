import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-4 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2024 Tax Experts Co. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-400"
          >
            <img 
              src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png" 
              alt="Facebook" 
              className="w-6 h-6"
            />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-400"
          >
            <img 
              src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" 
              alt="X (Twitter)" 
              className="w-6 h-6"
            />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-400"
          >
            <img 
              src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" 
              alt="Instagram" 
              className="w-6 h-6"
            />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-400"
          >
            <img 
              src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" 
              alt="WhatsApp" 
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
