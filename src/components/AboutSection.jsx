import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-3">
        <h2 className="text-3xl font-bold mb-2 animate__animated animate__fadeInUp">About Us</h2>
        <p className="text-gray-600 animate__animated animate__fadeInUp">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 animate__animated animate__fadeInUp">Voluptatem dignissimos provident laboris nisi ut aliquip ex ea commodo</h3>
            <img 
              src="https://via.placeholder.com/500x300" 
              className="rounded-lg mb-4 w-full h-auto object-cover animate__animated animate__fadeInUp" 
              alt="About Us Image"
            />
            <p className="text-gray-700 mb-4 animate__animated animate__fadeInUp">Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat debitis quia recusandae odit et consequatur voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.</p>
            <p className="text-gray-700 mb-4 animate__animated animate__fadeInUp">Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis tempore doloribus debitis explicabo similique sit. Accusantium sed ut omnis beatae neque deleniti repellendus.</p>
          </div>
          <div className="md:w-1/2">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic text-gray-700 mb-4 animate__animated animate__fadeInUp">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="list-disc list-inside mb-4 animate__animated animate__fadeInUp">
                <li className="text-gray-700"><i className="bi bi-check-circle-fill"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                <li className="text-gray-700"><i className="bi bi-check-circle-fill"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                <li className="text-gray-700"><i className="bi bi-check-circle-fill"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
              </ul>
              <p className="text-gray-700 mb-4 animate__animated animate__fadeInUp">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>

              <div className="relative mt-4 animate__animated animate__fadeInUp">
                <img src="https://via.placeholder.com/500x300" className="rounded-lg w-full h-auto object-cover" alt="About Us Video" />
                <a href="https://www.youtube.com/watch?v=UDfKnhzWKz0" className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-gray-700 text-white rounded-full p-3 hover:bg-gray-800 transition-all duration-300">
                    <i className="bi bi-play-circle-fill"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
