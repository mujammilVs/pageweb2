import React from "react";
import { locateus } from "../components/pageteam/data";

const LocateUs = () => {
  return (
    <section className="py-16 px-4  mt-10 ">
      <h2 className="text-3xl font-bold text-center mb-10">Locate Us :</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {locateus.map((each) => (
          <div
            key={each.id}
            className="border rounded-lg  bg-white p-6 text-center flex flex-col items-center"
          >
            <img
              src={each.logo}
              alt={`location-${each.id}`}
              className="h-24   mb-4"
            />
            <p className="text-gray-700 text-sm">{each.address}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocateUs;
