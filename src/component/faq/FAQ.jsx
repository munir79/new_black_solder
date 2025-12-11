"use client";
import React, { useState } from 'react';

// ==========================================
// 1. Internal SVG Icon Components
// ==========================================

const PlusIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
  </svg>
);

const MinusIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
  </svg>
);

// ==========================================
// 2. Data Structure
// ==========================================

const faqData = {
  tagline: "FAQ",
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about our sustainable farming practices and services.",
  
  faqs: [
    {
      id: 1,
      question: "What makes your farming methods sustainable?",
      answer: "We use regenerative agriculture techniques, organic fertilizers, water conservation methods, and renewable energy to create a closed-loop ecosystem that's both environmentally friendly and productive.",
    },
    {
      id: 2,
      question: "How long does it take to implement your solutions?",
      answer: "Implementation typically takes 3-12 months depending on project scope. We start with assessment (2-4 weeks), followed by planning (4-6 weeks), and then implementation with clear timelines provided upfront.",
    },
    {
      id: 3,
      question: "Do you work with farms of all sizes?",
      answer: "Yes, we work with small family farms, mid-sized operations, and large agricultural enterprises. Our solutions are scalable and customizable to meet specific needs and budgets.",
    },
    {
      id: 4,
      question: "What kind of support do you provide after implementation?",
      answer: "We offer 24/7 technical support through phone, email, and our support portal. Our team includes agronomists and sustainable farming experts ready to address any issues.",
    },
    {
      id: 5,
      question: "Are there financing options available?",
      answer: "Yes, we partner with green financing institutions and government programs offering low-interest loans and grants for sustainable farming initiatives.",
    },
    {
      id: 6,
      question: "Can you help transition traditional farms to sustainable methods?",
      answer: "Absolutely. We provide complete transition packages including assessment, planning, implementation, and ongoing support while maintaining productivity and profitability.",
    },
  ],
  
  ctaSection: {
    title: "Need More Information?",
    description: "Can't find what you're looking for? Contact our team for personalized assistance.",
    button: {
      label: "Contact Us",
      href: "/contact"
    }
  }
};

// ==========================================
// 3. FAQ Item Component
// ==========================================

const FAQItem = ({ faq, isExpanded, onToggle }) => {
  return (
    <div className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${isExpanded ? 'bg-amber-50 border-amber-200 shadow-sm' : 'bg-white hover:bg-gray-50'}`}>
      <button
        onClick={() => onToggle(faq.id)}
        className="w-full flex items-center justify-between p-6 text-left transition-colors"
      >
        <div className="flex items-start space-x-4">
          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isExpanded ? 'bg-amber-500 text-white' : 'bg-amber-100 text-amber-600'}`}>
            <span className="font-semibold text-sm">{faq.id}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 pr-4">
            {faq.question}
          </h3>
        </div>
        <div className="flex-shrink-0">
          {isExpanded ? (
            <MinusIcon className="h-5 w-5 text-amber-500" />
          ) : (
            <PlusIcon className="h-5 w-5 text-amber-400" />
          )}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-6 pt-0 pl-14">
          <p className="text-gray-600 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. Main FAQ Component
// ==========================================

const FAQ = () => {
  const [expandedFaqs, setExpandedFaqs] = useState([1]);

  const toggleFaq = (id) => {
    setExpandedFaqs(prev => 
      prev.includes(id) 
        ? prev.filter(faqId => faqId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">
            {faqData.tagline}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {faqData.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {faqData.description}
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqData.faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isExpanded={expandedFaqs.includes(faq.id)}
                onToggle={toggleFaq}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-amber-50 to-lime-50 border border-amber-100 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {faqData.ctaSection.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {faqData.ctaSection.description}
            </p>
            <a
              href={faqData.ctaSection.button.href}
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-sm hover:shadow"
            >
              {faqData.ctaSection.button.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;