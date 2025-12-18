



import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useAuth from '@/utils/useAuth';
import { IoMdLogOut } from 'react-icons/io';

// ==========================================
// 1. Internal SVG Icon Components
// ==========================================

const MenuIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

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
// 2. Data
// ==========================================
const navLinksData = [
  { id: 1, label: 'Home', href: '/', isActive: true },
  { id: 2, label: 'Services', href: '/services', isActive: false },
  { id: 3, label: 'Products', href: '/product', isActive: false },
  { id: 4, label: 'Vision', href: '/vision', isActive: false },
  { id: 5, label: 'About', href: '/about', isActive: false },
  { id: 6, label: 'Team', href: '/team', isActive: false },
  { id: 7, label: 'Contact Us', href: '/contact', isActive: false },
];

const Navbar = () => {
  const user = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      window.location.href = '/';
    }
  };

  return (
    <header className="w-full font-sans shadow-sm relative">
      {/* Topbar Area (Desktop Only) */}
      <div className="bg-slate-900 text-gray-300 py-2.5 text-[13px] font-medium hidden md:block">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16">
          <div className="flex items-center space-x-8">
            <span className="flex items-center gap-2"><LocationIcon className="h-4 w-4 text-white" /> 25/B Milford Road, NY</span>
            <span className="flex items-center gap-2"><EmailIcon className="h-4 w-4 text-white" /> info@example.com</span>
            <span className="flex items-center gap-2"><PhoneIcon className="h-4 w-4 text-white" /> +2 123 654 7898</span>
          </div>
        </div>
      </div>

      {/* Main Navbar Area */}
      <div className="bg-white py-4 md:py-5 border-b">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16">
          
          {/* Hamburger (Mobile Only) */}
          <button 
            className="md:hidden p-2 text-slate-700 hover:text-amber-500 transition-colors" 
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon className="h-7 w-7" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <img src="/assets/logo/logo.png" alt="Logo" className="h-10 w-auto" />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-lg font-bold text-slate-900 group-hover:text-lime-600 transition-colors">INNOVATION</span>
              <span className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">Agriculture</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 font-semibold text-[15px]">
            {navLinksData.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`transition-colors duration-200 ${link.isActive ? 'text-amber-400' : 'text-slate-700 hover:text-amber-400'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth/Actions */}
          <div className="flex items-center space-x-3">
            <button className="text-slate-700 hover:text-amber-400 p-2">
              <SearchIcon className="h-6 w-6" />
            </button>
            
            <div className="hidden sm:flex gap-3">
              {isLoggedIn && user?.role === 'admin' && (
                 <Link href="/dashboard/products" className="bg-amber-400 hover:bg-amber-500 text-white text-sm font-bold px-5 py-2.5 rounded-sm flex items-center gap-2 transition-all">
                    Dashboard
                 </Link>
              )}
              {isLoggedIn ? (
                <button onClick={handleLogout} className="bg-amber-400 hover:bg-amber-500 text-white text-sm font-bold px-5 py-2.5 rounded-sm flex items-center gap-2 transition-all">
                  <IoMdLogOut /> Logout
                </button>
              ) : (
                <Link href="/sign-in" className="bg-amber-400 hover:bg-amber-500 text-white text-sm font-bold px-5 py-2.5 rounded-sm flex items-center gap-2 transition-all">
                  Log in <ArrowRightIcon className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE DRAWER --- */}
      
      {/* Overlay Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Side Drawer Container */}
      <div 
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[101] shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <img src="/assets/logo/logo.png" alt="Logo" className="h-8 w-auto" />
            <button onClick={() => setIsMenuOpen(false)}>
              <CloseIcon className="h-6 w-6 text-slate-500" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col space-y-5 font-semibold text-slate-700 flex-grow">
            {navLinksData.map((link) => (
              <Link 
                key={link.id} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg ${link.isActive ? 'text-amber-500' : 'hover:text-amber-500'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Bottom Actions Area (Auth) */}
          <div className="pt-6 border-t border-slate-100 flex flex-col space-y-4">
            {isLoggedIn ? (
              <>
                {/* Admin Dashboard - Placed above Logout */}
                {user?.role === 'admin' && (
                  <Link 
                    href="/dashboard/products" 
                    onClick={() => setIsMenuOpen(false)} 
                    className="flex items-center gap-2 text-amber-500 text-lg font-bold"
                  >
                    Dashboard <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                )}
                <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 text-lg font-bold">
                  <IoMdLogOut /> Logout
                </button>
              </>
            ) : (
              <Link href="/sign-in" onClick={() => setIsMenuOpen(false)} className="text-amber-500 text-lg font-bold flex items-center gap-2">
                Log In <ArrowRightIcon className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;