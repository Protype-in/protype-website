import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import TechStackSection from "@/components/sections/TechStackSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="home" className="site-shell">
      <Navbar />
      <HeroSection />
      {/* <TrustedBySection /> */}
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      {/* <ProductsSection /> */}
      <HowWeWorkSection />
      {/* <TechStackSection /> */}
      {/* <PricingSection /> */}
      {/* <CaseStudiesSection /> */}
      {/* <PricingSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <FAQSection /> */}
      <CTASection />
      <Footer />
    </main>
  );
}
