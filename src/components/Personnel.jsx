import React, { useState, useEffect } from "react";

const Team = () => {
  const personnel = [
    { name: "Miguel Kelly", position: "Fundador", imageUrl: "/assets/img/tonyProf-min.jpg" },
    { name: "Gerald Kelly", position: "Consultor Profesional", imageUrl: "/assets/img/geraldformal-min.jpg" },
    { name: "Maholi Kelly", position: "Consultor Profesional", imageUrl: "/assets/img/haholyformal-min.jpg" },
    { name: "Bryan Kelly", position: "Asistente Consultor", imageUrl: "/assets/img/bryanformal-min.jpg" },
    { name: "Grace Rivera", position: "Asistente Consultor", imageUrl: "/assets/img/graceformal-min.jpg" },
//    { name: "Grace Kelley", position: "Asistente Consultor", imageUrl: "/assets/img/graceKelley.jfif" },    
    { name: "Luz Kelly", position: "Asistente de Oficina", imageUrl: "" },
    { name: "Oscar Moradel", position: "Asistente de Oficina", imageUrl: "" },
  ];

  const [expandedMember, setExpandedMember] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check on component mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExpand = (index) => {
    if (personnel[index].imageUrl) {
      setExpandedMember(expandedMember === index ? null : index);
    }
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="personnel" className="py-8 bg-gray-100">
      <div className="container mx-auto text-center mb-6 px-4 sm:px-6">
        <h2 className="text-4xl font-bold mb-8 animate__animated animate__fadeInUp">
          Nuestro Equipo
        </h2>

        {/* Responsive Personnel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personnel
            .slice(0, isMobile && !showAll ? 3 : personnel.length)
            .map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow p-4 text-center cursor-pointer transition-all duration-500 ease-in-out ${
                  expandedMember === index ? "h-auto bg-blue-100" : "h-24"
                }`}
                onClick={() => toggleExpand(index)}
                style={{ overflow: "hidden" }}
              >
                <h4 className="text-3xl font-bold mb-2 animate__animated animate__fadeInUp">{member.name}</h4>


                <h4 className="text-2xl mb-4 animate__animated animate__fadeInUp">{member.position}</h4>


                {member.imageUrl && (
                  <div
                    className={`transition-all duration-[1500ms] ease-in-out transform ${
                      expandedMember === index ? "opacity-100 mt-2 scale-100" : "opacity-0 scale-75"
                    }`}
                    style={{
                      maxHeight: expandedMember === index ? "150px" : "0",
                      transition: "max-height 1s ease-in-out",
                    }}
                  >
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-16 h-16 object-cover rounded-full mx-auto"
                    />
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* Show More / Show Less Button - Only on Mobile */}
        {isMobile && personnel.length > 3 && (
          <button
            onClick={toggleShowAll}
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            {showAll ? "Mostrar Menos" : "Mostrar Más"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Team;
