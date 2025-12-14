// VisionHeader.jsx (No changes needed, this is correct for a rounded, contained banner)
"use client";
import React from "react";
import { motion } from "framer-motion";

// Re-using Animation Variants (must be defined or imported)
const fadeUpVariants = { /* ... */ };
const containerVariants = { /* ... */ };

const VisionHeader = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            // Add a small top padding here to separate it from the top of the PublicLayOut header
            className="mb-16 pt-8" 
        >
            <div 
                // The rounded-3xl and mx-auto ensure it stays contained and centered within its parent's width.
                className="relative text-center mx-auto rounded-3xl overflow-hidden bg-gray-900 h-[300px] flex items-center justify-center"
                style={{
                    backgroundImage: `url('/images/waste-pattern-bg.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay for better text contrast */}
                <div className="absolute inset-0 bg-slate-900/80 rounded-3xl"></div>

                <div className="relative z-10 max-w-4xl px-4 md:px-8 mx-auto">
                    {/* ... content ... */}
                    <motion.p variants={fadeUpVariants} className="text-sm font-bold text-amber-400 tracking-widest uppercase mb-3"> # OUR TWO-FOLD VISION </motion.p>
                    <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6"> From <span className="text-amber-400">Waste World</span> to a World Without Waste </motion.h2>
                    <motion.p variants={fadeUpVariants} transition={{ delay: 0.2 }} className="text-gray-300 text-lg max-w-3xl mx-auto"> Our strategy is to lead the transition from a resource-wasting linear economy to a circular, sustainable model where efficiency, value, and purpose are prioritized. </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default VisionHeader;