import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cpu,
  Cloud,
  Shield,
  Zap,
  Users,
  MessageCircle,
  Award,
  MapPin,
} from "lucide-react";

const QuickLinks: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
      },
    },
  };

  const links = [
    {
      title: "Our Products",
      description: "Explore our innovative digital solutions",
      icon: Cpu,
      path: "/products",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Our Services",
      description: "Professional consulting and support",
      icon: Cloud,
      path: "/services",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Security Solutions",
      description: "Enterprise-grade security",
      icon: Shield,
      path: "/services/banking-cloud",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Performance",
      description: "High-performance solutions",
      icon: Zap,
      path: "/services/core-platform-modernization",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "About Us",
      description: "Learn about our mission and team",
      icon: Users,
      path: "/about",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Contact",
      description: "Get in touch with our experts",
      icon: MessageCircle,
      path: "/contact",
      color: "from-red-500 to-red-600",
    },
    {
      title: "Achievements",
      description: "Our accomplishments and awards",
      icon: Award,
      path: "/about",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Location",
      description: "Find our offices worldwide",
      icon: MapPin,
      path: "/contact",
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Quick Access</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Navigate to the most important sections of our platform
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {links.map((link) => (
            <motion.div
              key={link.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg bg-white transition-all duration-300"
            >
              <Link to={link.path} className="block p-6 relative z-10">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white bg-gradient-to-br ${link.color}`}
                >
                  <link.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </Link>

              {/* Background hover effect from bottom to top */}
              <div
                className={`absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t ${link.color} opacity-10 group-hover:h-full transition-all duration-500 z-0`}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickLinks;
