import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Workflow, Zap, BarChart, GitBranch, Play, Palette, Settings } from 'lucide-react';

const FigifloProduct: React.FC = () => {
  const features = [
    {
      icon: Palette,
      title: 'Drag & Drop Interface',
      description: 'Intuitive visual workflow builder with simple drag-and-drop functionality'
    },
    {
      icon: Users,
      title: 'Real-time Collaboration',
      description: 'Work together on workflows with live editing and instant updates'
    },
    {
      icon: Zap,
      title: 'Advanced Triggers',
      description: 'Smart triggers that respond to events, schedules, and conditions'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Detailed insights into workflow performance and bottlenecks'
    },
    {
      icon: GitBranch,
      title: 'Conditional Logic',
      description: 'Create complex workflows with if-then-else logic and branching'
    },
    {
      icon: Settings,
      title: 'Custom Integrations',
      description: 'Connect with any system through APIs and webhooks'
    }
  ];

  const testimonials = [
    {
      name: 'Marcus Johnson',
      role: 'Process Manager, AutoFlow Corp',
      content: 'Figiflo transformed our complex approval processes. What used to take weeks now happens in days with full visibility.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      role: 'Operations Director, WorkStream Inc',
      content: 'The visual interface makes it easy for non-technical team members to understand and modify workflows.',
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: 'per user/month',
      features: ['5 active workflows', 'Basic integrations', 'Email support', 'Standard templates'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: 'per user/month',
      features: ['Unlimited workflows', 'Advanced integrations', 'Priority support', 'Custom templates', 'Analytics dashboard'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      features: ['Custom deployment', 'Dedicated support', 'Advanced security', 'Custom integrations', 'SLA guarantee'],
      popular: false
    }
  ];

  const workflowTypes = [
    {
      title: 'Approval Workflows',
      description: 'Streamline approval processes with automated routing',
      icon: GitBranch,
      examples: ['Document approvals', 'Budget requests', 'Leave applications']
    },
    {
      title: 'Data Processing',
      description: 'Automate data transformation and integration',
      icon: BarChart,
      examples: ['Data validation', 'Report generation', 'Data synchronization']
    },
    {
      title: 'Customer Onboarding',
      description: 'Create seamless customer experience workflows',
      icon: Users,
      examples: ['Account setup', 'Welcome sequences', 'Compliance checks']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Figiflo
              </h1>
              <p className="text-xl md:text-2xl text-emerald-100 mb-8">
                Visual Workflow Designer
              </p>
              <p className="text-lg text-emerald-200 mb-8">
                Create, manage, and optimize complex workflows with our intuitive visual interface and powerful automation capabilities. Turn your business processes into efficient, automated workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/request-consultant"
                  className="inline-flex items-center px-8 py-3 bg-white text-emerald-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <button className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-900 transition-colors">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
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
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400"
                alt="Figiflo Workflow Builder"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-orange-400 text-orange-900 px-4 py-2 rounded-full text-sm font-bold">
                Rising Star
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Workflow Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to design, deploy, and manage complex workflows
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
              <div className="bg-emerald-100 rounded-lg p-3 w-fit mb-4">
                <feature.icon className="h-6 w-6 text-emerald-600" />
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

      {/* Workflow Types Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Workflow Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common workflow types that organizations use to streamline operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflowTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 text-center"
              >
                <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <type.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-700">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Demo Section */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how easy it is to create complex workflows visually
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center">
                <Play className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">Interactive Workflow Demo</p>
                <p className="text-sm text-gray-500">Click to see Figiflo in action</p>
              </div>
            </div>
            <div className="text-center">
              <button className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
                <Play className="mr-2 h-4 w-4" />
                Start Interactive Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from teams using Figiflo to streamline their workflows
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
      {/* <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start small and scale as your workflow needs grow
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
                  plan.popular ? 'border-2 border-emerald-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
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
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
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
      </div> */}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Streamline Your Workflows?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join thousands of teams using Figiflo to automate their business processes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-consultant"
                className="inline-flex items-center px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
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

export default FigifloProduct;