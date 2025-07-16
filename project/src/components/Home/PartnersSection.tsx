import React from "react";
import { motion } from "framer-motion";
import client1 from "../../asstes/cliet1.jpg";
import client2 from "../../asstes/cliet2.jpg";
import client3 from "../../asstes/cliet3.jpg";
import client4 from "../../asstes/cliet4.jpg";
import client5 from "../../asstes/cliet5.jpg";
import client6 from "../../asstes/cliet7.jpg";
import client7 from "../../asstes/client8.jpg";
import client8 from "../../asstes/client9.jpg";

const PartnersSection: React.FC = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: client1,
      description: "Strategic technology partner",
    },
    {
      name: "Amazon AWS",
      logo: client2,
      description: "Cloud infrastructure partner",
    },
    {
      name: "Google Cloud",
      logo: client3,
      description: "AI and machine learning partner",
    },
    {
      name: "Oracle",
      logo: client4,
      description: "Database solutions partner",
    },
    {
      name: "Salesforce",
      logo: client5,
      description: "CRM solutions partner",
    },
    {
      name: "Adobe",
      logo: client6,
      description: "Creative solutions partner",
    },
    {
      name: "Salesforce",
      logo: client7,
      description: "CRM solutions partner",
    },
    {
      name: "Adobe",
      logo: client8,
      description: "Creative solutions partner",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by industry leaders and backed by strategic partnerships
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center">
                <div className=" mx-auto  bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                {/* <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {partner.name}
                </h3> */}
                {/* <p className="text-xs text-gray-600">
                  {partner.description}
                </p> */}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Join over 500+ companies that trust our solutions
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <span className="font-semibold text-blue-600 text-2xl mr-2">
                500+
              </span>
              <span>Active Clients</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-blue-600 text-2xl mr-2">
                50+
              </span>
              <span>Countries</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-blue-600 text-2xl mr-2">
                99%
              </span>
              <span>Uptime</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-blue-600 text-2xl mr-2">
                24/7
              </span>
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
