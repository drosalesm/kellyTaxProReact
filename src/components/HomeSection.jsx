import React from 'react';

const HomeSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-stretch bg-gray-200 w-full h-[200px] md:h-[300px] lg:h-[400px] mb-9 md:mb-0"
    >
      {/* Left Side: Centered image with responsive width */}
      <div className="md:mt-0 lg:mt-0 md:w-3/5 order-2 md:order-1 flex justify-center items-center h-full border-2 border-gray-300 rounded-lg
">
        <img
          src="/assets/img/logo.png" // Path to the new image
          alt="New Display"
          className="w-[60%] max-w-[200px] md:max-w-[60%] h-auto object-contain" // Set max width for smaller screens
        />
      </div>

      {/* Right Side: Keep the original image */}
      <div className="md:w-2/5 order-1 md:order-2 flex justify-center h-full border-2 border-gray-300 rounded-lg
">
        <img
          src="/assets/img/kellyTeam.jpg"
          alt="Tax Service"
          className="w-full h-full object-cover border-gray-300 rounded-lg"
        />
      </div>
    </section>
  );
};

export default HomeSection;
