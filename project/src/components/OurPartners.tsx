import React from "react";
import { motion } from "framer-motion";
import partnerCompany1 from "../asstes/page-images/softwareag-pagesolutions.webp";
import partnerCompany2 from "../asstes/page-images/cloud4c-pagesolutions.webp";
import partnerCompany3 from "../asstes/page-images/mage-pagesolutions.webp";

const imageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const OurPartners = () => {
  const partners = [partnerCompany1, partnerCompany2, partnerCompany3];

  return (
    <section className="py-16 px-4 md:px-12 bg-gradient-to-b from-white to-gray-50 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold text-blue-600 tracking-wide uppercase"
        >
          Our Partners
        </motion.h2>

        {/* Heading + Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Introducing Our Trusted Partners
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            The banking business and technology landscape are both broad and
            dynamic. Our approach to delivering best-in-class solutions,
            services, and products is powered by our growing partner ecosystem.
          </p>
        </motion.div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
          {partners.map((logo, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={logo}
                alt={`Partner ${i + 1}`}
                className="w-40 h-20 object-contain hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
