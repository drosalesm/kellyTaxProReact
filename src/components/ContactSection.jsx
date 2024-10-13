import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="pt-8 pb-0 bg-gray-100">
      <div className="container mx-auto text-center mb-3 px-4 sm:px-6 pb-4">
        <h2 className="text-3xl font-bold mb-2 animate__animated animate__fadeInUp">
          Contáctanos
        </h2>
        <p className="text-gray-600 animate__animated animate__fadeInUp">
          Esteremos encantados de poder ayudarte
        </p>
      </div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form Column - 40% */}
          <div className="md:w-5/12">
            <h3 className="text-xl font-semibold mb-4 animate__animated animate__fadeInUp">
              Escribenos
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="name">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="Nombre completo"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">
                Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="Numero de teléfono"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="Mensaje"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-teal-600 text-white py-2 px-4 rounded-lg hover:text-gray-700 transition duration-300"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Map and Video Column - 60% */}
          <div className="md:w-7/12">
            <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
              <h4 className="text-lg font-semibold mb-2">Nuestra Ubicación</h4>
              <iframe
                src="https://www.youtube.com/embed/UDfKnhzWKz0"
                width="100%"
                height="200"
                className="rounded-lg"
                title="Introduction Video"
                allowFullScreen
              />
            </div>
            <p className="text-gray-700 mb-4 animate__animated animate__fadeInUp">
              565 Fulton Ave
              <br />
              Hempstead, NY 11550, Estados Unidos
            </p>
            <div className="relative animate__animated animate__fadeInUp rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6048.61778340057!2d-73.61641029664624!3d40.71121610715559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27d7687b916e1%3A0x76c308c0c01ac107!2sKelly%20Tax%20Pro!5e0!3m2!1ses-419!2shn!4v1728676708414!5m2!1ses-419!2shn"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
