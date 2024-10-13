import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material"; // Icons for expand/collapse

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

// Updated services array to include subtitles
const services = [
  { 
    title: 'Taxes', 
    subtitle: 'Impuestos y Auditorías', // Added subtitle
    description: 'ITIN, Auditorias, Acuerdos de Pago, Enmiendas, Récord de Taxes, ID.me, Llamadas al IRS, Asesoría' 
  },
  { 
    title: 'USCIS', 
    subtitle: 'Servicios de Inmigración', // Added subtitle
    description: 'Ciudadanías, Residencias, TPS, Asesoría de Visas' 
  },
  { 
    title: 'Cartas', 
    subtitle: 'Documentación Oficial', // Added subtitle
    description: 'Asistencia con Cartas Oficiales, Documentación' 
  },
  { 
    title: 'DMV', 
    subtitle: 'Licencias y Matrículas', // Added subtitle
    description: 'Licencias de Conducir, Renovación de Matrículas' 
  },  
  { 
    title: 'Social Security', 
    subtitle: 'Beneficios de Seguridad Social', // Added subtitle
    description: 'Procesos de Seguridad Social, Apoyo en Beneficios' 
  },   
  { 
    title: 'Social Service', 
    subtitle: 'Apoyo a la Comunidad', // Added subtitle
    description: 'Guía de Servicios Sociales, Apoyo en Programas' 
  },       
  { 
    title: 'Departamento de Labor', 
    subtitle: 'Asesoría Laboral', // Added subtitle
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
      <div className="absolute top-4 right-4">
        <IconButton onClick={() => toggleCardExpand(index)}>
          {isExpanded ? <ExpandLess /> : <ExpandMore />} {/* Toggle icon */}
        </IconButton>
      </div>

      <h3 className="text-xl font-bold mb-1">{service.title}</h3>
      <h4 className="text-lg text-gray-600 mb-4">{service.subtitle}</h4> {/* Added subtitle */}

      {/* Centered image placeholder */}
      <div className="flex justify-center mb-4">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Service" 
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg" 
        /> {/* Sample image */}
      </div>

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
    <section id="services" className="py-12 md:py-16 bg-gray-100 mt-4 md:mt-0 lg:mt-0 pt-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-gray-600 mb-8">Contamos con los siguientes servicios.</p>
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
