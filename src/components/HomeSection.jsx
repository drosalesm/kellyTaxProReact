import React, { useState, useEffect } from "react";

const HomeSection = () => {
  // State to keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of images for the slides
  const slides = [
    {
      id: 1,
      src: "/assets/img/kellyTeam.jpg", // First slide image
      alt: "First slide",
    },
    {
      id: 2,
      src: "/assets/img/kellyTeam2.jpg", // Second slide image
      alt: "Second slide",
    },
    {
      id: 3,
      src: "/assets/img/kellyTeam3.JPEG", // Third slide image
      alt: "Third slide",
    },
  ];

  // Function to go to the previous slide
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Function to go to the next slide
  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Effect to automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-stretch bg-gray-200 w-full h-[300px] lg:h-[400px] border-2 border-gray-300"
    >
      {/* Left Side: Centered image with responsive width (40% of content) */}
      <div className="md:w-2/5 order-2 md:order-1 flex justify-center items-center h-full">
        <img
          src="/assets/img/logo.png"
          className="w-32 md:w-auto mb-4 p-2 mt-4 md:mt-0" // Adjust width for responsiveness
          alt="Logo"
        />
      </div>

      {/* Right Side: Carousel takes 60% of content */}
      <div className="md:w-3/5 order-1 md:order-2 relative flex justify-center items-center h-full overflow-hidden">
        {/* Carousel Wrapper */}
        <div className="relative w-full h-full">
          {/* Carousel Items */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 transition-transform duration-500 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform: index === currentSlide ? "translateX(0)" : "translateX(100%)",
                height: "100%", // Ensuring the height covers the full wrapper
                width: "100%", // Ensuring the width covers the full wrapper
              }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover" // Keep full width and height
                style={{ objectFit: "cover" }} // Ensure the image covers the height
              />
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            type="button"
            className="absolute inset-y-0 left-0 flex items-center justify-center w-10 h-full bg-gray-800 text-white rounded-l-lg hover:bg-gray-700"
            onClick={handlePrev}
          >
            &#10094;
          </button>

          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full bg-gray-800 text-white rounded-r-lg hover:bg-gray-700"
            onClick={handleNext}
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
