import Header from "@/components/Section/Common/Header/Header";
import HeroSection from "@/components/Section/Hero/HeroSection";
import DemoSection from "@/components/Section/Demo/DemoSection";
import BenefitsSection from "@/components/Section/Benefits/BenefitsSection";
import FeaturesGridSection from "@/components/Section/Features/FeaturesGridSection";
import ListicleSection from "@/components/Section/Listicle/ListicleSection";
import PricingSection from "@/components/Section/Pricing/PricingSection";
import Footer from "@/components/Section/Common/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <BenefitsSection />
        <FeaturesGridSection />
        <ListicleSection />
        <DemoSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
