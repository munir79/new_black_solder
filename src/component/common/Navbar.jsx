import React from 'react';
import Link from 'next/link';

// ==========================================
// 1. Internal SVG Icon Components
// ==========================================
// (Defined here to avoid external imports)

const LocationIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.493 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
  </svg>
);

const EmailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.85C2.334 3.854 3.854 2.311 7.115 2.163 8.379 2.106 8.761 2.094 12 2.094m0-2.094c-3.262 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.687-.073 4.948 0 3.261.014 3.666.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.687.072 4.948.072 3.261 0 3.666-.014 4.947-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.687.073-4.948 0-3.261-.014-3.666-.073-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.667.014 15.262 0 12 0z" />
    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" />
    <path d="M18.406 4.155a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
  </svg>
);



// ==========================================
// 2. Data for Dynamic Mapping
// ==========================================

const topBarContactData = [
  { id: 1, icon: LocationIcon, text: '25/B Milford Road, New York' },
  { id: 2, icon: EmailIcon, text: 'info@example.com' },
  { id: 3, icon: PhoneIcon, text: '+2 123 654 7898' },
];

const socialMediaData = [
  { id: 1, icon: FacebookIcon, href: '#' },
  { id: 2, icon: TwitterIcon, href: '#' },
  { id: 3, icon: InstagramIcon, href: '#' },
  { id: 4, icon: LinkedInIcon, href: '#' },
];

const navLinksData = [
  { id: 1, label: 'Home', href: '/', isActive: true,  },// hasDropdown: false
  { id: 3, label: 'Services', href: '/services', isActive: false,  },
    { id: 5, label: 'Products', href: '/product', isActive: false, },
  { id: 4, label: 'vision', href: '/vision', isActive: false,  },

    { id: 2, label: 'About', href: '/about', isActive: false, },

  { id: 6, label: 'Contact Us', href: '/contact', isActive: false,  },
];

// ==========================================
// 3. Main Navbar Component
// ==========================================

const Navbar = () => {
  return (
    <header className="w-full font-sans shadow-sm">
      {/* Topbar Area (Dark Blue Background) */}
      <div className="bg-slate-900 text-gray-300 py-2.5 text-[13px] font-medium">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-16">
          
          {/* Left Side: Contact Info (Mapped Dynamically) */}
          <div className="flex flex-wrap justify-center md:justify-start items-center space-x-4 lg:space-x-8 mb-2 md:mb-0">
            {topBarContactData.map((item) => (
              <div key={item.id} className="flex items-center space-x-2">
                <item.icon className="h-4 w-4 text-white" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Right Side: Social Media Icons (Mapped Dynamically) */}
          <div className="flex items-center space-x-4">
            {socialMediaData.map((item) => (
              <Link href={item.href} key={item.id} className="hover:text-white transition-colors duration-200">
                 <item.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar Area (White Background) */}
      <div className="bg-white py-5">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 group">
            {/* A placeholder leaf icon for the logo */}
            {/* <LogoIcon className="h-10 w-10 text-lime-500" /> */}
            <img src="/assets/logo/logo.png" alt="" 
            height={40}
            width={70}
            />
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold text-slate-900 tracking-wide group-hover:text-lime-600 transition-colors">INNOVATION</span>
              <span className="text-[11px] font-medium text-slate-500 tracking-[0.2em] uppercase">Agriculture</span>
            </div>
          </Link>

          {/* Navigation Links (Mapped Dynamically) */}
          {/* Hidden on small screens for simplicity, as a mobile menu wasn't requested explicitly but is good practice */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 font-semibold text-[15px]">
            {navLinksData.map((link) => (
              <Link 
                key={link.id} 
                href={link.href}
                className={`flex items-center space-x-1 hover:text-amber-400 transition-colors duration-200 ${link.isActive ? 'text-amber-400' : 'text-slate-700'}`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <ChevronDownIcon className="h-4 w-4 stroke-2" />}
              </Link>
            ))}
          </nav>

          {/* Right Side: Search Icon and Button */}
          <div className="flex items-center space-x-4 lg:space-x-8">
            <button className="text-slate-700 hover:text-amber-400 transition-colors">
              <SearchIcon className="h-6 w-6" />
            </button>
            <Link href="/quote" className="hidden sm:flex items-center space-x-2 bg-amber-400 hover:bg-amber-500 text-white text-sm font-bold px-6 py-3 rounded-sm transition-all duration-300">
               <span>Get A Quote</span>
               <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;