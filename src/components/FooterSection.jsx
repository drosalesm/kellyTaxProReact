import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-teal-600 text-white py-4 mt-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-2xl">
          <p>&copy; {currentYear} Kelly Tax Pro</p>
        </div>
        <div className="flex space-x-4 flex-grow justify-center">
          <a
            href="tel:+1234567890" // Change this to your phone number
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-blue-400"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" // Phone icon URL
              alt="Phone"
              className="w-6 h-6 mr-2" // Add margin to the right of the icon
            />
            <span className="text-xl">516-414-4765 </span>{" "}
            {/* Change this to your phone number */}
          </a>
          <a
            href="http://wa.me/15165657645"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-white hover:text-blue-400"
            >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
              alt="WhatsApp"
              className="w-6 h-6"
            />
            <span className="text-xl">&nbsp;Whatsapp </span>{" "}

          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
