"use client";
import React from 'react';

// Define the data for the features dynamically
const featuresData = [
  {
    title: "Forest Planting",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M11 20H13C13 21.1 12.55 22 12 22C11.45 22 11 21.1 11 20ZM12 2C11.45 2 11 2.45 11 3V5H13V3C13 2.45 12.55 2 12 2ZM18 10H20C20 8.9 19.55 8 19 8H17C17 8 17 8.9 17 10ZM4 10H6C6 8.9 6.45 8 7 8H5C5 8 5 8.9 5 10ZM12 6C9.25 6 7 8.25 7 11C7 13.3 9.3 16 12 20C14.7 16 17 13.3 17 11C17 8.25 14.75 6 12 6ZM12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14Z" />
      </svg>
    ),
    description: "It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.",
  },
  {
    title: "Recycling Agriculture",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 4V1L8 5L12 9V6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18C8.69 18 6 15.31 6 12H4C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z" />
        <path d="M11 10.5V13H13V10.5L12 9.5L11 10.5ZM12 2C11.4 2 11 2.4 11 3V5H13V3C13 2.4 12.6 2 12 2Z" />
      </svg>
    ),
    description: "It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.",
  },
  {
    title: "Recycling Agriculture",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 4V1L8 5L12 9V6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18C8.69 18 6 15.31 6 12H4C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z" />
        <path d="M11 10.5V13H13V10.5L12 9.5L11 10.5ZM12 2C11.4 2 11 2.4 11 3V5H13V3C13 2.4 12.6 2 12 2Z" />
      </svg>
    ),
    description: "It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.",
  },
  // Add more features here if needed
];

// The main component
const FeatureSection = () => {
  return (
    <section className="py-2  bg-[#FFFCF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
       <div className='flex justify-center it'>
         <div className="mb-10">
          <p className="text-sm text-center font-semibold uppercase text-yellow-600 mb-1 tracking-widest">
            — OUR FEATURE
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            Let's Check Our
            <br />
            <h3 className="text-yellow-500 text-center">Feature</h3>
          </h2>
        </div>
       </div>

        {/* Features Grid - Dynamic Mapping */}
    <div className='flex justify-center items-center'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6">
  {featuresData.map((feature, index) => (
    <div
      key={index}
      className="relative p-4 bg-white rounded-lg shadow-lg overflow-hidden group border border-transparent hover:border-yellow-500 transition duration-300"
      style={{ minHeight: '180px' }} // slightly smaller cards
    >
      {/* Subtle background number */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-extrabold text-gray-100 opacity-5 transition-opacity duration-500 group-hover:opacity-10 z-0">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative z-10">
        {/* Icon */}
        <div className="inline-block p-2 rounded-full bg-yellow-100 mb-3">
          {feature.icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm">
          {feature.description}
        </p>
      </div>
    </div>
  ))}
</div>
    </div>

      </div>
    </section>
  );
};

// This is the component you will export and use in your Next.js page file (e.g., pages/index.js)
export default FeatureSection;