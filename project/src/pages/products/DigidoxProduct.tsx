import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Search, Shield, Cloud, FileText, Share2, Clock, Lock } from 'lucide-react';

const DigidoxProduct: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Smart Document Search',
      description: 'AI-powered search that understands context and finds documents instantly'
    },
    {
      icon: FileText,
      title: 'Automated Categorization',
      description: 'Machine learning automatically organizes documents by type and content'
    },
    {
      icon: Share2,
      title: 'Secure Sharing',
      description: 'Share documents securely with permission controls and audit trails'
    },
    {
      icon: Clock,
      title: 'Version Control',
      description: 'Track document changes with comprehensive version history'
    },
    {
      icon: Lock,
      title: 'Advanced Security',
      description: 'Enterprise-grade encryption and compliance with data protection standards'
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless integration with popular cloud storage providers'
    }
  ];

  const testimonials = [
    {
      name: 'Amanda Rodriguez',
      role: 'Head of Operations, LegalFirm Pro',
      content: 'Digidox revolutionized how we handle legal documents. Search time reduced by 90% and our compliance improved dramatically.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'IT Director, Healthcare Plus',
      content: 'The automated categorization feature saved us countless hours. Our document management is now seamless and secure.',
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: 'Professional',
      price: '$49',
      period: 'per user/month',
      features: ['5GB storage per user', 'Basic search', 'Standard integrations', 'Email support'],
      popular: false
    },
    {
      name: 'Business',
      price: '$99',
      period: 'per user/month',
      features: ['50GB storage per user', 'AI-powered search', 'Advanced integrations', 'Priority support', 'Custom workflows'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      features: ['Unlimited storage', 'Advanced AI features', 'Custom integrations', 'Dedicated support', 'On-premise deployment'],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Legal Industry',
      description: 'Streamline case management and document discovery',
      icon: Shield,
      benefits: ['Faster case preparation', 'Improved compliance', 'Reduced legal risks']
    },
    {
      title: 'Healthcare',
      description: 'Secure patient record management and compliance',
      icon: FileText,
      benefits: ['HIPAA compliance', 'Quick record retrieval', 'Audit trails']
    },
    {
      title: 'Financial Services',
      description: 'Regulatory document management and reporting',
      icon: Lock,
      benefits: ['Regulatory compliance', 'Secure document sharing', 'Automated reporting']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Digidox
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8">
                Smart Document Management Platform
              </p>
              <p className="text-lg text-purple-200 mb-8">
                Revolutionize document handling with AI-powered organization, intelligent search, and seamless collaboration tools. Transform your document chaos into organized, searchable, and secure digital assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/request-consultant"
                  className="inline-flex items-center px-8 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <button className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors">
                  View Demo
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                alt="Digidox Interface"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-green-400 text-green-900 px-4 py-2 rounded-full text-sm font-bold">
                New Features
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Intelligent Document Management
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced features that make document management effortless and secure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="bg-purple-100 rounded-lg p-3 w-fit mb-4">
                <feature.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions for different industries and use cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 text-center"
              >
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how organizations are transforming their document management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your organization's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-white rounded-xl shadow-lg p-8 relative ${
                  plan.popular ? 'border-2 border-purple-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Document Management?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations using Digidox to streamline their document workflows
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-consultant"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
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

export default DigidoxProduct;