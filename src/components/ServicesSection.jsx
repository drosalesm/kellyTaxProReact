import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { ExpandMore, ExpandLess, Accessibility, Assessment, AttachMoney } from "@mui/icons-material"; // Icons for cards
import { Link } from "react-scroll"; // For smooth scrolling

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
  { title: 'Taxes', icon: <AttachMoney fontSize='large' />, link: 'tax-preparation', description: 'We offer professional tax preparation services.' },
  { title: 'USCIS', icon: <Assessment fontSize='large'/>, link: 'consulting', description: 'Consulting services for USCIS processes.' },
  { title: 'Cartas', icon: <Accessibility fontSize='large'/>, link: 'tax-planning', description: 'Assistance with official letters and documentation.' },
  { title: 'DMV', icon: <Accessibility fontSize='large'/>, link: 'tax-planning', description: 'Help with DMV-related services.' },  
  { title: 'Social Security', icon: <Accessibility fontSize='large'/>, link: 'tax-planning', description: 'Support with social security processes.' },   
  { title: 'Social Service', icon: <Accessibility fontSize='large'/>, link: 'tax-planning', description: 'Guidance on social services.' },       
  { title: 'Departamento de Labor', icon: <Accessibility fontSize='large'/>, link: 'tax-planning', description: 'Assistance with labor department formalities.' },         
];

const ServiceCard = ({ service, index, isExpanded, toggleCardExpand }) => {
  const [animation, setAnimation] = useState('');

  // Apply animation only when the card first renders
  useEffect(() => {
    setAnimation(getRandomAnimation());
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div
      className={`relative bg-white p-6 rounded-lg shadow-md border-2 border-gray-300 hover:shadow-lg transition-shadow duration-500 flex flex-col justify-between items-center overflow-hidden ${animation}`}
      style={{
        animationDuration: '1.2s',
        animationDelay: `${index * 0.1}s`,
        height: isExpanded ? '400px' : '350px', // Dynamic height
        transition: 'height 0.3s ease-in-out' // Smooth height transition
      }}
    >
      <div className="absolute top-2 right-2">
        <IconButton onClick={() => toggleCardExpand(index)}>
          {isExpanded ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </div>
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-700">{service.description}</p>

      {/* Expanded content shown when card is expanded */}
      {isExpanded && (
        <div className="mt-4 text-gray-600 transition-all duration-300 ease-in-out">
          <p>Here’s more detailed information about {service.title} service...</p>
        </div>
      )}
    </div>
  );
};

const ServicesSection = () => {
  const [expandedCard, setExpandedCard] = useState(null); // Track the expanded card

  const toggleCardExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index); // Toggle between expand/collapse
  };

  return (
    <section id="services" className="py-12 md:py-16 bg-gray-100 mt-24 md:mt-0 lg:mt-0 pt-28">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-gray-600 mb-8">We offer a range of tax services to meet your needs.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isExpanded={expandedCard === index} // Only expand the selected card
              toggleCardExpand={toggleCardExpand}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
