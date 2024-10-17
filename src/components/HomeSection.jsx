import React from "react";
import Slider from "react-slick"; // Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrows: false,
  };

  // Example images for the slider
  const sliderImages = [
    "/assets/img/kellyTeam_mod.jpg",
    "/assets/img/kellyTeam2_mod.jpg",
    "/assets/img/kellyTeam3_mod.jpg",
  ];

  return (
    <header className="h-[80vh] md:h-[70vh] flex flex-col-reverse md:flex-row bg-gray-100">
      {/* Right Column: Slider (moves to top on small devices) */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-white relative">
        <Slider {...settings} className="w-full h-full">
          {sliderImages.map((imgSrc, index) => (
            <div
              key={index}
              className="h-[35vh] md:h-[70vh] flex justify-center items-center"
            >
              <img
                src={imgSrc}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain transition-all duration-500"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Left Column: Static Image (moves to bottom on small devices) */}
      <div className="md:w-1/2 w-full flex items-center justify-center">
        <img
          src="/assets/img/logo.png"
          alt="Static Header Image"
          className="w-3/4 md:w-full h-auto object-contain" // Smaller on mobile with 'w-3/4'
        />
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .slick-dots {
          bottom: 10px;
        }

        .slick-dots li button:before {
          font-size: 18px;
          color: rgba(0, 0, 0, 0.5);
          opacity: 1;
        }

        .slick-dots li.slick-active button:before {
          color: #000;
        }

        /* Prevent border or flickering during transition */
        .slick-slide {
          padding: 0;
          margin: 0;
          border: none;
          outline: none;
        }

        .slick-slide img {
          border: none;
          outline: none;
          box-shadow: none;
        }

        /* Extra rules to ensure no overflow and image scaling */
        .slick-list {
          overflow: hidden;
        }

        .slick-track {
          display: flex;
        }

        /* Fix border when image scaling happens */
        .slick-slide div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </header>
  );
};

export default Header;
