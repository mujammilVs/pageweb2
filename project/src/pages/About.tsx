import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously push the boundaries of technology to deliver cutting-edge solutions.'
    },
    {
      icon: Heart,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership to achieve extraordinary results.'
    },
    {
      icon: Target,
      title: 'Results',
      description: 'We focus on delivering measurable outcomes that drive real business value.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Countries Served' },
    { number: '1000+', label: 'Team Members' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About TechCorp
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Leading the digital transformation revolution with innovative solutions and expert guidance
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <Target className="h-12 w-12 text-blue-600 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              To empower businesses with innovative digital solutions that drive growth, efficiency, and competitive advantage. We are committed to transforming the way organizations operate through cutting-edge technology and strategic consulting.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <Globe className="h-12 w-12 text-blue-600 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg">
              To be the global leader in digital transformation, recognized for our innovation, expertise, and commitment to client success. We envision a future where technology seamlessly integrates with business processes to create unprecedented value.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="text-center"
              >
                <motion.div 
                  className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="h-8 w-8 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2014, TechCorp began as a small team of passionate technologists with a vision to help businesses harness the power of digital transformation. What started as a local consulting firm has evolved into a global leader in enterprise solutions.
              </p>
              <p>
                Over the years, we've helped hundreds of organizations across various industries modernize their operations, implement cutting-edge technologies, and achieve their business objectives. Our success is built on a foundation of technical excellence, strategic thinking, and unwavering commitment to client success.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible, developing innovative solutions that address the evolving needs of modern businesses. Our team of experts combines deep technical knowledge with industry insights to deliver transformative results.
              </p>
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
              alt="Team collaboration"
              className="rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognition & Awards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're honored to be recognized by industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 text-center"
            >
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Best Innovation Award
              </h3>
              <p className="text-gray-600">
                Tech Excellence Awards 2024
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 text-center"
            >
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Top Employer
              </h3>
              <p className="text-gray-600">
                Great Place to Work 2024
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 text-center"
            >
              <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Global Impact Award
              </h3>
              <p className="text-gray-600">
                Digital Transformation Summit 2024
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;