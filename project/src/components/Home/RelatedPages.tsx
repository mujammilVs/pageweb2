import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


import { 
  FileText, 
  BookOpen, 
  Star, 
  Calendar,
  ArrowRight
} from 'lucide-react';

import feature1 from '../../asstes/page-images/arab6.jpg'
import feature2 from '../../asstes/page-images/arab7.jpg'
import feature3 from '../../asstes/page-images/arab8.jpg'

const RelatedPages: React.FC = () => {
  const resources = [
    {
      title: 'Case Studies',
      description: 'Real success stories from our clients',
      icon: FileText,
      link: '/case-studies',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Blog & Insights',
      description: 'Latest trends and industry insights',
      icon: BookOpen,
      link: '/blog',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Customer Reviews',
      description: 'What our clients say about us',
      icon: Star,
      link: '/reviews',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Webinars',
      description: 'Educational content and demos',
      icon: Calendar,
      link: '/webinars',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const featuredContent = [
    {
      title: 'Digital Banking Transformation Guide',
      description: 'Complete guide to modernizing your banking infrastructure',
      image: feature1,
      category: 'Guide',
      readTime: '15 min read'
    },
    {
      title: 'AI in Financial Services',
      description: 'How artificial intelligence is reshaping finance',
      image: feature2,
      category: 'Article',
      readTime: '8 min read'
    },
    {
      title: 'Cloud Migration Success Story',
      description: 'How TechBank achieved 99.9% uptime',
      image: feature3,
      category: 'Case Study',
      readTime: '12 min read'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore More Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover insights, success stories, and expert guidance
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link
                to={''}
                className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full"
              >
                <div className={`bg-gradient-to-r ${resource.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <resource.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                  <span className="text-sm font-medium">Explore</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Content
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={content.image}
                    alt={content.title}
                    className=" group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {content.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {content.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {content.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {content.readTime}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-blue-100 mb-6">
            Subscribe to our newsletter for the latest insights and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPages;