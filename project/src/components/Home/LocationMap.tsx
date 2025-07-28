import React from "react";
import map from "../../asstes/page-images/Page-Solutions-Locations.webp";

const LocationMap = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Locations
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          We are strategically located across the globe to better serve our
          clients and expand our impact.
        </p>

        {/* Map Image */}
        <div className="relative overflow-hidden rounded-xl shadow-md">
          <img
            src={map}
            alt="Company Global Locations Map"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Plain Text Location List */}
        <div className="mt-10 text-lg font-semibold text-gray-700 space-x-4">
          <span className="hover:text-blue-600 transition text-cyan-500">
            UK
          </span>{" "}
          |
          <span className="hover:text-blue-600 transition text-cyan-500">
            {" "}
            INDIA
          </span>{" "}
          |
          <span className="hover:text-blue-600 transition text-cyan-500">
            {" "}
            UAE
          </span>{" "}
          |
          <span className="hover:text-blue-600 transition text-cyan-500">
            {" "}
            CANADA
          </span>{" "}
          |
          <span className="hover:text-blue-600 transition text-cyan-500">
            {" "}
            SINGAPORE
          </span>{" "}
          |
          <span className="hover:text-blue-600 transition text-cyan-500">
            {" "}
            USA
          </span>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
