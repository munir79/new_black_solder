import React from 'react';
import Link from 'next/link';

// ==========================================
// 1. Internal SVG Icon Components
// (Re-used/Adapted from Navbar for consistency)
// ==========================================

const LogoIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 21.75a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0V21a.75.75 0 01-.75.75zM6.166 17.834a.75.75 0 001.06 1.06l1.591-1.59a.75.75 0 10-1.06-1.061l-1.591 1.59zM2.25 12a.75.75 0 01.75-.75H5.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM5.106 6.166a.75.75 0 011.06-1.06l1.59 1.591a.75.75 0 11-1.061 1.06l-1.59-1.591z" />
    <path d="M12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
    <path fillRule="evenodd" d="M12 1.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21zM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12z" clipRule="evenodd"/>
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

const PhoneIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
  </svg>
);

const EmailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
  </svg>
);

const LocationIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.493 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
  </svg>
);

const CalendarIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75v1.5c0 .414.336.75.75.75h6c.414 0 .75-.336.75-.75v-1.5a.75.75 0 011.5 0v1.5a2.25 2.25 0 01-2.25 2.25h-6A2.25 2.25 0 015 4.25v-1.5a.75.75 0 01.75-.75zm-1.5 5.75A.75.75 0 014.75 8h10.5a.75.75 0 010 1.5H4.75a.75.75 0 01-.75-.75zM4 11.25a.75.75 0 00-.75.75v6a2 2 2 002 2h10a2 2 2 002-2v-6a.75.75 0 00-1.5 0v6a.5.5 0 01-.5.5H5.5a.5.5 0 01-.5-.5v-6a.75.75 0 00-.75-.75z" clipRule="evenodd" />
  </svg>
);


// ==========================================
// 2. Data for Dynamic Mapping
// ==========================================

const quickLinks = [
  { id: 1, label: 'Home', href: '/' },
  { id: 2, label: 'About', href: '/about' },
  { id: 3, label: 'Services', href: '/services' },
  { id: 4, label: 'Contact Us', href: '/contact' },
  { id: 5, label: 'Blog', href: '/blog' },
];

const contactInfo = [
  { id: 1, icon: PhoneIcon, textLine1: '+1 (844) 099-8080', textLine2: '+91 790 101 790' },
  { id: 2, icon: EmailIcon, textLine1: 'info@example.com', textLine2: 'hello@example.com' },
  { id: 3, icon: LocationIcon, textLine1: '154/G Part No. 39, 13th Floor,', textLine2: 'DIB Cabin Kanpur' },
];

const latestPosts = [
  { id: 1, title: 'Nothing impossible to heart', date: '2 March, 2020', imageUrl: '/post-image-1.jpg' },
  { id: 2, title: 'Hard work', date: '2 March, 2020', imageUrl: '/post-image-2.jpg' },
  { id: 3, title: 'Nothing impossible to heart', date: '2 March, 2020', imageUrl: '/post-image-3.jpg' },
];

const socialMediaFooter = [
  { id: 1, icon: FacebookIcon, href: '#' },
  { id: 2, icon: TwitterIcon, href: '#', isTwitter: true }, // Placeholder for generic social icon if needed
];

const privacyLinks = [
  { id: 1, label: 'Privacy Policy', href: '#' },
  { id: 2, label: 'Terms of Service', href: '#' },
  { id: 3, label: 'Legal', href: '#' },
];

// NOTE: Since external image imports are forbidden, the post images are placeholders.
// In a real Next.js app, you would use the <Image /> component or adjust the paths.

// ==========================================
// 3. Main Footer Component
// ==========================================

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 font-sans">
      
      {/* Footer Top Section (4 Columns) */}
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Logo and Description */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
               <img src="/assets/logo/logo.png" alt="" 
            height={40}
            width={70}
            />
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-white tracking-wide group-hover:text-lime-600 transition-colors">INNOVATION</span>
                <span className="text-[11px] font-medium text-gray-400 tracking-[0.2em] uppercase">Agriculture</span>
              </div>
            </Link>
            <p className="text-sm font-light leading-relaxed mb-6">
              Explicabo enim nam velit ante. Con ipsedici peratioes e. Consola. Nam hincadoceos eosineq dolor alit. alit dolur adipiscinges lore. Mipsum dolor sit met consectetur.
            </p>
            <div className="flex space-x-3">
              {socialMediaFooter.map((item) => (
                <Link 
                  key={item.id} 
                  href={item.href} 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-white hover:bg-amber-400 transition-colors duration-200"
                >
                  <item.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Our Links (Mapped Dynamically) */}
          <div>
            <h4 className="text-lg font-bold text-amber-400 mb-6 border-b border-amber-400/50 pb-2 w-max">
              Our Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link 
                    href={link.href} 
                    className="text-sm font-light hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us (Mapped Dynamically) */}
          <div>
            <h4 className="text-lg font-bold text-amber-400 mb-6 border-b border-amber-400/50 pb-2 w-max">
              Contact Us
            </h4>
            <ul className="space-y-6">
              {contactInfo.map((info) => (
                <li key={info.id} className="flex space-x-3 items-start">
                  <info.icon className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col text-sm font-light">
                    {info.textLine1 && <span>{info.textLine1}</span>}
                    {info.textLine2 && <span>{info.textLine2}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Latest Post (Mapped Dynamically) */}
          <div>
            <h4 className="text-lg font-bold text-amber-400 mb-6 border-b border-amber-400/50 pb-2 w-max">
              Latest Post
            </h4>
            <div className="space-y-5">
              {latestPosts.map((post) => (
                <Link key={post.id} href="#" className="flex space-x-3 group">
                  {/* Image Placeholder */}
                  <div className="w-16 h-16 bg-gray-700 flex-shrink-0 rounded overflow-hidden">
                    {/* Placeholder content for image */}
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover opacity-30" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium leading-tight group-hover:text-amber-400 transition-colors">
                      {post.title}
                    </span>
                    <div className="flex items-center space-x-1 mt-1 text-xs text-gray-500 font-light">
                      <CalendarIcon className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom Section (Copyright and Legal Links) */}
      <div className="border-t border-slate-800 py-5">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center text-xs font-light text-gray-400">
          
          {/* Copyright */}
          <p className="mb-3 md:mb-0">
            Copyright © AgriGo 2023. All rights reserved
          </p>

          {/* Legal Links (Mapped Dynamically) */}
          <div className="flex space-x-4">
            {privacyLinks.map((link, index) => (
              <React.Fragment key={link.id}>
                {/* Yellow dot separator */}
                {index > 0 && <span className="text-amber-400">•</span>}
                <Link 
                  href={link.href} 
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;