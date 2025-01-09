// AboutSection.js
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-8 bg-gray-100">
      <div className="container mx-auto text-center mb-3 px-4 sm:px-6">
        <h2 className="text-4xl font-bold mb-2 animate__animated animate__fadeInUp">
          Acerca de Nosotros
        </h2>
        <p className="text-teal-600 animate__animated animate__fadeInUp text-2xl font-bold">
          Somos una empresa comprometida con el buen servicio y calidad en
          nuestra atención.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 mt-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src="/assets/img/tonyProf-min.jpg"
              className="rounded-lg mb-4 w-full h-auto object-cover animate__animated animate__fadeInUp"
              alt="About Us Image"
            />
            <h3 className="text-2xl text-center font-semibold mb-4 animate__animated animate__fadeInUp">
              Lo <span className="text-teal-600">'Kelly'</span> importa a Usted,
              a Nosotros También
            </h3>


          </div>

          <div className="md:w-1/2 text-2xl">
            <p className="fst-italic text-gray-700 mb-4 animate__animated animate__fadeInUp">
              Somos una oficina familiar creada desde el año 2005, orientados a
              desarrollar y proveer servicios a toda la comunidad principalmente
              de habla hispana y al público en general.
            </p>
            <p className="fst-italic text-gray-700 mb-4 animate__animated animate__fadeInUp">
              Originalmente nombrado como:{" "}
              <strong>“MULTISERVICE KELLEY”</strong>, liderado por sus
              fundadores y mentores: Sra. Grace M. Kelley y el Sr. Miguel R.
              Kelley, ambos hermanos, comprometidos a desarrollar un programa de
              servicios en pro de ayuda a la comunidad en general, no obstante,
              hoy día forman parte integral del equipo.
            </p>

            <p className="text-gray-700 mb-4 animate__animated animate__fadeInUp">
              Nuestros fundadores crearon el núcleo de lo que somos en la
              actualidad: <strong>“KELLY TAX PRO”</strong>, un equipo de
              profesionales que trabajan en conjunto, transmitiendo valores de
              honestidad, responsabilidad, y calidad de servicio.
            </p>
            <p className="text-gray-700 mb-4 animate__animated animate__fadeInUp text-2xl">
              Debido a nuestra larga carrera y destacada trayectoria, hemos
              mantenido nuestras oficinas abiertas al público durante casi ¡20
              años de Servicio!, de forma continua.
            </p>

            <div className="relative mt-4 animate__animated animate__fadeInUp">
              <div className="relative mt-4 animate__animated animate__fadeInUp">
                <img
                  src="/assets/img/logo.png"
                  style={{ width: "350px", height: "auto" }}
                  className="rounded-lg mx-auto mt-8"
                  alt="About Us Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
