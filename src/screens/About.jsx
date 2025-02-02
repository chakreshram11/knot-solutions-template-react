import React, { useState, useEffect } from "react";
import laptop from "../assets/teamwork.png";
import maps from "../assets/world.png";
import Revenue from "../assets/Revenue-Streams-2-1.png";
import {Link} from "react-router-dom"
 

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // {section -1}
    <div className="flex flex-col w-full">
      <div
        className="h-[400px] sm:h-[400px] w-full flex items-end text-white text-4xl font-bold p-4 sm:p-8 bg-cover bg-center pl-32"
        style={{ backgroundImage: `url(${laptop})` }}
      >
        About Us
      </div>
        {/*  Section-2 */}
        <div className="bg-red-500 text-white text-center text-lg sm:text-2xl font-bold leading-relaxed p-11">
          <p>We are a passionate team dedicated to bringing innovative solutions to our clients.</p>
          <p>Our mission is to deliver excellence in everything we do.</p>
        </div>

        <div id="about-section" className="flex flex-col md:flex-row items-center py-12 px-6 md:px-16 lg:px-32 gap-10">
          {/* Image */}
          <div className={`flex-1 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-50px]"}`}>
            <img src={laptop} alt="About us" className="w-full rounded-lg shadow-lg" />
          </div>

            {/* Text */}
            <div className={`flex-1 text-lg sm:text-xl leading-relaxed font-semibold transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[50px]"}`}>
                <p className="text-center text-2xl sm:text-3xl font-bold">Welcome to our journey!</p>
                  <br />
                <p>
                  We started with a vision to make a difference and have been striving ever since to achieve it. Our team consists of skilled professionals who are experts in their respective fields. We believe in transparency, innovation, and teamwork. Our clients' trust drives us to excel and achieve greater heights. With every project, we aim to exceed expectations and set new benchmarks. Together, we build, innovate, and grow.
                </p>
            </div>
          </div>
          {/* {section-3} */}
          <div id="hero-section" className={`relative h-[300px] sm:h-[250px] w-full flex items-center justify-center text-center text-white font-bold bg-cover bg-center px-6 transition-opacity duration-100 ${isVisible ? "animate-fadeUp" : "opacity-0"}`} style={{ backgroundImage: `url(${maps})` }}>
            <div className="relative max-w-4xl text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed z-10">
              We’ve been helping Telco’s globally for the past 18 years, serving multiple clients across 7 countries with a direct presence in 4 international locations.
            </div>
          </div>

          <div className="bg-gray-100">
            <section className="flex flex-wrap justify-between items-center p-6 lg:p-11 lg:pl-64 lg:pr-64">
              {/* Left Column - Video */}
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <div className="animate-fadeInLeft" style={{ animationDelay: "1s" }}>
                  <div className="space-y-4 px-6 md:px-9">
                    <h4 className="text-2xl font-bold text-gray-800">
                      <span className="text-red-600">Enable New</span><br />
                      Revenue Streams
                    </h4>
                    <p className="text-gray-600">
                      Beyond Connectivity. Leverage emerging Telematics opportunities in a connected world.
                    </p>
                    <p className="text-gray-600">
                      Leverage Decision Intelligence to leverage opportunities in Telematics 4.0! Ensure readiness of business-critical support systems that address a wider set of Vehicle-centric services catering to telematics, which include a user interface, network adaptability, interoperability along with bill integration and invoicing, service provisioning, device management, data analytics, and customer support.
                    </p>

                    <Link
                      to="/contact-us"
                      className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors"
                    >
                      Talk to Expert
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column - Text Content */}
              <div className="w-full lg:w-1/2">
                <div className="animate-fadeInRight" style={{ animationDelay: "1s" }}>
                  <div className="aspect-w-16 aspect-h-9 px-6 md:px-9">
                    <img
                      className="w-full h-auto rounded-lg shadow-md object-cover"
                      src={Revenue}
                      alt="Digital Readiness"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

    </div>
  );
};

export default About;