import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function TransformHeroSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 text-gray-900 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center bg-white rounded-xl shadow-sm p-10 border border-gray-200"
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-snug tracking-tight">
            Elevating Your Business with Strategic Consulting
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We provide tailored business transformation services—aligning your vision with actionable execution, backed by years of experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-consultant"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 font-medium"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition duration-300 font-medium"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
