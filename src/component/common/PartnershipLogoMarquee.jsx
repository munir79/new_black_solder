import React from 'react';

// ==========================================
// 1. Data Structure for Logos
// ==========================================

// NOTE: Replace the image paths with actual paths to your partnership logos.
// Using a large number of logos ensures a smoother, more seamless loop.
const partnerLogos = [
    { id: 1, name: "EcoFarm Solutions", src: "/public/assets/service/chik2.jpg" },
    { id: 2, name: "Green Harvest Corp", src: "https://via.placeholder.com/200x80/fcd34d/333333?text=Logo+2" },
    { id: 3, name: "Sustainable Fund", src: "https://via.placeholder.com/200x80/fcd34d/333333?text=Logo+3" },
    { id: 4, name: "AgriTech Innovate", src: "https://via.placeholder.com/200x80/fcd34d/333333?text=Logo+4" },
    { id: 5, name: "Renewable Energy Co", src: "https://via.placeholder.com/200x80/fcd34d/333333?text=Logo+5" },
    { id: 6, name: "Seedling Ventures", src: "https://via.placeholder.com/200x80/fcd34d/333333?text=Logo+6" },
    // Duplicate the list to ensure seamless looping without a break
    { id: 7, name: "EcoFarm Solutions", src: "https://via.placeholder.com/200x80/fcd34d/333333?text=Logo+1" },
    { id: 8, name: "Green Harvest Corp", src: "https://via.placeholder.com/200x80/fcd34d/333333?text=Logo+2" },
    { id: 9, name: "Sustainable Fund", src: "https://via.placeholder.com/200x80/fcd34d/333333?text=Logo+3" },
    { id: 10, name: "AgriTech Innovate", src: "https://via.placeholder.com/200x80/fcd34d/333333?text=Logo+4" },
    { id: 11, name: "Renewable Energy Co", src: "https://via.placeholder.com/200x80/fcd34d/333333?text=Logo+5" },
    { id: 12, name: "Seedling Ventures", src: "https://via.placeholder.com/200x80/fcd34d/333333?text=Logo+6" },
];

// ==========================================
// 2. CSS Animation Keyframes
// ==========================================

/* * NOTE: For Tailwind CSS projects, you often need to extend your 
 * tailwind.config.js file to include custom animations and keyframes.
 * * Add this custom CSS/keyframes definition to your global CSS file 
 * (e.g., globals.css or main.css) or configure it in tailwind.config.js.
 */
const customCss = `
@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); } /* Scrolls exactly half the total width (the duplicated set) */
}

.animate-marquee {
    animation: marquee 30s linear infinite;
}
`;


// ==========================================
// 3. PartnershipLogoMarquee Component
// ==========================================

const PartnershipLogoMarquee = () => {
  const logoHeight = 'h-[150px]'; // Fixed height requested

  return (
    <section className="bg-gray-50 py-8 overflow-hidden relative border-t border-b border-gray-200">
        
        {/* Inject custom CSS for the animation */}
        <style dangerouslySetInnerHTML={{ __html: customCss }} />
        
        {/* Marquee Wrapper: Sets the height and overflow hidden */}
        <div className={`w-full ${logoHeight} flex items-center`}>
            {/* Logo Container: Applies the animation */}
            <div className="flex flex-shrink-0 animate-marquee min-w-full">
                {partnerLogos.map((logo) => (
                    <div 
                        key={logo.id} 
                        className={`flex justify-center items-center px-8 flex-shrink-0 w-[250px] ${logoHeight}`}
                    >
                        {/* Logo Image */}
                        <img 
                            src={logo.src} 
                            alt={`${logo.name} Logo`}
                            className="max-h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
        
    </section>
  );
};

export default PartnershipLogoMarquee;