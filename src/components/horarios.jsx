import React from "react";

const ScheduleList = () => {
  // Example opening hours data
  const TaxopeningHours = [
    { day: "Lunes A Viernes:", hours: "9:00 AM - 6:00 PM" },
    { day: "Sabado:", hours: "10:00 AM - 5:00 PM" },
  ];

  const noTaxopeningHours = [
    { day: "Lunes A Viernes:", hours: "9:00 AM - 4:00 PM" },
    { day: "Sabado:", hours: "10:00 AM - 1:00 PM" },
  ];

  return (
    <section className="sm:pt-0 flex flex-col items-center justify-center bg-gray-100 p-4 animate__animated animate__fadeIn mb-8">

        <h2 className="text-2xl md:text-4xl font-bold mb-4">Horarios de Atención</h2>

      <div className=" mb-8 w-full max-w-4xl bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105">
        <h4 className="text-3xl  mb-4 text-gray-800 text-center">Temporada de Taxes: <strong>Enero-Abril</strong></h4>
        <ul className="space-y-2">
          {TaxopeningHours.map((schedule, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-300 pb-2 transition-colors hover:bg-gray-100 text-2xl"
            >
              <span className="font-semibold text-gray-700 ">{schedule.day}</span>
              <span className="text-gray-600"><span className="text-teal-600">{schedule.hours}</span></span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105">
        <h4 className="text-3xl  mb-4 text-gray-800 text-center">Temporada Fuera de Taxes: <strong>Mayo-Diciembre</strong></h4>
        <ul className="space-y-2">
          {noTaxopeningHours.map((schedule, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-300 pb-2 transition-colors hover:bg-gray-100 text-2xl"
            >
              <span className="font-semibold text-gray-700">{schedule.day}</span>
              <span className="text-gray-600"><span className="text-teal-600">{schedule.hours}</span></span>
            </li>
          ))}
        </ul>
      </div>

    </section>



  );
};

export default ScheduleList;
