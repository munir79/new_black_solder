
// 'use client'; 
// import Link from "next/link";
// import React from "react";
// import { motion } from "framer-motion"; // <-- IMPORTED

// // ==============================
// // Animation Variants (Re-defined for completeness)
// // ==============================

// const cardVariants = {
//     // Initial state (off-screen/hidden)
//     hidden: { 
//         opacity: 0, 
//         y: 30 
//     },
//     // State when in view (smooth slide in)
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.5,
//             ease: [0.22, 1, 0.36, 1] // Custom smooth easing
//         }
//     },
//     // State on mouse hover (lift effect)
//     hover: {
//         y: -8, // Lift the card up
//         transition: {
//             duration: 0.3,
//             ease: "easeInOut"
//         }
//     }
// };

// const imageVariants = {
//     rest: { scale: 1 },
//     hover: {
//         scale: 1.05,
//         transition: {
//             duration: 0.4,
//             ease: [0.43, 0.13, 0.23, 0.96]
//         }
//     }
// };

// const titleColorVariants = {
//     rest: { color: "#374151" }, // gray-800
//     hover: { color: "#F59E0B" } // amber-500
// };

// // ==============================
// // Product Card Component
// // ==============================

// // Ensure to include 'index' as it is crucial for staggered animation in the grid
// export const ProductCard = ({ title, description, imageSrc, href, index = 0 }) => (
//     <motion.div
//         // 1. Scroll-Triggered Animation Setup
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
        
//         // 2. Hover Effect for the entire card
//         whileHover="hover"
        
//         // 3. Apply variants and staggered delay
//         variants={cardVariants}
//         transition={{ delay: index * 0.1 }}
        
//         className="bg-white rounded-sm shadow-md overflow-hidden"
//     >
//         {/* Link is not a motion component, but its children are */}
//         <Link href={href} className="group block">
            
//             {/* Image Container with Motion for Scale/Zoom */}
//             <motion.div 
//                 className="overflow-hidden"
//                 variants={imageVariants}
//                 initial="rest"
//                 whileHover="hover" // Triggers the scale zoom
//             >
//                 {/* Img does not need motion, as the parent motion.div handles the scale animation */}
//                 <img
//                     src={imageSrc}
//                     alt={title}
//                     // Removed the CSS transition: transform transition-transform duration-500 group-hover:scale-105
//                     className="w-full h-56 object-cover" 
//                 />
//             </motion.div>
            
//             {/* Text Content */}
//             <div className="p-6 text-center">
//                 <motion.h3 
//                     className="text-xl font-bold mb-2 transition-colors duration-300"
//                     variants={titleColorVariants}
//                     initial="rest"
//                     whileHover="hover" // Triggers the color change
//                 >
//                     {title}
//                 </motion.h3>
//                 <p className="text-sm text-gray-500 leading-relaxed">
//                     {description}
//                 </p>
//             </div>
//         </Link>
//     </motion.div>
// );

'use client';
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi"; 

// ==============================
// Animation Variants
// ==============================

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    hover: {
        // Subtle lift and enhanced shadow on hover
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3, ease: "easeInOut" }
    }
};

const imageVariants = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }
    }
};

const titleColorVariants = {
    rest: { color: "#374151" }, // Default text-gray-700
    hover: { color: "#F59E0B" } // Amber-500
};

// Variant for the button hover effect (changes shadow/scale, not background color due to gradient)
const buttonHoverVariants = {
    rest: { scale: 1, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" },
    hover: {
        scale: 1.05,
        // Deeper, warmer shadow on hover
        boxShadow: "0 10px 15px -3px rgba(245, 158, 11, 0.5), 0 4px 6px -4px rgba(245, 158, 11, 0.5)",
        transition: { duration: 0.2 }
    }
};

const iconVariants = {
    rest: { x: 0 },
    hover: { 
        x: 4, // Slides the arrow slightly to the right on hover
        transition: { duration: 0.2 }
    }
};


// ==============================
// Product Card Component
// ==============================

export const ProductCard = ({ title, description, imageSrc, href, index = 0 }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover="hover"
        variants={cardVariants}
        transition={{ delay: index * 0.1 }}
        // Key change: Increased rounding (rounded-2xl) and enhanced default shadow (shadow-lg)
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden flex flex-col justify-between"
    >
        {/* Main Link/Clickable Area */}
        <Link href={href} className="group block h-full">

            {/* Image Container */}
            <motion.div
                className="overflow-hidden"
                variants={imageVariants}
                initial="rest"
                whileHover="hover"
            >
                {/* Image has rounded-t-2xl to match the card top corners */}
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-56 object-cover rounded-t-2xl"
                />
            </motion.div>

            {/* Text Content */}
            <div className="p-6 text-center flex-grow flex flex-col justify-start">
                <motion.h3
                    className="text-xl font-extrabold text-gray-800 mb-2 transition-colors duration-300"
                    variants={titleColorVariants}
                    initial="rest"
                    // Removed whileHover="hover" from here as the entire Link is the hover target
                >
                    {title}
                </motion.h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    {description}
                </p>
            </div>
        </Link>
        
        {/* "See Details" Button Section */}
        <div className="p-6 pt-0 flex justify-center">
            <Link href={href} passHref legacyBehavior>
                <motion.a
                    // Key changes: Full rounding (rounded-full), Gradient background (bg-gradient-to-r), adjusted padding/size
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full text-white bg-gradient-to-r from-amber-500 to-orange-600 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-150 ease-in-out"
                    variants={buttonHoverVariants}
                    initial="rest"
                    whileHover="hover"
                >
                    {/* The Text and Icon */}
                    <span className="mr-2">See Details</span> 
                    <motion.div variants={iconVariants}>
                        <HiArrowRight className="h-5 w-5" />
                    </motion.div>
                </motion.a>
            </Link>
        </div>
    </motion.div>
);