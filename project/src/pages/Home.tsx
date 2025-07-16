import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Home/Hero";
import QuickLinks from "../components/Home/QuickLinks";
import ServicesSection from "../components/Home/ServicesSection";
import PartnersSection from "../components/Home/PartnersSection";
import AccomplishmentsSection from "../components/Home/AccomplishmentsSection";
import TeamSection from "../components/Home/TeamSection";
import RequestConsultant from "../components/Home/RequestConsultant";
import LocationSection from "../components/Home/LocationSection";
import RelatedPages from "../components/Home/RelatedPages";
import TeamMembers from "../components/pageteam/TeamSection";

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
      <AccomplishmentsSection />
      <TeamSection />
      {/* <TeamMembers /> */}

      <RequestConsultant />
      <LocationSection />
      <RelatedPages />
    </motion.div>
  );
};

export default Home;
