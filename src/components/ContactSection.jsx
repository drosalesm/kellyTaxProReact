import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the request payload
    const payload = {
      firstName: formData.firstName,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
      jwt: "eyJlbmMiOiJBMTI4R0NNIiwiYnJhbmQiOiJFWiIsImFsZyI6ImRpciIsIndpZGdldElkIjoiOGZiZjVmZTMtYmUyZi00ZDM4LWFkMjctYmEzZTI0ZGU3NGNkIn0..RkZhZf1Zy8HvufmU.Vqdzv4Lg79G8oAsEV4ifbS1KjO5iB9HbT_VUjjtRtPPCDLMAQhQZx24JgaR7Pq_TFREIcDNmKaTRhvrWJ8vPB5qo7SqjylHuBrB_ryqNTrMfT9YdlP_3R3GNIvJOW3StiaNTQLvAQ08czTQo5xss_4cA8opXY2wXiHqS0P_Hk6f3aEgfZa4iELucmRlqLEonYH_o_-9v6CxfPo5SsmSHJDPnbJyfmIHSFVr5-gro_H-8Ng.vpwT75djWIcyjkJdXjywOQ"
    };

    console.log("Sending payload:", payload);

    try {
      const response = await fetch("https://widgy-lb.prd.cfire.io/EZ/widget/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error data:", errorData);
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Success:", data);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message.");
    }
  };

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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="firstName">
                  Nombre
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="Nombre completo"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="phoneNumber">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="Numero de teléfono"
                  value={formData.phoneNumber}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="c-web-form__control-group">
                <input
                  className="c-web-form__checkbox"
                  type="checkbox"
                  id="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                />
                <label className="c-web-form__label" htmlFor="agree">
                  By checking this box, you agree to receive text messages from
                  Kelly Tax Pro. Recurring messages subscription. Message and
                  data rates may apply. Reply HELP for help and STOP to opt out.
                </label>
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
