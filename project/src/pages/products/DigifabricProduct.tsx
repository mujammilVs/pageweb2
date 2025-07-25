import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Users,
  Zap,
  Shield,
  Cloud,
  BarChart,
  Settings,
} from "lucide-react";
import digifabric from "../../asstes/page-images/digifabric-ai-new.webp";

import digiflo from "../../asstes/page-images/digiflo-pagesolutions.webp";
import digidox from "../../asstes/page-images/digidox-pagesolutions.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const DigifabricProduct: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Microservices-based Multi-System Integration",
      description:
        "Seamlessly integrate multiple systems using a scalable microservices architecture.",
    },
    {
      icon: BarChart,
      title: "Cloud-based Architecture",
      description:
        "Leverage the scalability, reliability, and flexibility of cloud-native infrastructure.",
    },
    {
      icon: Cloud,
      title: "Mobility Enabled",
      description:
        "Access your systems anytime, anywhere with secure mobile compatibility.",
    },
    {
      icon: Settings,
      title: "Access Control",
      description:
        "Ensure secure, role-based access with granular permission management.",
    },
    {
      icon: Shield,
      title: "Inbuilt Strong Security",
      description:
        "Protect your data with enterprise-grade security and industry-standard compliance.",
    },
    {
      icon: Users,
      title: "Collaboration Tools",
      description:
        "Boost team productivity with integrated tools for real-time communication and collaboration.",
    },
  ];

  // const testimonials = [
  //   {
  //     name: "Sarah Johnson",
  //     role: "CTO, TechFlow Inc.",
  //     content:
  //       "Digifabric.ai transformed our operations, reducing manual tasks by 70% and improving efficiency across all departments.",
  //     rating: 5,
  //   },
  //   {
  //     name: "Michael Chen",
  //     role: "Operations Manager, DataCorp",
  //     content:
  //       "The AI capabilities are incredible. It learns our patterns and continuously optimizes our processes.",
  //     rating: 5,
  //   },
  // ];

  // const pricingPlans = [
  //   {
  //     name: 'Starter',
  //     price: '$299',
  //     period: 'per month',
  //     features: ['Up to 100 workflows', 'Basic analytics', 'Email support', 'Standard integrations'],
  //     popular: false
  //   },
  //   {
  //     name: 'Professional',
  //     price: '$599',
  //     period: 'per month',
  //     features: ['Unlimited workflows', 'Advanced analytics', 'Priority support', 'All integrations', 'Custom branding'],
  //     popular: true
  //   },
  //   {
  //     name: 'Enterprise',
  //     price: 'Custom',
  //     period: 'pricing',
  //     features: ['Custom deployment', 'Dedicated support', 'SLA guarantee', 'Advanced security', 'Custom development'],
  //     popular: false
  //   }
  // ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl  mb-6">Digifabric.ai</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                AI-Powered Process Automation Platform
              </p>
              <p className="text-lg text-blue-200 mb-8">
                {/* Transform your business processes with intelligent automation
                that adapts and learns from your workflow patterns. Reduce
                manual tasks, increase efficiency, and drive innovation. */}
                <strong className="text-white">digifabric.ai </strong> is a
                powerful digital transformation platform combining intuitive
                business process management with enterprise-grade document
                archival to simplify and elevate business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/request-consultant"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <button className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors">
                  Watch Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              // className="relative"
            >
              <img
                src={digifabric}
                alt="Digifabric.ai Dashboard"
                className="rounded-xl shadow-2xl"
              />
              {/* <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold">
                Most Popular
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Powerfull component */}
      <motion.div
        className="max-w-6xl mx-auto mb-20 text-center mt-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Platform Components
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-base leading-relaxed">
          Our no-code, microservices-based platform reduces IT dependency and
          supports enterprise-wide transformation — from visualization to
          orchestration.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
        {[
          {
            img: digiflo,
            label: "Business Process Management & Workflow System",
          },
          { img: digidox, label: "Enterprise Document Management System" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 text-center transition-transform"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
            whileHover={{ scale: 1.03, y: -6 }}
          >
            <img
              src={item.img}
              alt={item.label}
              className="w-1/4  object-contain mb-6"
            />
            <h1 className="text-2xl  text-gray-800">{item.label}</h1>
          </motion.div>
        ))}
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Salient Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to automate and optimize your business processes
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
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      {/* <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Pricing Section */}
      {/* <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start with a plan that fits your needs, scale as you grow
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
                  plan.popular ? 'border-2 border-blue-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
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
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Processes?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of companies using Digifabric.ai to automate their
              workflows
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-consultant"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Start Free Trial
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

export default DigifabricProduct;
