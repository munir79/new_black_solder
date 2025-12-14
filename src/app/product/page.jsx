import ContactForm from '@/component/contact/ContactForm';
import ServicesHero from '@/component/hero/ServicesHero';
import AllProducts from '@/component/nav-route/AllProducts';
import PublicLayOut from '@/component/publicLayOut/PublicLayOut';
import React from 'react';

const page = () => {
  return (
    <div>
      <PublicLayOut>
        <div>
          <ServicesHero
            // backgroundImageUrl="/assets/navservice/Gemini_Generated_Image_ixoyq2ixoyq2ixoy.png"
            backgroundImageUrl="/assets/navserivice/products hero/Gemini_Generated_Image_8p3v8i8p3v8i8p3v.png"
            tagline="WELCOME TO BLACK SOLDER"
            headline="Where Agriculture Meets a Healthier Future"
            description="We provide fresh, reliable agro products that support healthier lives and stronger communities."
            href="/services"
          />
          <AllProducts />
          <ContactForm />
        </div>
      </PublicLayOut>
    </div>
  );
};

export default page;
