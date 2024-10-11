import React from 'react';
import { Icon } from '@mui/material'; // Import Material Icons
import { Accessibility, Assessment, AttachMoney } from '@mui/icons-material'; // Import specific icons
import { Link } from 'react-scroll'; // Import Link from react-scroll

const animations = [
  'animate__fadeInUp',
  'animate__fadeInDown',
  'animate__fadeInLeft',
  'animate__fadeInRight'
];

const getRandomAnimation = () => {
  const randomIndex = Math.floor(Math.random() * animations.length);
  return animations[randomIndex];
};

const services = [
  { title: 'Taxes', icon: <AttachMoney fontSize='large' />, link: 'tax-preparation' },
  { title: 'USCIS', icon: <Assessment fontSize='large'/>, link: 'consulting' },
  { title: 'Cartas', icon: <Accessibility fontSize='large'/>, link: 'tax-planning' },
  { title: 'DMV', icon: <Accessibility fontSize='large'/>, link: 'tax-planning' },  
  { title: 'Social Security', icon: <Accessibility fontSize='large'/>, link: 'tax-planning' },   
  { title: 'Social Service', icon: <Accessibility fontSize='large'/>, link: 'tax-planning' },       
  { title: 'Departamento de Labor', icon: <Accessibility fontSize='large'/>, link: 'tax-planning' },         
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 md:py-16 bg-gray-100 mt-24 md:mt-0 lg:mt-0 pt-28">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-gray-600 mb-8">We offer a range of tax services to meet your needs.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link} // Use the link for scrolling
              smooth={true}
              duration={500}
              className={`bg-white p-6 rounded-lg shadow-md border-2 border-gray-300 hover:shadow-lg hover:bg-gray-400 transition-shadow duration-500 transition-colors duration-400 min-h-[300px] flex flex-col justify-center items-center ${getRandomAnimation()}`}
              style={{ animationDuration: '1.2s', animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700">Click to learn more about this service.</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
