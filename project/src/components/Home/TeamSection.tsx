import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const memberVariants = {
    hidden: { y: 60, opacity: 0, rotateY: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Visionary leader with 15+ years in digital transformation',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@techcorp.com'
      }
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Tech innovator specializing in AI and cloud architecture',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@techcorp.com'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Operations expert ensuring seamless project delivery',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@techcorp.com'
      }
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Full-stack developer with expertise in modern frameworks',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@techcorp.com'
      }
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'UX/UI designer creating intuitive user experiences',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'lisa@techcorp.com'
      }
    },
    {
      name: 'James Wilson',
      role: 'Head of Sales',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300',
      bio: 'Sales strategist building lasting client relationships',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'james@techcorp.com'
      }
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Talented professionals dedicated to your success
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              variants={memberVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                      <motion.a
                        href={member.social.linkedin}
                        className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin className="h-4 w-4 text-white" />
                      </motion.a>
                      <motion.a
                        href={member.social.twitter}
                        className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Twitter className="h-4 w-4 text-white" />
                      </motion.a>
                      <motion.a
                        href={`mailto:${member.social.email}`}
                        className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Mail className="h-4 w-4 text-white" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h3>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals to join our mission
            </p>
            <motion.button 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;