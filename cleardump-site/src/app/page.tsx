import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import WhyCleanBins from "@/components/home/WhyCleanBins";
import PricingSection from "@/components/home/PricingSection";
import BookingSection from "@/components/home/BookingSection";
import FAQSection from "@/components/home/FAQSection";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <WhyCleanBins />
      <PricingSection />
      <BookingSection />
      <FAQSection />
      <CTABanner />
    </>
  );
}
