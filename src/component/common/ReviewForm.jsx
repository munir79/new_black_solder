import React from 'react';

const ReviewForm = () => {
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
    return (
        <div>
            <form className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-700">Your Review</h4>
            <div className="flex space-x-2">
              <span className="text-gray-600">Your Rating:</span>
              <StarRating rating={0} /> {/* Display 5 empty stars to select */}
              <span className="text-yellow-500 text-sm">(Click on stars to rate)</span>
            </div>
            
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 transition duration-150"
            ></textarea>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 border border-gray-300 rounded focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 border border-gray-300 rounded focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 border border-gray-300 rounded focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded shadow-lg hover:bg-green-700 transition duration-150 transform hover:scale-[1.02]"
            >
              Post Comment
            </button>
          </form>
        </div>
    );
};

export default ReviewForm;