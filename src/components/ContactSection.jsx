import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4eocnvr", // Your EmailJS service ID
        "template_b6aunei", // Your EmailJS template ID
        {
          from_name: formData.name,
          phone: formData.phone,
          message: formData.message,
          to_email: "Office@kellytaxpro.com", // Ensure email is sent to the correct address
        },
        "nBfBicFpWRcvOfL0k" // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="pt-8 pb-0 bg-gray-100">
      <div className="container mx-auto text-center mb-3 px-4 sm:px-6 pb-4">
        <h2 className="text-3xl font-bold mb-2 animate__animated animate__fadeInUp">
          Contáctenos
        </h2>
        <p className="text-gray-600 animate__animated animate__fadeInUp">
          Estaremos encantados de poder ayudarte
        </p>
      </div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-5/12">
            <h3 className="text-xl font-semibold mb-4 animate__animated animate__fadeInUp">
              Escríbenos
            </h3>
            <form onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="name">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="Nombre completo"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="phone">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="Número de teléfono"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
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