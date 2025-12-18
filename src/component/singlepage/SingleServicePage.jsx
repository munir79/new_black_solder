

"use client";
import React, { useState, useEffect } from 'react';
import ShareHeader from '../common/ShareHeader';
import ReviewForm from '../common/ReviewForm';
import { useParams } from 'next/navigation';
import { baseUriBackend } from '@/utils/url';
import { useGetServiceByIdQuery } from '@/redux/feature/serviceApi';

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
const SingleServicePage = () => {
  const params = useParams();
  const id = params?.slug;
  console.log("single id ", id);
  
  const [activeTab, setActiveTab] = useState("Description");
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  
//   const { data: singleProduct, isLoading } = useSingleProductQuery(id);
  const {data:singleProduct,isLoading}=useGetServiceByIdQuery(id);

  
  console.log("all data", singleProduct);

  useEffect(() => {
    if (singleProduct?.data) {
      const apiProduct = singleProduct.data;
      
      // Transform API data to match your component structure
      const transformedData = {
        name: apiProduct.productName || apiProduct.tittle,
        rating: 4, // You might want to get this from API if available
        price: apiProduct.price,
        description: apiProduct.description,
        category: "Products", // You might want to get this from API if available
        tags: ["Organic"], // You might want to get this from API if available
        imageSrc:` ${baseUriBackend}${apiProduct.image} ` ,
        tabs: [
          {
            name: "Description",
            content: {
              text: apiProduct.description,
              listItems: [
                "The Complete Guide Coloring is Delicious Food Style",
                "Understand Ghoring G Lambi Thou Principles For The New Year",
                "How To Roll Out New Features Without Having Load Shares"
              ],
            }
          },
          { 
            name: "Additional Information", 
            content: { 
              text: `Product ID: ${apiProduct._id}\nCreated: ${new Date(apiProduct.createdAt).toLocaleDateString()}\nUpdated: ${new Date(apiProduct.updatedAt).toLocaleDateString()}` 
            } 
          },
          { 
            name: "Review (5)", 
            content: { 
              reviews: [
                { id: 1, user: "Alice", rating: 5, comment: "Excellent product, very high quality!" },
                { id: 2, user: "Bob", rating: 4, comment: "Great value for the price. Highly recommend." },
                { id: 3, user: "Charlie", rating: 5, comment: "My favorite product. Will buy again." },
                { id: 4, user: "David", rating: 3, comment: "It was okay, a bit overpriced for my taste." },
                { id: 5, user: "Eve", rating: 5, comment: "Perfect for my needs. Stunning quality." },
              ] 
            } 
          },
        ],
        reviews: [
          { id: 1, user: "Jane Doe", rating: 5, comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        ]
      };
      
      setProductData(transformedData);
      setLoading(false);
    }
  }, [singleProduct]);

  if (isLoading || loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading product details...</div>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">Product not found</div>
      </div>
    );
  }

  const activeTabContent = productData.tabs.find(tab => tab.name === activeTab)?.content;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* --- Header Section with Banner --- */}
      <ShareHeader/>
      
      {/* --- Main Content Area --- */}
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb based on the image's structure */}
        <nav className="text-sm font-medium text-gray-500 mb-6">
          <a href="#" className="hover:text-green-600 transition duration-150">Home</a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-green-600 transition duration-150">Products</a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-green-600 transition duration-150">Shop Details</a>
          <span className="mx-2">/</span>
          <span className="text-green-600">{productData.name}</span>
        </nav>

        {/* --- Product Details (Image & Info) Section --- */}
        <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 rounded-lg shadow-lg mb-12">
          {/* Product Image */}
          <div className="lg:w-1/2 flex justify-center items-center p-4">
            <img 
              src={productData.imageSrc}
              alt={productData.name} 
              className="max-w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/assets/singlepage/download (2).jfif';
              }}
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

        {/* --- Tabs Section --- */}
        {/* <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
       
          <div className="flex border-b border-gray-200 mb-6">
            {productData.tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-4 py-2 font-medium text-sm focus:outline-none transition duration-150 ${
                  activeTab === tab.name
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-500 hover:text-green-500'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          
          <div className="prose max-w-none">
            {activeTab === "Description" && activeTabContent && (
              <div>
                <p className="text-gray-600 mb-4">{activeTabContent.text}</p>
                {activeTabContent.listItems && activeTabContent.listItems.length > 0 && (
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {activeTabContent.listItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            
            {activeTab === "Additional Information" && activeTabContent && (
              <p className="text-gray-600 whitespace-pre-line">{activeTabContent.text}</p>
            )}
            
            {activeTab === "Review (5)" && activeTabContent && activeTabContent.reviews && (
              <div className="space-y-6">
                {activeTabContent.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="font-semibold text-gray-700">
                            {review.user.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{review.user}</h4>
                          <StarRating rating={review.rating} />
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date().toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div> */}

        {/* --- Leave a Comments Section --- */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Leave a Comments</h3>
          <ReviewForm/>
        </div>
      </div>
    </div>
  );
};

export default SingleServicePage;