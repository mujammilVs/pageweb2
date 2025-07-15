import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Settings, Database, Shield, Cloud } from 'lucide-react';

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const services = [
    {
      name: 'Transformation Consulting',
      icon: Settings,
      description: 'Strategic guidance and expert consultation to navigate your digital transformation journey successfully.',
      features: ['Strategic Planning', 'Process Optimization', 'Change Management', 'Technology Assessment'],
      benefits: ['Reduce transformation risks', 'Accelerate time-to-market', 'Optimize resource allocation'],
      path: '/services/transformation-consulting',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Core Platform Modernization',
      icon: Database,
      description: 'Modernize your legacy systems with cutting-edge architecture and scalable solutions.',
      features: ['Legacy System Migration', 'API Integration', 'Performance Optimization', 'Security Enhancement'],
      benefits: ['Improved performance', 'Enhanced security', 'Reduced maintenance costs'],
      path: '/services/core-platform-modernization',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      name: 'Digital Banking Services',
      icon: Shield,
      description: 'Comprehensive digital banking solutions for modern financial institutions.',
      features: ['Mobile Banking', 'Payment Processing', 'Fraud Detection', 'Compliance Management'],
      benefits: ['Enhanced user experience', 'Reduced fraud risks', 'Regulatory compliance'],
      path: '/services/digital-banking',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Banking Cloud Services',
      icon: Cloud,
      description: 'Secure, scalable cloud infrastructure specifically designed for banking institutions.',
      features: ['Cloud Migration', 'Security Compliance', 'Disaster Recovery', 'Performance Monitoring'],
      benefits: ['99.9% uptime guarantee', 'Enhanced security', 'Cost optimization'],
      path: '/services/banking-cloud',
      color: 'from-teal-500 to-teal-600'
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive solutions to accelerate your digital transformation and drive business success
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${service.color} p-6`}>
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {service.name}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.path}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-all"
                >
                  <motion.span className="flex items-center">
                    Learn More
                    <motion.div
                      className="ml-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Process Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology to ensure successful implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Assessment', description: 'Analyze current systems and identify opportunities' },
              { step: '2', title: 'Strategy', description: 'Develop customized transformation roadmap' },
              { step: '3', title: 'Implementation', description: 'Execute the plan with expert guidance' },
              { step: '4', title: 'Optimization', description: 'Continuous improvement and support' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can transform your business
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
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;