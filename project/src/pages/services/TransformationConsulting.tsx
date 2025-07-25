import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Settings,
  Target,
  Users,
  BarChart,
  Lightbulb,
  Shield,
} from "lucide-react";
import TransformHeroSection from "../../components/HeroSections/transformingHeroSection";

const TransformationConsulting: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: "Strategic Planning",
      description:
        "Develop comprehensive digital transformation strategies aligned with your business goals",
    },
    {
      icon: BarChart,
      title: "Process Optimization",
      description:
        "Analyze and optimize existing processes for maximum efficiency and effectiveness",
    },
    {
      icon: Users,
      title: "Change Management",
      description:
        "Guide your organization through transformation with proven change management methodologies",
    },
    {
      icon: Settings,
      title: "Technology Assessment",
      description:
        "Evaluate current technology stack and recommend modernization opportunities",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description:
        "Identify and mitigate risks throughout the transformation journey",
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description:
        "Foster innovation culture and implement cutting-edge solutions",
    },
  ];

  const benefits = [
    "Reduced transformation risks by 60%",
    "Accelerated time-to-market by 40%",
    "Improved operational efficiency by 50%",
    "Enhanced employee adoption rates",
    "Measurable ROI within 6 months",
    "Continuous optimization support",
  ];

  const approach = [
    {
      step: "1",
      title: "Assessment & Discovery",
      description:
        "Comprehensive analysis of current state, challenges, and opportunities",
    },
    {
      step: "2",
      title: "Strategy Development",
      description:
        "Create customized transformation roadmap with clear milestones",
    },
    {
      step: "3",
      title: "Implementation Planning",
      description:
        "Detailed planning with resource allocation and timeline management",
    },
    {
      step: "4",
      title: "Execution Support",
      description: "Hands-on guidance throughout the implementation process",
    },
    {
      step: "5",
      title: "Optimization & Scale",
      description:
        "Continuous improvement and scaling of successful initiatives",
    },
  ];

  const caseStudies = [
    {
      client: "Global Manufacturing Corp",
      challenge: "Legacy system modernization affecting operational efficiency",
      solution:
        "Comprehensive digital transformation strategy with phased implementation",
      result:
        "45% improvement in operational efficiency, $2M cost savings annually",
    },
    {
      client: "Regional Bank",
      challenge:
        "Digital banking transformation to compete with fintech startups",
      solution:
        "Customer-centric digital strategy with modern technology stack",
      result:
        "300% increase in digital adoption, 25% reduction in operational costs",
    },
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
              Transformation Consulting
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              We help our clients to transform and reinvent their business, from
              Strategy to Operations to Implementation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-consultant"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      {/* <TransformHeroSection /> */}

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Consulting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive consulting services to guide your digital
            transformation
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
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
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
                Why Choose Our Consulting?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our proven methodology and experienced consultants help
                organizations achieve successful digital transformations with
                measurable results.
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
                alt="Consulting Team"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured methodology that ensures successful transformation
              outcomes
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>

            <div className="space-y-12">
              {approach.map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                          {phase.step}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {phase.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from our transformation consulting engagements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {study.client}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Challenge:
                    </h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Solution:
                    </h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Result:</h4>
                    <p className="text-blue-600 font-semibold">
                      {study.result}
                    </p>
                  </div>
                </div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our expert consultants guide you through a successful digital
              transformation
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

export default TransformationConsulting;
