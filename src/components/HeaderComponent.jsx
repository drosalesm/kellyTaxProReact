import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import PhoneIcon from "@mui/icons-material/Phone";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import GroupIcon from "@mui/icons-material/Group";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-scroll";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showContactButton, setShowContactButton] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.innerHeight + window.scrollY;

    // Check if user is at the bottom
    if (scrollPosition >= scrollHeight - 10) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }

    if (window.scrollY > 300) {
      setShowContactButton(true);
    } else {
      setShowContactButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-black text-white py-2 text-sm">
        <div className="container mx-auto flex justify-center md:justify-start">
          <div>office@kellytaxpro.com</div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-teal-600 p-5 text-white">
        <div className="flex justify-between items-center font-serif">
          <div className="text-5xl">Kelly Tax Pro</div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-xl">
            <li className="flex items-center space-x-1">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-gray-900 flex items-center space-x-1 cursor-pointer"
              >
                <HomeIcon />
                <span>Inicio</span>
              </Link>
            </li>
            <li className="flex items-center space-x-1">
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="hover:text-gray-900 flex items-center space-x-1 cursor-pointer"
              >
                <MiscellaneousServicesIcon />
                <span>Servicios</span>
              </Link>
            </li>
            <li className="flex items-center space-x-1">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-gray-900 flex items-center space-x-1 cursor-pointer"
              >
                <InfoIcon />
                <span>Acerca de Nosotros</span>
              </Link>
            </li>
            <li className="flex items-center space-x-1">
              <Link
                to="personnel"
                smooth={true}
                duration={500}
                className="hover:text-gray-900 flex items-center space-x-1 cursor-pointer"
              >
                <GroupIcon />
                <span>Personal</span>
              </Link>
            </li>
            <li className="flex items-center space-x-1">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-gray-900 flex items-center space-x-1 cursor-pointer"
              >
                <ContactMailIcon />
                <span>Contactanos</span>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={toggleMobileMenu}>
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 text-white bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-teal-600 p-8 rounded shadow-lg w-full max-w-md h-auto">
            <ul className="flex flex-col space-y-4">
              <li className="flex items-center space-x-1">
                <HomeIcon />
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-900 cursor-pointer"
                  onClick={toggleMobileMenu}
                >
                  Inicio
                </Link>
              </li>
              <li className="flex items-center space-x-1">
                <MiscellaneousServicesIcon />
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-900 cursor-pointer"
                  onClick={toggleMobileMenu}
                >
                  Servicios
                </Link>
              </li>
              <li className="flex items-center space-x-1">
                <InfoIcon />
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-900 cursor-pointer"
                  onClick={toggleMobileMenu}
                >
                  Acerca de Nosotros
                </Link>
              </li>
              <li className="flex items-center space-x-1">
                <GroupIcon />
                <Link
                  to="personnel"
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-900 cursor-pointer"
                  onClick={toggleMobileMenu}
                >
                  Personal
                </Link>
              </li>
              <li className="flex items-center space-x-1">
                <ContactMailIcon />
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-900 cursor-pointer"
                  onClick={toggleMobileMenu}
                >
                  Contactanos
                </Link>
              </li>
            </ul>
            <button
              onClick={toggleMobileMenu}
              className="mt-4 w-full text-white flex justify-center"
            >
              <CancelIcon />
            </button>
          </div>
        </div>
      )}

      {/* Contact Button on Phone Devices */}
      {!isAtBottom && showContactButton && (
        <div className="fixed bottom-5 right-5 z-50 md:hidden">
          <button
            onClick={toggleModal}
            className="bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-slate-600 transition duration-300"
          >
            Contactenos
          </button>
        </div>
      )}

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-teal-600 p-8 rounded shadow-lg w-full max-w-md text-center">
            <h2 className="text-2xl text-white mb-4">Contactenos</h2>
            <p className="text-white mb-2">
              Llamar oficina:
            </p>

            <div className="flex justify-center items-center bg-blue-900 mb-4 hover:bg-gray-900 p-3 rounded transition duration-300">
              <span className="text-white text-xl mr-2">
                <PhoneIcon />
              </span>
              <a href="tel:5164144765" className="text-white text-xl">
                516-414-4765
              </a>
            </div>

            <p className="text-white mb-2">
              Mensaje a celular:
            </p>

            <a
              href="http://wa.me/15165657645"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex justify-center items-center bg-green-500 p-3 rounded hover:bg-green-600 transition duration-300"
            >
              <WhatsAppIcon className="mr-2" />
              WhatsApp
            </a>
            <div
              className="text-white mt-4 cursor-pointer"
              onClick={toggleModal}
            >
              <CancelIcon />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
