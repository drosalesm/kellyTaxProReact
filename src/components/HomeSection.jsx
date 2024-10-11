import React from 'react';

const HomeSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-stretch bg-gray-200 w-full h-[200px] md:h-[300px] lg:h-[400px] mb-9 md:mb-0" // Add mb-8 for margin bottom
    >
      <div className="md:w-3/5 order-2 md:order-1 flex flex-col justify-center h-full p-6">
        <div className="text-center md:text-center">
          <h2 className="text-xl font-bold mb-2">Kelly Tax Pro.</h2>
          <p className="text-lg text-gray-700">
          Traducciones, notarias y mas.
          </p>
        </div>
      </div>
      <div className="md:w-2/5 order-1 md:order-2 flex justify-center h-full">
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
