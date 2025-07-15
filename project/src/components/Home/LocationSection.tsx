import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationSection: React.FC = () => {
  const locations = [
    {
      city: 'San Francisco',
      address: '123 Tech Street, Silicon Valley, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@techcorp.com',
      hours: 'Mon-Fri: 9AM-6PM PST'
    },
    {
      city: 'New York',
      address: '456 Innovation Ave, New York, NY 10001',
      phone: '+1 (555) 987-6543',
      email: 'ny@techcorp.com',
      hours: 'Mon-Fri: 9AM-6PM EST'
    },
    {
      city: 'London',
      address: '789 Digital Way, London, UK EC1A 1AA',
      phone: '+44 20 7123 4567',
      email: 'london@techcorp.com',
      hours: 'Mon-Fri: 9AM-6PM GMT'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Global Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find us around the world - we're here to support your business locally
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
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
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
          
          <div className="bg-white rounded-lg p-4 shadow-inner">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">
                  Click to view in Google Maps
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              <MapPin className="h-4 w-4 mr-2" />
              Get Directions
            </button>
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
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Video Call
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
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