import React from "react";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-stretch bg-gray-200 w-full h-[200px] md:h-[300px] lg:h-[400px] mb-9 md:mb-0 border-2 border-gray-300"
    >
      {/* Left Side: Centered image with responsive width */}
      <div
        className="md:mt-0 lg:mt-0 md:w-3/5 order-2 md:order-1 flex justify-center items-center h-full
"
      >
        <img
          src="/assets/img/logo.png"
          className="w-32 md:w-auto mb-4 p-2 mt-4 md:mt-0" // Adjust the width for small screens and add padding
          alt="Logo"
        />
      </div>

      {/* Right Side: Keep the original image */}
      <div
        className="md:w-2/5 order-1 md:order-2 flex justify-center h-full
"
      >
        <img
          src="/assets/img/kellyTeam.jpg"
          alt="Tax Service"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HomeSection;
