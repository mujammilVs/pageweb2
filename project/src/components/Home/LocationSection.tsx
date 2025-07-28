import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const LocationSection: React.FC = () => {
  const locations = [
    {
      city: "India",
      address:
        "Plot No. 815, B.V.L. Complex, 4th Flor, 100Ft. Road, Sri Swamy Ayyappa Co-Operative Society, Madhapur, Hyd - 500081",
      phone: "+91 8143578444",
      email: "info@pagesolutions.co.uk",
      hours: "Mon-Fri: 9AM-6PM IST",
    },
    {
      city: "UK",
      address:
        "No. 424, Legacy Center, Hanworth Trading Estate, Feltham,      Tw13 6dh, London. UK",
      phone: "+44 845 257 3744",
      email: "info@pagesolutions.co.uk",
      hours: "Mon-Fri: 9AM-6PM BST",
    },
    {
      city: "UAE",
      address:
        "Office 1505, 15th Floor , Barjuman Business Towers, Sheikh Zayed Street, AL Mankhool - Dubai, UAE",
      phone: "+44 20 7123 4567",
      email: "info@pagesolutions.co.uk",
      hours: "Mon-Fri: 9AM-6PM GMT",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Global Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find us around the world - we're here to support your business
            locally
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {location.city}
              </h3>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-10 w-10 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">{location.address}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">{location.phone}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">{location.email}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">{location.hours}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-gray-100 rounded-xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Visit Our Headquarters
            </h3>
            <p className="text-gray-600">
              Located in the heart of Silicon Valley
            </p>
          </div>

          <div className=" rounded-lg p-4 ">
            <div className="aspect-w-16 aspect-h-9  flex items-center justify-center">
              <div className=" rounded-lg h-64 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.843012816684!2d78.38826379678954!3d17.451619300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91667f42ed11%3A0x501f641d013c0e79!2sPage%20Solutions%20Private%20Limited!5e1!3m2!1sen!2sin!4v1752549474605!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Page+Solutions+Private+Limited,+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Get Directions
              </button>
            </a>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't Find a Location Near You?
            </h3>
            <p className="text-gray-600 mb-6">
              We offer remote consultations and support worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Video Call
              </button> */}
              <button  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
