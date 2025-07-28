import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Globe,
  Trophy,
  Users,
  Briefcase,
  Server,
  BarChart2,
  Settings,
  RefreshCw,
} from "lucide-react";

const AccomplishmentsSection: React.FC = () => {
  const accomplishments = [
    // {
    //   year: "2024",
    //   title: "Industry Leader Award",
    //   description: "Recognized as the leading digital transformation company",
    //   icon: Award,
    //   color: "from-yellow-400 to-yellow-500",
    // },
    // {
    //   year: "2023",
    //   title: "Global Expansion",
    //   description: "Expanded operations to 20+ countries worldwide",
    //   icon: Globe,
    //   color: "from-blue-400 to-blue-500",
    // },
    // {
    //   year: "2022",
    //   title: "Innovation Excellence",
    //   description: "Launched 3 groundbreaking AI-powered solutions",
    //   icon: Trophy,
    //   color: "from-purple-400 to-purple-500",
    // },
    // {
    //   year: "2021",
    //   title: "Team Growth",
    //   description: "Grew our expert team to 1000+ professionals",
    //   icon: Users,
    //   color: "from-green-400 to-green-500",
    // },
    {
      year: "",
      title: "Consulting & Staff Augmentation",
      description: "Services on T24 platform for 110+ banks",
      icon: Briefcase,
      color: "from-cyan-400 to-cyan-500",
    },
    {
      year: "",
      title: "Offshore Development & Maintenance",
      description: "Supporting 20+ banks on the T24 platform",
      icon: Server,
      color: "from-indigo-400 to-indigo-500",
    },
    {
      year: "",
      title: "Analytics, Reporting & Training",
      description: "Delivered for 10+ banks on the T24 platform",
      icon: BarChart2,
      color: "from-rose-400 to-rose-500",
    },
    {
      year: "",
      title: "T24 End-to-End Implementations",
      description: "Completed for 6+ banks and financial institutions",
      icon: Settings,
      color: "from-orange-400 to-orange-500",
    },
    {
      year: "",
      title: "T24 System Upgrades",
      description: "Successfully upgraded systems for 6+ banks",
      icon: RefreshCw,
      color: "from-pink-400 to-pink-500",
    },
  ];

  const stats = [
    { number: "100+", label: "Clients", color: "text-blue-600" },
    { number: "5+", label: "Regions", color: "text-green-600" },
    { number: "6+", label: "Branches", color: "text-purple-600" },
    { number: "15+", label: "Years Experience", color: "text-orange-600" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Accomplishments
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating milestones and achievements in our journey
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
              >
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>

          <div className="space-y-12">
            {accomplishments.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                    <div className="flex items-center mb-4">
                      <div
                        className={`bg-gradient-to-r ${item.color} p-2 rounded-lg mr-4`}
                      >
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {item.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h3>
            <p className="text-gray-600 mb-8">
              We're honored to be recognized by industry leaders
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Award className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Best Innovation
                </h4>
                <p className="text-sm text-gray-600">
                  Tech Excellence Awards 2024
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Trophy className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Top Employer
                </h4>
                <p className="text-sm text-gray-600">
                  Great Place to Work 2024
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Users className="h-8 w-8 text-green-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Customer Choice
                </h4>
                <p className="text-sm text-gray-600">
                  Industry Leadership Awards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccomplishmentsSection;
