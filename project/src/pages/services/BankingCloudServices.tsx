import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, Database, Monitor, Zap, Globe, CheckCircle } from 'lucide-react';

const BankingCloudServices: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration of banking applications and data to secure cloud infrastructure'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full regulatory compliance for financial services'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Secure data storage, backup, and recovery solutions for banking institutions'
    },
    {
      icon: Monitor,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and analytics for optimal cloud performance'
    },
    {
      icon: Zap,
      title: 'Scalability',
      description: 'Auto-scaling infrastructure that grows with your business demands'
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Worldwide cloud infrastructure with local compliance requirements'
    }
  ];

  const cloudFeatures = [
    {
      category: 'Security',
      items: ['End-to-end encryption', 'Multi-factor authentication', 'Compliance monitoring', 'Threat detection']
    },
    {
      category: 'Performance',
      items: ['Auto-scaling', 'Load balancing', 'CDN integration', 'Performance optimization']
    },
    {
      category: 'Compliance',
      items: ['SOC 2 Type II', 'ISO 27001', 'PCI DSS', 'GDPR compliance']
    },
    {
      category: 'Monitoring',
      items: ['Real-time alerts', 'Performance metrics', 'Audit trails', 'Reporting dashboard']
    }
  ];

  const benefits = [
    '99.9% uptime guarantee',
    '60% reduction in infrastructure costs',
    'Enhanced security posture',
    'Improved disaster recovery',
    'Faster deployment times',
    'Global scalability and reach'
  ];

  const cloudProviders = [
    {
      name: 'AWS',
      services: ['EC2', 'RDS', 'S3', 'Lambda'],
      specialization: 'Comprehensive cloud services'
    },
    {
      name: 'Microsoft Azure',
      services: ['Virtual Machines', 'SQL Database', 'App Service', 'Functions'],
      specialization: 'Enterprise integration'
    },
    {
      name: 'Google Cloud',
      services: ['Compute Engine', 'Cloud SQL', 'Cloud Storage', 'Cloud Functions'],
      specialization: 'AI and ML capabilities'
    }
  ];

  const migrationSteps = [
    {
      step: '1',
      title: 'Assessment',
      description: 'Comprehensive evaluation of current infrastructure and applications'
    },
    {
      step: '2',
      title: 'Planning',
      description: 'Detailed migration strategy with timeline and risk assessment'
    },
    {
      step: '3',
      title: 'Migration',
      description: 'Phased migration approach with minimal business disruption'
    },
    {
      step: '4',
      title: 'Optimization',
      description: 'Performance tuning and cost optimization post-migration'
    },
    {
      step: '5',
      title: 'Management',
      description: 'Ongoing monitoring, maintenance, and support services'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Banking Cloud Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto mb-8">
              Secure, scalable cloud infrastructure specifically designed for banking institutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-consultant"
                className="inline-flex items-center px-8 py-3 bg-white text-cyan-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-900 transition-colors"
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
            Cloud Banking Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive cloud services tailored for the banking and financial services industry
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
              <div className="bg-cyan-100 rounded-lg p-3 w-fit mb-4">
                <service.icon className="h-6 w-6 text-cyan-600" />
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

      {/* Cloud Features Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for the demanding requirements of banking institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudFeatures.map((feature, index) => (
              <motion.div
                key={feature.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {feature.category}
                </h3>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Cloud Services?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our banking cloud solutions provide the security, compliance, and performance that financial institutions demand, with the flexibility to scale as your business grows.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mr-3" />
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
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                alt="Cloud Infrastructure"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cloud Providers Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multi-Cloud Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with leading cloud providers to give you the best solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 text-center"
              >
                <div className="bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Cloud className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {provider.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {provider.specialization}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {provider.services.map((service, serviceIndex) => (
                    <span
                      key={serviceIndex}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Migration Process Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven approach to ensure smooth and secure cloud migration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {migrationSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
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

      {/* Case Study Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Story
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How we helped a major bank migrate to the cloud
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  National Banking Corporation
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">
                      Legacy infrastructure limiting scalability and increasing operational costs
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">
                      Complete cloud migration with multi-cloud strategy and enhanced security
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                        <span className="text-gray-700">50% reduction in infrastructure costs</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                        <span className="text-gray-700">99.9% uptime achieved</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-cyan-500 mr-2" />
                        <span className="text-gray-700">Enhanced security posture</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                  alt="Cloud Migration Success"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Transform your banking infrastructure with secure, scalable cloud solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-consultant"
                className="inline-flex items-center px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Request Consultation
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors"
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

export default BankingCloudServices;