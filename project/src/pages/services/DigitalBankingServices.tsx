import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, CreditCard, Shield, BarChart, Users, Globe, CheckCircle } from 'lucide-react';

const DigitalBankingServices: React.FC = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile Banking Platform',
      description: 'Comprehensive mobile banking solutions with intuitive user experience'
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Secure, fast payment processing systems with multi-channel support'
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'AI-powered fraud detection and prevention systems'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Advanced analytics for customer insights and business intelligence'
    },
    {
      icon: Users,
      title: 'Customer Experience',
      description: 'Personalized banking experiences across all touchpoints'
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'Complete digital banking transformation and modernization'
    }
  ];

  const features = [
    {
      category: 'Mobile Banking',
      items: ['Account Management', 'Fund Transfers', 'Bill Payments', 'Mobile Check Deposit']
    },
    {
      category: 'Digital Payments',
      items: ['Contactless Payments', 'P2P Transfers', 'QR Code Payments', 'Digital Wallets']
    },
    {
      category: 'Security',
      items: ['Biometric Authentication', 'Multi-Factor Authentication', 'Fraud Monitoring', 'Encryption']
    },
    {
      category: 'Analytics',
      items: ['Customer Insights', 'Transaction Analytics', 'Risk Assessment', 'Compliance Reporting']
    }
  ];

  const benefits = [
    '50% reduction in operational costs',
    '300% increase in digital adoption',
    '90% improvement in customer satisfaction',
    '24/7 banking services availability',
    'Enhanced security and compliance',
    'Faster time-to-market for new products'
  ];

  const compliance = [
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
    { name: 'SOX', description: 'Sarbanes-Oxley Act compliance' },
    { name: 'GDPR', description: 'General Data Protection Regulation' },
    { name: 'ISO 27001', description: 'Information Security Management' },
    { name: 'Basel III', description: 'International banking regulations' },
    { name: 'AML/KYC', description: 'Anti-Money Laundering & Know Your Customer' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Banking Services
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
              Comprehensive digital banking solutions for modern financial institutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-consultant"
                className="inline-flex items-center px-8 py-3 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-900 transition-colors"
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
            Our Digital Banking Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete suite of digital banking services to transform your financial institution
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
              <div className="bg-green-100 rounded-lg p-3 w-fit mb-4">
                <service.icon className="h-6 w-6 text-green-600" />
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

      {/* Features Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to deliver exceptional digital banking experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {feature.category}
                </h3>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
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
                Transform Your Banking Experience
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our digital banking solutions help financial institutions deliver superior customer experiences while reducing costs and improving operational efficiency.
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
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                alt="Digital Banking"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Compliance Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with the highest security standards and regulatory compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compliance.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center"
              >
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
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
              How we helped a regional bank transform their digital presence
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                  alt="Banking Success"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Regional Community Bank
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">
                      Outdated banking systems limiting customer growth and digital adoption
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">
                      Complete digital banking transformation with mobile-first approach
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">400% increase in mobile adoption</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">35% reduction in operational costs</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">95% customer satisfaction score</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Banking Services?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Partner with us to deliver exceptional digital banking experiences that drive customer satisfaction and business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-consultant"
                className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Request Consultation
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
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

export default DigitalBankingServices;