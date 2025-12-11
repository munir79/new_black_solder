import React from 'react';

const ShareHeader = () => {
    return (
        <div 
          className="relative bg-cover bg-center h-64 flex flex-col justify-center items-center" 
          style={{ 
            backgroundImage: "url('/assets/singlepage/sing22.jfif')", // Replace with your actual banner image URL
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for text
            backgroundBlendMode: 'multiply'
          }}
        >
          <h1 className="text-4xl font-bold text-white mb-2">Shop Details</h1>
          <nav className="text-sm font-medium text-white">
            <a href="#" className="hover:text-yellow-400">Home</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-yellow-400">Shop Details</a>
          </nav>
          {/* <img src="/public/assets/singlepage/download (2).jfif" alt="" /> */}
        </div>
    );
};

export default ShareHeader;