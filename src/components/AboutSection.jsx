import React, { useState } from "react";

const AboutSection = () => {
  const personnel = [
    { name: "Miguel Kelley", position: "Fundador", imageUrl: "/assets/img/tonyProf.jpg" },
    { name: "Gerald Kelly", position: "Consultor Profesional", imageUrl: "/assets/img/geraldformal.jpg" },
    { name: "Maholi Kelly", position: "Consultor Profesional", imageUrl: "/assets/img/haholyformal.jpg" },
    { name: "Bryan Kelly", position: "Asistente Consultor", imageUrl: "/assets/img/bryanformal.jpg" },
    { name: "Grace Kelley", position: "Asistente Consultor", imageUrl: "/assets/img/graceformal.jpg" },
    { name: "Luz Kelly", position: "Asistente de Oficina", imageUrl: "/assets/img/luz.jpg" },
    { name: "Oscar Moradel", position: "Asistente de Oficina", imageUrl: "/assets/img/oscar.jpg" },                
  ];

  const [expandedMember, setExpandedMember] = useState(null);

  const toggleExpand = (index) => {
    setExpandedMember(expandedMember === index ? null : index);
  };

  return (
    <section id="about" className="py-8 bg-gray-100">
      {/* Title and Subtitle Aligned at Center */}
      <div className="container mx-auto text-center mb-3 px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-2 animate__animated animate__fadeInUp">
          Acerca de Nosotros
        </h2>
        <p className="text-gray-600 animate__animated animate__fadeInUp">
          Somos una empresa comprometida con el buen servicio calidad en nuestra atención.
        </p>
      </div>

      {/* Two Columns: Left and Right */}
      <div className="container mx-auto px-4 sm:px-6 mt-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column: Image first, then text */}
          <div className="md:w-1/2">
            <img
              src="/assets/img/tonyProf.jpg"
              className="rounded-lg mb-4 w-full h-auto object-cover animate__animated animate__fadeInUp"
              alt="About Us Image"
            />
            <h3 className="text-xl text-center font-semibold mb-4 animate__animated animate__fadeInUp">
              Lo Kellymporta a Usted... a Nosotros También
            </h3>
            <p className="text-gray-700 mb-4 animate__animated animate__fadeInUp">
              Hoy en día nuestra compañía cuenta con el siguiente personal:
            </p>

            {/* Personnel Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {personnel.map((member, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow p-4 text-center cursor-pointer transition-all duration-300 ${
                    expandedMember === index ? "h-auto" : "h-24"
                  }`}
                  onClick={() => toggleExpand(index)} // Click handler to toggle expand
                  style={{ overflow: "hidden" }} // To hide the image when collapsed
                >
                  <h4 className="font-semibold">{member.name}</h4>
                  <p className="text-gray-600">{member.position}</p>

                  <div
                    className={`transition-opacity duration-300 ease-in-out ${
                      expandedMember === index ? "opacity-100 mt-2" : "opacity-0"
                    }`}
                    style={{
                      maxHeight: expandedMember === index ? "100px" : "0",
                      transition: "max-height 0.3s ease-in-out", // Smooth height transition
                    }}
                  >
                    {expandedMember === index && (
                      <img
                        src={member.imageUrl} // Dynamic image URL for the member
                        alt={member.name}
                        className="w-16 h-16 object-cover rounded-full mx-auto"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-700 mb-4 animate__animated animate__fadeInUp">
              Debido a nuestra larga carrera y destacada trayectoria, hemos
              mantenido nuestras oficinas abiertas al público durante casi ¡20
              años de Servicio!, de forma continua. Nos enorgullece ser parte de
              sus vidas y estar al servicio de la comunidad.
            </p>
          </div>

          {/* Right Column: Text first, then image */}
          <div className="md:w-1/2">
            <p className="fst-italic text-gray-700 mb-4 animate__animated animate__fadeInUp">
              Somos una oficina familiar creada desde el año 2005, orientados a desarrollar y proveer servicios a toda la comunidad principalmente de habla hispana y al público en general. Ofrecemos un equipo de trabajo integro, especializado a través de los años en preparación de impuestos personales, integrando variedad servicios tales como: traducciones, notarias, tramites de inmigración, cartas de todo tipo, formularios de toda índole y mucho más.
            </p>
            <p className="fst-italic text-gray-700 mb-4 animate__animated animate__fadeInUp">
              Originalmente nombrado como: <strong>“MULTISERVICE KELLEY”</strong>, liderado por sus fundadores y mentores: Sra. Grace M. Kelley y el Sr. Miguel R. Kelley, ambos hermanos, comprometidos a desarrollar un programa de servicios en pro de ayuda a la comunidad en general, no obstante, hoy día forman parte integral del equipo.
            </p>
            <p className="text-gray-700 mb-4 animate__animated animate__fadeInUp">
              Nuestros fundadores, crearon el núcleo de lo que somos en la actualidad: <strong>“KELLY TAX PRO”</strong>, un equipo de profesionales que trabajan en conjunto, forjando bases sólidas e inalterables, transmitidas de generación en generación. Llevando como estandarte nuestros valores morales, familiares y espirituales, juntamente con principios de vida como: la honestidad, responsabilidad, amabilidad y calidad de servicio.
            </p>

            {/* Image at the bottom */}
            <div className="relative mt-4 animate__animated animate__fadeInUp">
              <img
                src="/assets/img/logo.png"
                className="rounded-lg w-full h-auto object-cover"
                alt="About Us Video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
