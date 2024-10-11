import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import { Link } from "react-scroll"; // Import the react-scroll Link



const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu if window is resized beyond mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Show the scroll to top button when scrolled down 300 pixels
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    };
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
        <div className="container mx-auto flex justify-between">
          <div>Email: contact@taxkellypro.com</div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-teal-600 p-5 text-white">
        <div className="flex justify-between items-center font-serif">
          <div className="text-3xl">Tax Kelly Pro.</div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
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
            <button
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 text-white"
            >
              <CloseIcon />
            </button>
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
                  Home
                </Link>
              </li>
              <li className="flex items-center space-x-1">
                <MiscellaneousServicesIcon />
                <Link
                  to="home"
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
                  About
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
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <div className="fixed bottom-5 right-5 z-50 hidden md:block">
          <Link
            to="home" // Adjust this to the section you want to scroll back to
            smooth={true}
            duration={500}
            className="bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-slate-600 transition duration-300"
          >
            ↑
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
