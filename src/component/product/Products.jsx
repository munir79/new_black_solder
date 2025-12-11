
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // <-- IMPORTED
import { ProductCard } from '../common/ProductCard';



const productCategories = [
    {
        title: 'Agriculture Products',
        description: 'Seamlessly visualize quality effectual capital without superior collaboration and idea such and asser sharing fiscally.',
        imageSrc: '/assets/service/car1.jfif', 
        href: '/products/agriculture',
    },
    {
        title: 'Fresh Vegetables',
        description: 'Seamlessly visualize quality effectual capital without superior collaboration and idea such and asser sharing fiscally.',
        imageSrc: '/assets/service/veg.jfif', 
        href: '/products/vegetables',
    },
    {
        title: 'Organic Products',
        description: 'Seamlessly visualize quality effectual capital without superior collaboration and idea such and asser sharing fiscally.',
        imageSrc: '/assets/service/eco2.jfif', 
        href: '/products/organic',
    },
    {
        title: 'Ecological Farming',
        description: 'Seamlessly visualize quality effectual capital without superior collaboration and idea such and asser sharing fiscally.',
        imageSrc: '/assets/service/toma.jfif', 
        href: '/services/ecological-farming',
    },
    {
        title: 'Dairy Products',
        description: 'Seamlessly visualize quality effectual capital without superior collaboration and idea such and asser sharing fiscally.',
        imageSrc: '/assets/service/str.jfif', 
        href: '/products/dairy',
    },
    {
        title: 'Fresh Berries',
        description: 'Seamlessly visualize quality effectual capital without superior collaboration and idea such and asser sharing fiscally.',
        imageSrc: '/assets/service/eco2.jfif', 
        href: '/products/berries',
    },
];



// Variant for the main container to manage staggering
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren", // Start main animation before children
            staggerChildren: 0.1, // Stagger text elements
        },
    },
};

// Variant for all text elements (fade in and slight slide up)
const textItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Variant for the "Show More" Button
const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
            duration: 0.5, 
            delay: 0.2 // Slight delay to appear after the cards
        } 
    },
    hover: { 
        scale: 1.05, 
        transition: { 
            type: "spring", 
            stiffness: 400, 
            damping: 10 
        } 
    },
};



const Products = () => {
    const accentColor = 'text-amber-500'; 
    const primaryColor = 'text-slate-900';
    const lightYellowBg = '#FFFCF1';

    return (
        <section className="relative w-full overflow-hidden bg-white">
            
            {/* Background Split Element (No Animation) */}
            <div 
                className="absolute top-0 left-0 w-full"
                style={{ height: '50%', backgroundColor: lightYellowBg }} 
            ></div>
            
            {/* Content Container with Animation Setup */}
            <div className="relative z-10 py-20">
                <motion.div // <-- Motion container for header and button
                    className="container mx-auto px-4 sm:px-8 lg:px-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <motion.p // <-- Animated Tagline
                            className={`text-sm font-semibold tracking-widest uppercase mb-2 ${accentColor}`}
                            variants={textItemVariants}
                        >
                            better agricultural 
                        </motion.p>
                        
                        <motion.h2 // <-- Animated Headline
                            className={`text-4xl font-extrabold ${primaryColor}`}
                            variants={textItemVariants}
                        >
                            for  <span className={accentColor}>better </span> future
                        </motion.h2>
                    </div>

                    {/* Products Grid (The cards use their own whileInView logic based on index) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {productCategories.map((item, index) => (
                            <ProductCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                imageSrc={item.imageSrc}
                                href={item.href}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Show More Button */}
                    <div className="flex justify-center mt-12">
                        <motion.div // <-- Motion wrapper for button animation
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link 
                                href="/products"
                                // The Next.js Link itself cannot be a motion component, so we wrap it.
                                className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold py-3 px-8 rounded-sm transition-colors duration-300 shadow-md"
                            >
                                Show More
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Products;
