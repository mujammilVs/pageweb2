import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Home/Hero";
import QuickLinks from "../components/Home/QuickLinks";
import ServicesSection from "../components/Home/ServicesSection";
import PartnersSection from "../components/Home/PartnersSection";
import AccomplishmentsSection from "../components/Home/AccomplishmentsSection";
import TeamSection from "../components/Home/TeamSection";
import LocationSection from "../components/Home/LocationSection";
import RelatedPages from "../components/Home/RelatedPages";
import OurPartners from "../components/OurPartners";
import LocationMap from "../components/Home/LocationMap";

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <QuickLinks />
      <ServicesSection />
      <PartnersSection />
      <OurPartners />
      <AccomplishmentsSection />
      <TeamSection />
      {/* <TeamMembers /> */}

      {/* <RequestConsultant /> */}
      <LocationMap />
      <LocationSection />
      <RelatedPages />
    </motion.div>
  );
};

export default Home;
