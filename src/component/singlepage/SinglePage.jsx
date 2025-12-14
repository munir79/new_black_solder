"use client";
import React, { useState } from 'react';
import ShareHeader from '../common/ShareHeader';
import ReviewForm from '../common/ReviewForm';
import { useParams } from 'next/navigation';
import { useSingleProductQuery } from '@/redux/feature/productApi';

// This is the data structure for the product page content
const productData = {
  name: "Romada Product",
  rating: 4, // out of 5
  price: 55.96,
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit its me enim lorom Ipsum dolor sit amet consectetur adipiscing elit its me enim lorom ipsum sollicitudin et aliam et It's me magna allorum Lorem ipsum sollicitudin et aliam et It's me magna allorum Lorem ipsum sollicitudin et aliam et It's me magna allorum Lorem ipsum sollicitudin et aliam et It's me magna allorum Lorem ipsum sollicitudin et aliam et It's me magna allorum Lorem ipsum sollicitudin et aliam et It's me magna allorum.",
  category: "Green Vegetables",
  tags: ["Organic"],
  imageSrc: "https://i.imgur.com/your-brie-cheese-image.png", // Replace with your actual image URL
  tabs: [
    {
      name: "Description",
      content: {
        text: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan ipsum velit nam nec tellus a odio tincidunt auctor a ornare odio sed non mauris vitae erat consequat auctor eu in elit class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos.",
        listItems: [
          "The Complete Guide Coloring is Delicious Food Style",
          "Understand Ghoring G Lambi Thou Principles For The New Year",
          "How To Roll Out New Features Without Having Load Shares"
        ],
      }
    },
    { name: "Additional Information", content: { text: "Details about ingredients, weight, dimensions, etc." } },
    { name: "Review (5)", content: { reviews: [
      { id: 1, user: "Alice", rating: 5, comment: "Excellent cheese, very creamy and flavorful!" },
      { id: 2, user: "Bob", rating: 4, comment: "Great value for the price. Highly recommend." },
      { id: 3, user: "Charlie", rating: 5, comment: "My favorite brie. Will buy again." },
      { id: 4, user: "David", rating: 3, comment: "It was okay, a bit bland for my taste." },
      { id: 5, user: "Eve", rating: 5, comment: "Perfect for my cheese board. Stunning presentation." },
    ] } },
  ],
  reviews: [ // Separate review data for the comment form section
    { id: 1, user: "Jane Doe", rating: 5, comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ]
};

// Component to render star ratings
const StarRating = ({ rating }) => {
  const maxRating = 5;
  return (
    <div className="flex text-yellow-500">
      {[...Array(maxRating)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${index < rating ? 'fill-current' : 'text-gray-300'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

// Main Component
const SinglePage = () => {
  const params = useParams();
  const id = params?.slug;
  console.log("single id ",id);
  
  const [activeTab, setActiveTab] = useState(productData.tabs[0].name);
  const activeTabContent = productData.tabs.find(tab => tab.name === activeTab).content;
  
  const {data:singleProduct}=useSingleProductQuery(id);
  console.log("all data",singleProduct);

  // Placeholder for the single image from the original design
  // const productImage ='/public/assets/singlepage/download (2).jfif'; 
  

 

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* --- Header Section with Banner --- */}
     

      <ShareHeader/>
      
      {/* --- Main Content Area --- */}
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb based on the image's structure */}
        <nav className="text-sm font-medium text-gray-500 mb-6">
          <a href="#" className="hover:text-green-600 transition duration-150">Breadcrumb</a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-green-600 transition duration-150">UI/UX</a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-green-600 transition duration-150">Shop Details</a>
          <span className="mx-2">/</span>
          <span className="text-green-600">Old Gold</span>
        </nav>

        {/* --- Product Details (Image & Info) Section --- */}
        <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 rounded-lg shadow-lg mb-12">
          {/* Product Image */}
          <div className="lg:w-1/2 flex justify-center items-center p-4">
            {/* The image in the example is a slice of brie cheese */}
             
            <img 
              src='/assets/singlepage/download (2).jfif'
              alt={productData.name} 
              className="max-w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 space-y-4">
            <StarRating rating={productData.rating} />
            <h2 className="text-3xl font-bold text-gray-800">{productData.name}</h2>
            <p className="text-gray-600 leading-relaxed text-sm">{productData.description}</p>
            <p className="text-4xl font-extrabold text-green-600">${productData.price.toFixed(2)}</p>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4 pt-4">
              <input 
                type="number" 
                defaultValue="1" 
                min="1" 
                className="w-16 p-2 border border-gray-300 rounded text-center focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              />
              <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded shadow-md hover:bg-yellow-600 transition duration-150 transform hover:scale-[1.02]">
                Add to Cart
              </button>
            </div>

            {/* Category and Tags */}
            <div className="pt-4 text-sm">
              <p className="text-gray-700">
                <span className="font-semibold">Category:</span> {productData.category}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Tags:</span> {productData.tags.join(', ')}
              </p>
            </div>
          </div>
        </div>

      

        {/* --- Leave a Comments Section --- */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Leave a Comments</h3>
          
         

        
          <ReviewForm/>
        </div>
      </div>
      
      {/* A simple placeholder footer */}
   
    </div>
  );
};

export default SinglePage;