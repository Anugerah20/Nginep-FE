import Navigation from "@/app/_components/navbar/navigation";
import Hero from "@/app/_components/hero";
import CitiesSection from "@/app/_components/feature/cities/components/section/CitiesSections";
import BenefitSections from "@/app/_components/BenefitSections";
import FreshHotelSections from "@/app/_components/feature/cities/components/hotels/sections/FreshHotelSections";
import Footer from "@/app/_components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <CitiesSection />
      <BenefitSections />
      <FreshHotelSections />
      <Footer />
    </>
  );
}
