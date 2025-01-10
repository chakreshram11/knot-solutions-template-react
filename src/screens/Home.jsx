import React from "react";
import AnimationWrapper from "../components/AnimationWrapper";

const stats = [
  { title: "Global Telecom Companies Served", value: 40, suffix: "+" },
  { title: "Projects/Products Enabled", value: 10000, suffix: "+" },
  { title: "Average OPEX Optimization", value: 30, suffix: "%" },
  { title: "Outcomes Delivered", value: 100, suffix: "%" },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pl-6 pr-6 md:pl-28 md:pr-28">
        {/* Background video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            loop
            src="https://knotsolutions.com/wp-content/uploads/2022/07/knot-solution-home-video-2.mp4"
          ></video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto flex flex-col text-white py-20 px-4 md:pt-56">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
            Discover A World Beyond Transformation.
          </h3>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-center md:text-left">
            Delivering Business Outcomes For A Competitive Edge!
          </h2>
          <p className="text-lg md:text-xl mb-8 text-center md:text-left">
            5G | Decision Analytics | IoT & Telematics | Cloud | Digital BSS |
            RPA | OmniChannel
          </p>
          <a
            href="https://knotsolutions.com/contact-us/"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition-all block mx-auto md:mx-0"
          >
            Talk to an expert to know more
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 pl-6 pr-6 md:pl-28 md:pr-28 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105"
              >
                <div className="text-5xl font-bold text-blue-600">
                  {stat.value}
                  <span className="text-2xl">{stat.suffix}</span>
                </div>
                <p className="mt-4 text-lg font-medium text-gray-700">
                  {stat.title.split("<br>").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < stat.title.split("<br>").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Readiness Section */}
      <main id="content" className="neve-main">
        <section className="flex flex-wrap justify-between items-center px-6 py-12 md:py-16 md:px-28 bg-gray-100">
          {/* Left Column - Video */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <AnimationWrapper animation="fadeInLeft" delay="0.5s">
              <div className="aspect-w-16 aspect-h-9 p-9">
                <iframe
                  className="w-full h-full rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/cxH3vQKWep8"
                  title="Digital Readiness Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </AnimationWrapper>
          </div>

          {/* Right Column - Text Content */}
          <div className="w-full lg:w-1/2">
            <AnimationWrapper animation="fadeInRight" delay="1s">
              <div className="space-y-4 p-9">
                <h4 className="text-2xl font-bold text-gray-800">
                  Discover Digital Readiness for a Competitive Advantage
                </h4>
                <p className="text-gray-600">
                  From enablement to transformation, we enable global Telecom
                  Service Providers to transform and address digital readiness,
                  ensure lower op costs, drive efficiencies through process
                  automation, and deliver business agility for new offerings and
                  business opportunities.
                </p>
                <p className="text-gray-600">
                  Know more about how Knot Solutions™ can help you with your
                  current challenges to get you the much-needed competitive edge.
                </p>

                {/* Links Section */}
                <div className="flex items-center space-x-4">
                  <a
                    href="https://knotsolutions.com/wp-content/uploads/2022/07/Business-Brochure_Changes-Updated.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Download e-Brochure
                  </a>
                  <span className="text-gray-400">|</span>
                  <a
                    href="https://knotsolutions.com/contact-us/"
                    className="text-blue-500 hover:underline"
                  >
                    Talk to an Expert
                  </a>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </section>
      </main>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
