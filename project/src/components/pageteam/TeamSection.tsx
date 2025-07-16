import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { teamMembers } from "./data";


const TeamMembers: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>
          <h2 className="text-4xl bg-clip-text  mb-4">
            Our Expertise Will Help You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bookan unknown printer took a galley of type and scrambled make It
            has survived not only five centuries.
          </p>
        </motion.div>

        {/* <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="w-full sm:w-[47%] lg:w-[22%] group transition-all"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500 "
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="flex space-x-2">
                      {member.social.linkedin && (
                        <motion.a
                          href={member.social.linkedin}
                          className="p-2 bg-white/20 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 backdrop-blur-sm"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Linkedin className="h-4 w-4 text-white" />
                        </motion.a>
                      )}
                      {member.social.twitter && (
                        <motion.a
                          href={member.social.twitter}
                          className="p-2 bg-white/20 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 backdrop-blur-sm"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Twitter className="h-4 w-4 text-white" />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
  
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}
        <div className="flex flex-wrap justify-center gap-8 py-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
                scale: 1.04,
                transition: { type: "spring", stiffness: 200, damping: 16 },
              }}
              className="w-full sm:w-[46%] lg:w-[22%] group transition-all"
            >
              <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 p-6 transition-all duration-300">
                {/* Avatar */}
                <div className="relative w-32 h-32 -mt-20 mb-4 rounded-full overflow-hidden shadow-md border-4 border-blue-100 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                </div>

                {/* Socials */}
                <div className="mt-4 flex space-x-3">
                  {member.social.linkedin && (
                    <motion.a
                      href={member.social.linkedin}
                      target="_blank"
                      className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 transition-all backdrop-blur-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="h-4 w-4 text-gray-700 " />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a
                      href={member.social.twitter}
                      target="_blank"
                      className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 transition-all backdrop-blur-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter className="h-4 w-4 text-gray-700 " />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
