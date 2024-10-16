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

// Updated services array to include imageUrl
const services = [
  { 
    title: 'Taxes', 
    subtitle: '', 
    description: 'ITIN, Auditorias, Acuerdos de Pago, Enmiendas, Récord de Taxes, ID.me, Llamadas al IRS, Asesoría',
    imageUrl: '/assets/img/Services/taxes.jpeg' // Path to Taxes image
  },
  { 
    title: 'USCIS', 
    subtitle: '', 
    description: 'Ciudadanías, Residencias, TPS, Asesoría de Visas', 
    imageUrl: '/assets/img/Services/USCIS.png' // Path to USCIS image
  },
  { 
    title: 'Cartas', 
    subtitle: '', 
    description: 'Asistencia con Cartas Oficiales, Documentación', 
    imageUrl: '/assets/img/Services/carta.JFIF' // Path to Cartas image
  },
  { 
    title: 'DMV', 
    subtitle: '', 
    description: 'Licencias de Conducir, Renovación de Matrículas', 
    imageUrl: '/assets/img/Services/licence.png' // Path to DMV image
  },  
  { 
    title: 'Social Security', 
    subtitle: '', 
    description: 'Procesos de Seguridad Social, Apoyo en Beneficios',
    imageUrl: '/assets/img/Services/socialsec.png' // Path to Social Security image
  },   
  { 
    title: 'Social Services', 
    subtitle: '', 
    description: 'Guía de Servicios Sociales, Apoyo en Programas', 
    imageUrl: '/assets/img/Services/socialservice.png' // Path to Social Service image
  },       
  { 
    title: 'Departamento de Labor', 
    subtitle: '', 
    description: 'Formalidades del Departamento de Labor', 
    imageUrl: '/assets/img/Services/labor.png' // Path to Departamento de Labor image
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
        height: isExpanded ? 'auto' : '450px', // Increased height for more space
        transition: 'height 0.3s ease-in-out'
      }}
    >
      <h3 className="text-xl font-bold">{service.title}</h3>
      <h4 className="text-lg text-gray-600">{service.subtitle}</h4> {/* Added subtitle */}

      {/* Centered image placeholder */}
      <div className="flex justify-center">
        <img 
          src={service.imageUrl}  // Dynamic image URL
          alt={service.title} 
          className="w-64 h-64 object-cover rounded-lg" 
        />
      </div>

      {/* Move the icon below the image and increase its size */}
      <div className=""> {/* Adjusted margin to reduce space */}
        <IconButton 
          onClick={() => toggleCardExpand(index)} 
          size="large"  // Make the icon larger
        >
          {isExpanded ? <ExpandLess fontSize="large" /> : <ExpandMore fontSize="large" />} {/* Toggle icon */}
        </IconButton>
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
    <section id="services" className="py-12 md:py-16 bg-gray-100 mt-4 md:mt-0 lg:mt-0 pt-8">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-gray-600 mb-8"></p>
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
