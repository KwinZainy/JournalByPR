import React from "react";

const Mission: React.FC = () => {
  return (
    <section
      aria-labelledby="mission-heading"
      className="bg-[#FAF8F2] py-16 px-6 lg:px-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2
          id="mission-heading"
          className="text-2xl lg:text-3xl font-medium text-gray-700 mb-4"
        >
          Our Mission
        </h2>

        <div className="mx-auto max-w-3xl">
          <p className="relative inline-block text-xl lg:text-2xl font-semibold text-[#1f2937] italic leading-relaxed">
            <span className="block text-3xl lg:text-4xl mb-3 font-serif text-[#8b5e3c]">
              “
            </span>
            To transform simple ideas into timeless journals — digital spaces
            where <span className="font-bold">creativity meets clarity</span>,
            and every page sparks reflection, growth, and purpose.
            <span className="block text-3xl lg:text-4xl mt-3 font-serif text-[#8b5e3c]">
              ”
            </span>
          </p>

          <div className="mt-8">
            <div className="h-1 w-28 mx-auto rounded-full bg-gradient-to-r from-[#CC302B] to-[#F59E0B] opacity-90" />
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Designed with intention — for dreamers, doers, and quiet thinkers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
