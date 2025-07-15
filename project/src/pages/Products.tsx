import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Zap } from 'lucide-react';

const Products: React.FC = () => {
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const products = [
    {
      name: 'Digifabric.ai',
      tagline: 'AI-Powered Process Automation',
      description: 'Transform your business processes with intelligent automation that adapts and learns from your workflow patterns.',
      features: ['Machine Learning Integration', 'Real-time Analytics', 'Seamless API Integration', 'Custom Workflow Builder'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      path: '/products/digifabric',
      rating: 4.9,
      users: '10K+',
      badge: 'Most Popular'
    },
    {
      name: 'Digidox',
      tagline: 'Smart Document Management',
      description: 'Revolutionize document handling with AI-powered organization, search, and collaboration tools.',
      features: ['Smart Document Search', 'Automated Categorization', 'Version Control', 'Secure Sharing'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      path: '/products/digidox',
      rating: 4.8,
      users: '8K+',
      badge: 'New Features'
    },
    {
      name: 'Figiflo',
      tagline: 'Visual Workflow Designer',
      description: 'Create, manage, and optimize complex workflows with our intuitive visual interface and powerful automation.',
      features: ['Drag & Drop Interface', 'Real-time Collaboration', 'Advanced Triggers', 'Performance Analytics'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      path: '/products/figiflo',
      rating: 4.7,
      users: '5K+',
      badge: 'Rising Star'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Innovative solutions designed to transform your business operations and drive growth
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="relative">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-cover rounded-2xl shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  {product.badge && (
                    <motion.div 
                      className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    >
                      {product.badge}
                    </motion.div>
                  )}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {product.name}
                  </h2>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl text-blue-600 font-semibold mb-4">
                  {product.tagline}
                </h3>
                
                <p className="text-gray-600 text-lg mb-6">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{product.users} users</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-gray-600">{product.rating} rating</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to={product.path}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                  <motion.button 
                    className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Try Free Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get started with our comprehensive suite of products and accelerate your digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-consultant"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Request Consultation
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;