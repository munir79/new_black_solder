

// 'use client';

// import React, { useEffect } from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { baseUriBackend } from '@/utils/url';
// import { ProductCard } from '@/component/common/ProductCard';
// import { useGetServiceQuery } from '@/redux/feature/serviceApi';


// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       when: 'beforeChildren',
//       staggerChildren: 0.1,
//     },
//   },
// };

// const textItemVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
// };

// const buttonVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.5,
//       delay: 0.2,
//     },
//   },
//   hover: {
//     scale: 1.05,
//     transition: {
//       type: 'spring',
//       stiffness: 400,
//       damping: 10,
//     },
//   },
// };

// const formatProductForCard = (product, index) => {
//   return {
//     title: product.serviceName || product.tittle || 'Product',
//     description: product.description || 'No description available',
//     imageSrc: `${baseUriBackend}${product.image}`,
//     href: `/products/${product._id}`,
//     index: index,
//   };
// };

// const AllService = () => {
//   const accentColor = 'text-amber-500';
//   const primaryColor = 'text-slate-900';
//   const lightYellowBg = '#FFFCF1';

// //   const page = 1;
// //   const limit = 6;
// //   const search = '';

//   // const { data: apiResponse,  error } = useGetProductsQuery({});
//     const { data:apiResponse, isLoading, refetch,error } = useGetServiceQuery({ page, limit, search });
  

//   const products = apiResponse?.data || [];
//   const totalProducts = apiResponse?.totalData || 0;

//   useEffect(() => {
//     console.log('API Response:', apiResponse);
//     console.log('Products:', products);
//     console.log('Total Products:', totalProducts);
//   }, [apiResponse, products, totalProducts]);

//   return (
//     <section className="relative w-full overflow-hidden bg-white">
//       <div
//         className="absolute top-0 left-0 w-full"
//         style={{ height: '50%', backgroundColor: lightYellowBg }}
//       ></div>

//       <div className="relative z-10 py-20">
//         <motion.div
//           className="container mx-auto px-4 sm:px-8 lg:px-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           variants={containerVariants}
//         >
//           <div className="text-center mb-12">
//             <motion.p
//               className={`text-sm font-semibold tracking-widest uppercase mb-2 ${accentColor}`}
//               variants={textItemVariants}
//             >
//               our fresh products
//             </motion.p>

//             <motion.h2
//               className={`text-4xl font-extrabold ${primaryColor}`}
//               variants={textItemVariants}
//             >
//               best quality <span className={accentColor}>organic</span> products
//             </motion.h2>

//             <motion.p className="text-gray-600 mt-4 max-w-2xl mx-auto" variants={textItemVariants}>
//               {totalProducts > 0
//                 ? `Discover our collection of ${totalProducts} premium organic products`
//                 : 'Discover our premium organic products collection'}
//             </motion.p>
//           </div>

//           {isLoading && (
//             <div className="text-center py-12">
//               <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
//               <p className="mt-4 text-gray-600">Loading products...</p>
//             </div>
//           )}

//           {error && !isLoading && (
//             <div className="text-center py-12">
//               <p className="text-red-500">Failed to load products. Please try again.</p>
//               <button
//                 onClick={() => window.location.reload()}
//                 className="mt-4 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold py-2 px-6 rounded-sm transition-colors duration-300"
//               >
//                 Retry
//               </button>
//             </div>
//           )}

//           {!isLoading && !error && (
//             <>
//               {products.length > 0 ? (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//                   {products.slice(0,6).map((product, index) => {
//                     const cardData = formatProductForCard(product, index);
//                     console.log("carddata",cardData?.imageSrc);
//                     return (
//                       <ProductCard
//                         key={product._id || index}
//                         title={cardData.title}
//                         description={cardData.description}
//                         imageSrc={cardData.imageSrc}
//                         href={cardData.href}
//                         index={index}
//                       />
//                     );
//                   })}
//                 </div>
//               ) : (
//                 <div className="text-center py-12">
//                   <p className="text-gray-600">No products available at the moment.</p>
//                 </div>
//               )}
//             </>
//           )}

            
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AllService;



// 'use client';

// import React, { useState, useEffect, useCallback } from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { baseUriBackend } from '@/utils/url';
// import { ProductCard } from '@/component/common/ProductCard';
// import { useGetServiceQuery } from '@/redux/feature/serviceApi';

// // --- Utility Components for Pagination (Included for completeness) ---

// /**
//  * A simple Pagination component. For a real app, this should be in its own file.
//  * @param {number} currentPage - The current page number.
//  * @param {number} totalPages - The total number of pages.
//  * @param {function(number): void} onPageChange - Callback function when a page is selected.
//  */
// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   if (totalPages <= 1) return null;

//   const pageNumbers = [];
//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   const baseClasses = "mx-1 px-4 py-2 rounded-lg font-semibold transition-colors duration-300";
//   const activeClasses = "bg-amber-500 text-white shadow-md hover:bg-amber-600";
//   const inactiveClasses = "bg-gray-100 text-slate-700 hover:bg-gray-200";
//   const disabledClasses = "bg-gray-50 text-gray-400 cursor-not-allowed";

//   const renderPageButton = (page) => (
//     <button
//       key={page}
//       onClick={() => onPageChange(page)}
//       className={`${baseClasses} ${page === currentPage ? activeClasses : inactiveClasses}`}
//       aria-current={page === currentPage ? 'page' : undefined}
//     >
//       {page}
//     </button>
//   );

//   const renderNavButton = (label, targetPage, isDisabled) => (
//     <button
//       onClick={() => onPageChange(targetPage)}
//       disabled={isDisabled}
//       className={`${baseClasses} ${isDisabled ? disabledClasses : inactiveClasses}`}
//     >
//       {label}
//     </button>
//   );

//   return (
//     <div className="flex justify-center items-center space-x-2 mt-12">
//       {renderNavButton('Previous', currentPage - 1, currentPage === 1)}
      
//       {/* Simple pagination: show first, current, and last pages for brevity */}
//       {pageNumbers.map(renderPageButton)}

//       {renderNavButton('Next', currentPage + 1, currentPage === totalPages)}
//     </div>
//   );
// };


// // --- Framer Motion Variants (Unchanged) ---

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       when: 'beforeChildren',
//       staggerChildren: 0.1,
//     },
//   },
// };

// const textItemVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
// };

// const formatProductForCard = (product, index) => {
//   return {
//     title: product.serviceName || product.tittle || 'Product',
//     description: product.description || 'No description available',
//     imageSrc: `${baseUriBackend}${product.image}`,
//     href: `/products/${product._id}`,
//     index: index,
//   };
// };

// const AllService = () => {
//   // 1. INTRODUCE PAGINATION STATE
//   const [page, setPage] = useState(1);
//   const limit = 6; // Set a fixed limit for products per page
//   const search = ''; // Assuming search is not used for pagination logic here

//   const accentColor = 'text-amber-500';
//   const primaryColor = 'text-slate-900';
//   const lightYellowBg = '#FFFCF1';

//   // 2. PASS STATE TO QUERY HOOK
//   const { data: apiResponse, isLoading, error } = useGetServiceQuery({ page, limit, search });
//   console.log("total data",apiResponse);

//   const products = apiResponse?.data || [];
//   const totalProducts = apiResponse?.totalData || 0;

//   // Calculate total pages
//   const totalPages = Math.ceil(totalProducts / limit);

//   // Helper to handle page change
//   const handlePageChange = useCallback((newPage) => {
//     if (newPage > 0 && newPage <= totalPages) {
//       setPage(newPage);
//       // Optional: scroll to top of the product section on page change
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   }, [totalPages]);


//   useEffect(() => {
//     // console.log('Current Page:', page);
//     // console.log('Total Products:', totalProducts);
//     // console.log('Total Pages:', totalPages);
//   }, [page, totalProducts, totalPages]);


//   return (
//     <section className="relative w-full overflow-hidden bg-white">
//       <div
//         className="absolute top-0 left-0 w-full"
//         style={{ height: '50%', backgroundColor: lightYellowBg }}
//       ></div>

//       <div className="relative z-10 py-20">
//         <motion.div
//           className="container mx-auto px-4 sm:px-8 lg:px-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           variants={containerVariants}
//         >
//           <div className="text-center mb-12">
//             <motion.p
//               className={`text-sm font-semibold tracking-widest uppercase mb-2 ${accentColor}`}
//               variants={textItemVariants}
//             >
//               our fresh products
//             </motion.p>

//             <motion.h2
//               className={`text-4xl font-extrabold ${primaryColor}`}
//               variants={textItemVariants}
//             >
//               best quality <span className={accentColor}>organic</span> products
//             </motion.h2>

//             <motion.p className="text-gray-600 mt-4 max-w-2xl mx-auto" variants={textItemVariants}>
//               {totalProducts > 0
//                 ? `Showing page ${page} of ${totalPages} (Total ${totalProducts} products)`
//                 : 'Discover our premium organic products collection'}
//             </motion.p>
//           </div>

//           {isLoading && (
//             <div className="text-center py-12">
//               <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
//               <p className="mt-4 text-gray-600">Loading products...</p>
//             </div>
//           )}

//           {error && !isLoading && (
//             <div className="text-center py-12">
//               <p className="text-red-500">Failed to load products. Please try again.</p>
//               <button
//                 onClick={() => window.location.reload()}
//                 className="mt-4 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold py-2 px-6 rounded-sm transition-colors duration-300"
//               >
//                 Retry
//               </button>
//             </div>
//           )}

//           {!isLoading && !error && (
//             <>
//               {products.length > 0 ? (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//                   {/* Note: No need to slice(0,6) anymore, the limit is handled by the API query */}
//                   {products.map((product, index) => {
//                     const cardData = formatProductForCard(product, index);
//                     return (
//                       <ProductCard
//                         key={product._id || index}
//                         title={cardData.title}
//                         description={cardData.description}
//                         imageSrc={cardData.imageSrc}
//                         href={cardData.href}
//                         index={index}
//                       />
//                     );
//                   })}
//                 </div>
//               ) : (
//                 <div className="text-center py-12">
//                   <p className="text-gray-600">No products available for this page/search.</p>
//                 </div>
//               )}
//             </>
//           )}

//           {/* 4. RENDER PAGINATION COMPONENT */}
//           {!isLoading && !error && totalProducts > 0 && (
//             <Pagination
//               currentPage={page}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//             />
//           )}

//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AllService;





'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { baseUriBackend } from '@/utils/url';
import { ProductCard } from '@/component/common/ProductCard';
import { useGetServiceQuery } from '@/redux/feature/serviceApi';

// --- Utility Components for Pagination (Unchanged, it is correct) ---

/**
 * A simple Pagination component. For a real app, this should be in its own file.
 * @param {number} currentPage - The current page number.
 * @param {number} totalPages - The total number of pages.
 * @param {function(number): void} onPageChange - Callback function when a page is selected.
 */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  // Optimized page number generation (can be extended to show ellipses)
  const pageNumbers = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  
  if (start > 1) pageNumbers.push(1, '...');
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }
  if (end < totalPages) pageNumbers.push('...', totalPages);
  
  const baseClasses = "mx-1 px-4 py-2 rounded-lg font-semibold transition-colors duration-300";
  const activeClasses = "bg-amber-500 text-white shadow-md hover:bg-amber-600";
  const inactiveClasses = "bg-gray-100 text-slate-700 hover:bg-gray-200";
  const disabledClasses = "bg-gray-50 text-gray-400 cursor-not-allowed";

  const renderPageButton = (page) => {
    if (page === '...') {
      return <span key={Math.random()} className="mx-1 px-4 py-2 text-gray-500">...</span>;
    }
    return (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`${baseClasses} ${page === currentPage ? activeClasses : inactiveClasses}`}
        aria-current={page === currentPage ? 'page' : undefined}
      >
        {page}
      </button>
    );
  };

  const renderNavButton = (label, targetPage, isDisabled) => (
    <button
      onClick={() => onPageChange(targetPage)}
      disabled={isDisabled}
      className={`${baseClasses} ${isDisabled ? disabledClasses : inactiveClasses}`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      {renderNavButton('Previous', currentPage - 1, currentPage === 1)}
      
      {pageNumbers.map(renderPageButton)}

      {renderNavButton('Next', currentPage + 1, currentPage === totalPages)}
    </div>
  );
};


// --- Framer Motion Variants & formatProductForCard (Unchanged) ---

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

const formatProductForCard = (product, index) => {
  return {
    title: product.serviceName || product.tittle || 'Product',
    description: product.description || 'No description available',
    imageSrc: `${baseUriBackend}${product.image}`,
    href: `/products/${product._id}`,
    index: index,
  };
};

// --- AllService Component (Revised) ---

const AllService = () => {
  // Use state only for control that can be changed by user (e.g., page)
  const [page, setPage] = useState(1);
  const limit = 6; // Fixed limit sent to API
  const search = ''; 

  const accentColor = 'text-amber-500';
  const primaryColor = 'text-slate-900';
  const lightYellowBg = '#FFFCF1';

  // PASS STATE TO QUERY HOOK
  const { data: apiResponse, isLoading, error } = useGetServiceQuery({ page, limit, search });

  const products = apiResponse?.data || [];
  const totalProducts = apiResponse?.totalData || 0;

  // Use totalPages from API if available, otherwise calculate on client-side (Fallback)
  const totalPages = apiResponse?.pagination?.totalPages 
                     ? apiResponse.pagination.totalPages 
                     : Math.ceil(totalProducts / limit);

  // Use page from API if available, otherwise use client-side state
  const currentPage = apiResponse?.pagination?.page || page;


  // Helper to handle page change
  const handlePageChange = useCallback((newPage) => {
    // Check is redundant if API logic is correct, but good for safety
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      // Scroll to top of the product section on page change for better UX
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [totalPages]);


  useEffect(() => {
    // console.log('API Total Pages:', apiResponse?.pagination?.totalPages);
    // console.log('Client Total Pages:', totalPages);
    // console.log('Current Page:', currentPage);
  }, [apiResponse, currentPage, totalPages]);


  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background Div */}
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
          {/* Header Section */}
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
                ? `Showing page ${currentPage} of ${totalPages} (Total ${totalProducts} products)`
                : 'Discover our premium organic products collection'}
            </motion.p> */}
          </div>

          {/* Loading, Error, and Product Display Sections (Logic is correct) */}
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
                onClick={() => setPage(1)} // Retry by resetting page and forcing refetch
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
                  {products.map((product, index) => {
                    const cardData = formatProductForCard(product, index);
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
                  <p className="text-gray-600">No products available for this page/search.</p>
                </div>
              )}
            </>
          )}

          {/* RENDER PAGINATION COMPONENT */}
          {!isLoading && !error && totalProducts > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}

        </motion.div>
      </div>
    </section>
  );
};

export default AllService;