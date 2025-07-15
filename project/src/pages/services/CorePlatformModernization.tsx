import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Cloud, Shield, Zap, Code, Monitor, CheckCircle } from 'lucide-react';

const CorePlatformModernization: React.FC = () => {
  const services = [
    {
      icon: Database,
      title: 'Legacy System Migration',
      description: 'Seamless migration from legacy systems to modern, scalable platforms'
    },
    {
      icon: Code,
      title: 'API Integration',
      description: 'Develop robust APIs to connect systems and enable data flow'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Enhance system performance and reduce response times'
    },
    {
      icon: Shield,
      title: 'Security Enhancement',
      description: 'Implement modern security protocols and compliance standards'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Migrate applications and data to scalable cloud infrastructure'
    },
    {
      icon: Monitor,
      title: 'Monitoring & Analytics',
      description: 'Implement comprehensive monitoring and analytics solutions'
    }
  ];

  const modernizationSteps = [
    {
      step: '1',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of existing systems and modernization roadmap development'
    },
    {
      step: '2',
      title: 'Architecture Design',
      description: 'Design modern, scalable architecture aligned with business requirements'
    },
    {
      step: '3',
      title: 'Migration Strategy',
      description: 'Develop phased migration approach to minimize business disruption'
    },
    {
      step: '4',
      title: 'Implementation',
      description: 'Execute migration with continuous testing and quality assurance'
    },
    {
      step: '5',
      title: 'Optimization',
      description: 'Fine-tune performance and implement monitoring solutions'
    }
  ];

  const benefits = [
    '75% reduction in maintenance costs',
    '60% improvement in system performance',
    '90% reduction in downtime',
    'Enhanced scalability and flexibility',
    'Improved security and compliance',
    'Better user experience and productivity'
  ];

  const technologies = [
    { name: 'Cloud Platforms', items: ['AWS', 'Azure', 'Google Cloud'] },
    { name: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
    { name: 'APIs', items: ['REST', 'GraphQL', 'gRPC'] },
    { name: 'Containers', items: ['Docker', 'Kubernetes', 'OpenShift'] },
    { name: 'Monitoring', items: ['Prometheus', 'Grafana', 'ELK Stack'] },
    { name: 'Security', items: ['OAuth', 'JWT', 'SSL/TLS'] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Core Platform Modernization
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8">
              Modernize your legacy systems with cutting-edge architecture and scalable solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-consultant"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Modernization Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive services to transform your legacy systems into modern, efficient platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="bg-purple-100 rounded-lg p-3 w-fit mb-4">
                <service.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Technology Stack
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our modernization approach ensures your systems are future-ready, secure, and performant while minimizing business disruption.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                alt="Modern Architecture"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Modernization Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure successful platform modernization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {modernizationSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modern Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks for robust, scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {tech.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Story
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How we helped a Fortune 500 company modernize their core platform
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Enterprise Manufacturing Platform
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">
                      Legacy ERP system causing frequent downtime and limiting business growth
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">
                      Migrated to cloud-native architecture with microservices and modern APIs
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">99.9% uptime achieved</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">70% faster processing times</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">$3M annual cost savings</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                  alt="Modern Platform"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Modernize Your Platform?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Transform your legacy systems into modern, scalable platforms that drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-consultant"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Request Consultation
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
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

export default CorePlatformModernization;