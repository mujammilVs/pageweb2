import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Settings, Database, Shield, Cloud } from "lucide-react";

const ServicesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const serviceVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const services = [
    {
      title: "Transformation Consulting",
      description:
        "Strategic guidance for your digital transformation journey with expert consultants.",
      icon: Settings,
      features: [
        "Strategic Planning",
        "Change Management",
        "Technology Assessment",
        "Implementation Roadmap",
      ],
      path: "/services/transformation-consulting",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Core Platform Modernization",
      description:
        "Upgrade your legacy systems with modern, scalable architecture.",
      icon: Database,
      features: [
        "Legacy System Migration",
        "API Integration",
        "Performance Optimization",
        "Security Enhancement",
      ],
      path: "/services/core-platform-modernization",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Digital Banking Services",
      description:
        "Comprehensive digital banking solutions for modern financial institutions.",
      icon: Shield,
      features: [
        "Mobile Banking",
        "Payment Processing",
        "Risk Management",
        "Compliance Solutions",
      ],
      path: "/services/digital-banking",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Banking Cloud Services",
      description:
        "Secure, scalable cloud infrastructure specifically designed for banking.",
      icon: Cloud,
      features: [
        "Cloud Migration",
        "Security & Compliance",
        "Disaster Recovery",
        "Cost Optimization",
      ],
      path: "/services/banking-cloud",
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to drive your digital transformation
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={serviceVariants}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`bg-gradient-to-r ${service.color} p-6`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.path}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-all"
                  >
                    <motion.span className="flex items-center">
                      Learn More
                      <motion.div
                        className="ml-2"
                        whileHover={{ x: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </motion.span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
