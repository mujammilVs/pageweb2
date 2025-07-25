import React, { useState, useEffect } from "react";

import banner1 from "../../asstes/page-images/arab1.jpg";
import banner2 from "../../asstes/page-images/arab2.jpg";
import banner3 from "../../asstes/page-images/arab3.jpg";
import banner4 from "../../asstes/page-images/arab4.jpg";

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      title: "With A Digital First Approach",
      subtitle: "REIMAGINE BANKING",
      description:
        "Empowering businesses with cutting-edge digital solutions and strategic transformation consulting for the modern era.",
      image: banner1,
      cta: "Get Started",
      ctaLink: "/request-consultant",
    },
    {
      id: 2,
      title: "Platform Modernozation To Propell You Forward",
      subtitle: "MODERNIZE WHILE YOU ACCELERATE",
      description:
        "Revolutionizing business operations with secure, scalable, and innovative digital platforms.",
      image: banner2,
      cta: "Learn More",
      ctaLink: "/products",
    },
    {
      id: 3,
      title: "Focusing On The Future Of Banking",
      subtitle: "CORE TO DIGITAL TO COMPOSABLE BANKING",
      description:
        "Building robust, scalable applications with cutting-edge cloud technologies and industry best practices.",
      image: banner3,
      cta: "Contact Us",
      ctaLink: "/contact",
    },
    {
      id: 4,
      title: "Empower Your Workflow | Secure",
      subtitle: "TRANSFORM FOR TOMORROW",
      description:
        "Building robust, scalable applications with cutting-edge cloud technologies and industry best practices.",
      image: banner4,
      cta: "Contact Us",
      ctaLink: "/contact",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-20 flex flex-col justify-center items-start h-full w-full px-6 md:px-16 max-w-4xl">
              <div className="text-white space-y-6">
                <p className="text-lg sm:text-xl text-cyan-200 capitalize">
                  {slide.subtitle}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                  {slide.title}
                </h1>
                <a
                  href={slide.ctaLink}
                  className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold shadow-xl transition-all duration-300"
                >
                  {slide.cta}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
