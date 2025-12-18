

'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ProductCard } from '../common/ProductCard';
import { useGetProductsQuery } from '@/redux/feature/productApi';
import { baseUriBackend } from '@/utils/url';
import { useGetServiceQuery } from '@/redux/feature/serviceApi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
};

const formatProductForCard = (product, index) => {
  return {
    title: product.serviceName || product.tittle || 'Product',
    description: product.description || 'No description available',
    imageSrc: `${baseUriBackend}${product.image}`,
    href: `/services/${product._id}`,
    index: index,
  };
};

const Service = () => {
  const accentColor = 'text-amber-500';
  const primaryColor = 'text-slate-900';
  const lightYellowBg = '#FFFCF1';

  //   const page = 1;
  //   const limit = 6;
  //   const search = '';

  // const { data: apiResponse,  error } = useGetProductsQuery({});
  const { data: apiResponse, isLoading, refetch, error } = useGetServiceQuery({});

  const products = apiResponse?.data || [];
  const totalProducts = apiResponse?.totalData || 0;

  useEffect(() => {
    console.log('API Response:', apiResponse);
    console.log('Products:', products);
    console.log('Total Products:', totalProducts);
  }, [apiResponse, products, totalProducts]);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div
        className="absolute top-0 left-0 w-full"
        style={{ height: '50%', backgroundColor: lightYellowBg }}
      ></div>

      <div className="relative z-10 py-20">
        <motion.div
          className="container mx-auto px-4 sm:px-8 lg:px-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <div className="text-center mb-12">
            <motion.p
              className={`text-sm font-semibold tracking-widest uppercase mb-2 ${accentColor}`}
              variants={textItemVariants}
            >
              our fresh products
            </motion.p>

            <motion.h2
              className={`text-4xl font-extrabold ${primaryColor}`}
              variants={textItemVariants}
            >
              best quality <span className={accentColor}>organic</span> products
            </motion.h2>

            {/* <motion.p className="text-gray-600 mt-4 max-w-2xl mx-auto" variants={textItemVariants}>
              {totalProducts > 0
                ? `Discover our collection of ${totalProducts} premium organic products`
                : 'Discover our premium organic products collection'}
            </motion.p> */}
          </div>

          {isLoading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
              <p className="mt-4 text-gray-600">Loading products...</p>
            </div>
          )}

          {error && !isLoading && (
            <div className="text-center py-12">
              <p className="text-red-500">Failed to load products. Please try again.</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold py-2 px-6 rounded-sm transition-colors duration-300"
              >
                Retry
              </button>
            </div>
          )}

          {!isLoading && !error && (
            <>
              {products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {products.slice(0, 6).map((product, index) => {
                    const cardData = formatProductForCard(product, index);
                    console.log('carddata', cardData?.imageSrc);
                    return (
                      <ProductCard
                        key={product._id || index}
                        title={cardData.title}
                        description={cardData.description}
                        imageSrc={cardData.imageSrc}
                        href={cardData.href}
                        index={index}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600">No products available at the moment.</p>
                </div>
              )}
            </>
          )}
          <div className="flex justify-center mt-12">
            <motion.div variants={buttonVariants} whileHover="hover" whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold py-3 px-8 rounded-sm transition-colors duration-300 shadow-md"
              >
                Show All Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
