import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Users, Award } from 'lucide-react';

const RequestConsultant: React.FC = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Free Consultation',
      description: 'Get expert advice at no cost'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with certified professionals'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '500+ successful projects'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a free consultation with our experts and discover how we can accelerate your digital transformation journey.
            </p>
            
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-blue-500 bg-opacity-20 rounded-lg p-2">
                    <benefit.icon className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-blue-200">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/request-consultant"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Request Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold text-white mb-6">
                What to Expect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Initial Assessment
                    </h4>
                    <p className="text-blue-200">
                      We'll analyze your current systems and identify opportunities
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Custom Strategy
                    </h4>
                    <p className="text-blue-200">
                      Receive a tailored roadmap for your digital transformation
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Implementation
                    </h4>
                    <p className="text-blue-200">
                      Expert execution with ongoing support and optimization
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold">
              Free Consultation
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RequestConsultant;