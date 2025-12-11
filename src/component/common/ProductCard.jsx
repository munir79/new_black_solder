// "use client";
// import Link from "next/link";
// import React from "react";

// export const ProductCard = ({ title, description, imageSrc, href }) => (
//     <div className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
//         <Link href={href} className="group block">
//             {/* Image Container with Hover Effect */}
//             <div className="overflow-hidden">
//                 <img
//                     src={imageSrc}
//                     alt={title}
//                     className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
//                 />
//             </div>
            
//             {/* Text Content */}
//             <div className="p-6 text-center">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-500 transition-colors duration-300">
//                     {title}
//                 </h3>
//                 <p className="text-sm text-gray-500 leading-relaxed">
//                     {description}
//                 </p>
//             </div>
//         </Link>
//     </div>
// );

'use client'; 
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; // <-- IMPORTED

// ==============================
// Animation Variants (Re-defined for completeness)
// ==============================

const cardVariants = {
    // Initial state (off-screen/hidden)
    hidden: { 
        opacity: 0, 
        y: 30 
    },
    // State when in view (smooth slide in)
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] // Custom smooth easing
        }
    },
    // State on mouse hover (lift effect)
    hover: {
        y: -8, // Lift the card up
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

const imageVariants = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.4,
            ease: [0.43, 0.13, 0.23, 0.96]
        }
    }
};

const titleColorVariants = {
    rest: { color: "#374151" }, // gray-800
    hover: { color: "#F59E0B" } // amber-500
};

// ==============================
// Product Card Component
// ==============================

// Ensure to include 'index' as it is crucial for staggered animation in the grid
export const ProductCard = ({ title, description, imageSrc, href, index = 0 }) => (
    <motion.div
        // 1. Scroll-Triggered Animation Setup
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        
        // 2. Hover Effect for the entire card
        whileHover="hover"
        
        // 3. Apply variants and staggered delay
        variants={cardVariants}
        transition={{ delay: index * 0.1 }}
        
        className="bg-white rounded-sm shadow-md overflow-hidden"
    >
        {/* Link is not a motion component, but its children are */}
        <Link href={href} className="group block">
            
            {/* Image Container with Motion for Scale/Zoom */}
            <motion.div 
                className="overflow-hidden"
                variants={imageVariants}
                initial="rest"
                whileHover="hover" // Triggers the scale zoom
            >
                {/* Img does not need motion, as the parent motion.div handles the scale animation */}
                <img
                    src={imageSrc}
                    alt={title}
                    // Removed the CSS transition: transform transition-transform duration-500 group-hover:scale-105
                    className="w-full h-56 object-cover" 
                />
            </motion.div>
            
            {/* Text Content */}
            <div className="p-6 text-center">
                <motion.h3 
                    className="text-xl font-bold mb-2 transition-colors duration-300"
                    variants={titleColorVariants}
                    initial="rest"
                    whileHover="hover" // Triggers the color change
                >
                    {title}
                </motion.h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    {description}
                </p>
            </div>
        </Link>
    </motion.div>
);