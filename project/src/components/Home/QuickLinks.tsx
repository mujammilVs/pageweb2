import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  MessageCircle,
  Award,
  MapPin
} from 'lucide-react';

const QuickLinks: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const links = [
    {
      title: 'Our Products',
      description: 'Explore our innovative digital solutions',
      icon: Cpu,
      path: '/products',
      color: 'bg-blue-500'
    },
    {
      title: 'Our Services',
      description: 'Professional consulting and support',
      icon: Cloud,
      path: '/services',
      color: 'bg-indigo-500'
    },
    {
      title: 'Security Solutions',
      description: 'Enterprise-grade security',
      icon: Shield,
      path: '/services/banking-cloud',
      color: 'bg-purple-500'
    },
    {
      title: 'Performance',
      description: 'High-performance solutions',
      icon: Zap,
      path: '/services/core-platform-modernization',
      color: 'bg-yellow-500'
    },
    {
      title: 'About Us',
      description: 'Learn about our mission and team',
      icon: Users,
      path: '/about',
      color: 'bg-green-500'
    },
    {
      title: 'Contact',
      description: 'Get in touch with our experts',
      icon: MessageCircle,
      path: '/contact',
      color: 'bg-red-500'
    },
    {
      title: 'Achievements',
      description: 'Our accomplishments and awards',
      icon: Award,
      path: '/about',
      color: 'bg-orange-500'
    },
    {
      title: 'Location',
      description: 'Find our offices worldwide',
      icon: MapPin,
      path: '/contact',
      color: 'bg-teal-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Access
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Navigate to the most important sections of our platform
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {links.map((link, index) => (
            <motion.div
              key={link.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Link
                to={link.path}
                className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full"
              >
                <div className={`${link.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <link.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {link.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickLinks;