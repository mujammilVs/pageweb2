import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AboutHeroSection = () => {
  return (
    <div className="relative p-4 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white flex items-center justify-center overflow-hidden">
      {/* Glowing radial effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-500 opacity-10 blur-3xl rounded-full z-0" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-center">
            About{" "}
            <span className="text-cyan-400">
              <Typewriter
                words={["TechCorp"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={60}
                delaySpeed={2000}
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Leading the digital transformation revolution with innovative
            solutions and expert guidance.
          </p>

          {/* CTA */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 px-8 py-2 bg-white  hover:to-blue-700 text-blue-400 rounded-full text-lg  shadow-lg transition duration-300"
          >
            Let’s Talk
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
