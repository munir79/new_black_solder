import Hero from '@/component/hero/Hero';
import ServicesHero from '@/component/hero/ServicesHero';
import Service from '@/component/service/Service';
import React from 'react';
import AllService from './AllService';
import ContactForm from '@/component/contact/ContactForm';

const Services = () => {
  return (
    <div>
      <ServicesHero
        // backgroundImageUrl="/assets/navservice/Gemini_Generated_Image_ixoyq2ixoyq2ixoy.png"
        backgroundImageUrl="/assets/navserivice/Gemini_Generated_Image_ixoyq2ixoyq2ixoy.png"
        tagline="WELCOME TO TRUBUS"
        headline="Nurturing Nature, Feeding the World"
        description="Through organic agriculture, we create balance between productivity and preservation."
        href="/services"
      />
      <AllService />
      <ContactForm />
      {/* <ContactForm backgroundImage="/assets/solutions/new sol/s22.png"/> */}
    </div>
  );
};

export default Services;
