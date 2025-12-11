
"use client";
import React from 'react';
import Link from 'next/link';

// ==========================================
// 1. Internal SVG Icon Components
// ==========================================

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

const ArrowRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
  </svg>
);

// ==========================================
// 2. Data Structure
// ==========================================

const contactData = {
  tagline: "GET IN TOUCH",
  title: "Ready To Grow With Us?",
  description: "Have questions about our sustainable farming solutions? We're here to help you transform your agricultural practices.",
  
  formFields: {
    name: { label: "Your Name", placeholder: "John Smith", type: "text" },
    email: { label: "Email Address", placeholder: "john@example.com", type: "email" },
    phone: { label: "Phone Number", placeholder: "+1 (555) 123-4567", type: "tel" },
    service: { 
      label: "Service Interested In", 
      placeholder: "Select a service", 
      type: "select",
      options: [
        "Organic Farming Solutions",
        "Sustainable Agriculture",
        "Crop Management",
        "Livestock Solutions",
        "Agricultural Technology",
        "Other"
      ]
    },
    message: { label: "Your Message", placeholder: "Tell us about your project or questions...", type: "textarea" }
  },
  
  submitButton: {
    label: "Send Message",
    icon: ArrowRightIcon
  },
  
  contactInfo: [
    {
      id: 1,
      icon: PhoneIcon,
      title: "Call Us",
      details: ["+1 (844) 099-8080", "+91 790 101 790"],
      link: "tel:+18440998080"
    },
    {
      id: 2,
      icon: EmailIcon,
      title: "Email Us",
      details: ["info@blacksoldierinternational.com", "support@blacksoldierinternational.com"],
      link: "mailto:info@blacksoldierinternational.com"
    },
    {
      id: 3,
      icon: LocationIcon,
      title: "Visit Us",
      details: ["154/G Part No. 39", "13th Floor, DIB Cabin", "Kanpur, India"],
      link: "https://maps.google.com"
    }
  ],
  
  backgroundImage: "/assets/contact/agriculture-field.jpg"
};

// ==========================================
// 3. Contact Form Component
// ==========================================

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactData.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-slate-900/80"></div>
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-8 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-4">
            {contactData.tagline}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            {contactData.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {contactData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information Cards */}
          <div className="space-y-8">
            {contactData.contactInfo.map((info) => (
              <div 
                key={info.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-amber-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-400/10 rounded-lg flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                    <info.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Link 
                      href={info.link}
                      className="inline-flex items-center text-amber-400 hover:text-amber-300 text-sm font-medium mt-3 group-hover:underline"
                    >
                      Get in touch
                      <ArrowRightIcon className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Additional Info Card */}
          
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {contactData.formFields.name.label}
                  </label>
                  <input
                    type={contactData.formFields.name.type}
                    placeholder={contactData.formFields.name.placeholder}
                    className="w-full bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {contactData.formFields.email.label}
                  </label>
                  <input
                    type={contactData.formFields.email.type}
                    placeholder={contactData.formFields.email.placeholder}
                    className="w-full bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Phone & Service Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {contactData.formFields.phone.label}
                  </label>
                  <input
                    type={contactData.formFields.phone.type}
                    placeholder={contactData.formFields.phone.placeholder}
                    className="w-full bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {contactData.formFields.service.label}
                  </label>
                  <select
                    className="w-full bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-colors appearance-none"
                    required
                  >
                    <option value="" className="bg-slate-900">{contactData.formFields.service.placeholder}</option>
                    {contactData.formFields.service.options.map((option, idx) => (
                      <option key={idx} value={option} className="bg-slate-900">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {contactData.formFields.message.label}
                </label>
                <textarea
                  rows="4"
                  placeholder={contactData.formFields.message.placeholder}
                  className="w-full bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-400/25 group"
              >
                <span>{contactData.submitButton.label}</span>
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-gray-400 text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Element */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default ContactForm;