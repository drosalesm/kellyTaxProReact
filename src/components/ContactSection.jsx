import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-3">
        <h2 className="text-3xl font-bold mb-2 animate__animated animate__fadeInUp">Contact Us</h2>
        <p className="text-gray-600 animate__animated animate__fadeInUp">We'd love to hear from you! Reach out with any questions or comments.</p>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form Column - 40% */}
          <div className="md:w-5/12">
            <h3 className="text-xl font-semibold mb-4 animate__animated animate__fadeInUp">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder="Your Message" 
                  rows="4" 
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-green-900 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Map and Video Column - 60% */}
          <div className="md:w-7/12">
            <h3 className="text-xl font-semibold mb-4 animate__animated animate__fadeInUp">Our Location</h3>
            <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
              <h4 className="text-lg font-semibold mb-2">Watch Our Introduction</h4>
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
              123 Main Street, Suite 456<br />Your City, Your State, 12345
            </p>
            <div className="relative animate__animated animate__fadeInUp">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345087224!2d144.95373521531827!3d-37.81720997975138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0a12eb%3A0x5045675218ceed30!2sYour%20Location%20Here!5e0!3m2!1sen!2sau!4v1614070914975!5m2!1sen!2sau" 
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
