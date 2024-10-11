import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { ExpandMore, ExpandLess, Accessibility, Assessment, AttachMoney } from "@mui/icons-material"; // Icons for cards

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
  { 
    title: 'Taxes', 
    icon: <AttachMoney className="text-teal-600" fontSize='large' />, 
    description: 'ITIN, Auditorias, Acuerdos de Pago, Enmiendas, Récord de Taxes, ID.me, Llamadas al IRS, Asesoría' 
  },
  { 
    title: 'USCIS', 
    icon: <Assessment className="text-teal-600" fontSize='large'/>, 
    description: 'Ciudadanías, Residencias, TPS, Asesoría de Visas' 
  },
  { 
    title: 'Cartas', 
    icon: <Accessibility className="text-teal-600" fontSize='large'/>, 
    description: 'Asistencia con Cartas Oficiales, Documentación' 
  },
  { 
    title: 'DMV', 
    icon: <Accessibility className="text-teal-600" fontSize='large'/>, 
    description: 'Licencias de Conducir, Renovación de Matrículas' 
  },  
  { 
    title: 'Social Security', 
    icon: <Accessibility className="text-teal-600" fontSize='large'/>, 
    description: 'Procesos de Seguridad Social, Apoyo en Beneficios' 
  },   
  { 
    title: 'Social Service', 
    icon: <Accessibility className="text-teal-600" fontSize='large'/>, 
    description: 'Guía de Servicios Sociales, Apoyo en Programas' 
  },       
  { 
    title: 'Departamento de Labor', 
    icon: <Accessibility className="text-teal-600" fontSize='large'/>, 
    description: 'Formalidades del Departamento de Labor' 
  },         
];

// Individual service card
const ServiceCard = ({ service, index, isExpanded, toggleCardExpand }) => {
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    setAnimation(getRandomAnimation());
  }, []);

  const tasks = service.description.split(',');

  return (
    <div
      className={`relative bg-white p-6 rounded-lg shadow-md border-2 border-gray-300 hover:shadow-lg transition-shadow duration-500 flex flex-col justify-between items-center overflow-hidden ${animation}`}
      style={{
        animationDuration: '1.2s',
        animationDelay: `${index * 0.1}s`,
        height: isExpanded ? 'auto' : '350px',
        transition: 'height 0.3s ease-in-out'
      }}
    >
      <div className="absolute top-2 right-2">
        <IconButton onClick={() => toggleCardExpand(index)}>
          {isExpanded ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </div>

      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>

      {/* Task list with proper alignment */}
      <ul className="text-gray-700 list-disc pl-5 mb-4 text-left">
        {tasks.slice(0, isExpanded ? tasks.length : 3).map((task, idx) => (
          <li key={idx} className="leading-relaxed">{task.trim()}</li> // Display tasks
        ))}
      </ul>

      {/* Ellipsis in bottom-right corner when tasks are truncated */}
      {!isExpanded && tasks.length > 3 && (
        <div className="absolute bottom-2 right-4 text-gray-500 text-lg">...</div>
      )}
    </div>
  );
};

// Main services section
const ServicesSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCardExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index); 
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
              isExpanded={expandedCard === index}
              toggleCardExpand={toggleCardExpand}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
