import ContactForm from "@/component/contact/ContactForm";
import FAQ from "@/component/faq/FAQ";
import FeatureSection from "@/component/feature/FeatureSection";
import Hero from "@/component/hero/Hero";
import Products from "@/component/product/Products";
// import LogoSection from "@/component/logoSection/LogoSection";
import PublicLayOut from "@/component/publicLayOut/PublicLayOut";
import Service from "@/component/service/Service";
import Solutions from "@/component/solutions/Solutions";
import Solutions2 from "@/component/solutions/Solutions2";

export default function Home() {
  return (
 <div>
   <PublicLayOut>
     <div>
      <Hero/>
      {/* <LogoSection/> */}
   </div>
   <div>
    <Solutions/>
   </div>
   <div>
    {/* <Service/> */}
     <Products/>
   </div>
    <Solutions2/>
   <div>
    {/* <FeatureSection/> */}
   </div>
    <Service/>
    {/* <Products/> */}
    <ContactForm/>
    {/* <FAQ/> */}
  </PublicLayOut>
 </div>
  );
}
