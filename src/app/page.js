import Banner from "@/components/Home/Banner/Banner";
import JourneyCTASection from "@/components/Home/CTA/CTA";
import Featured from "@/components/Home/Featured/Featured";
import TestimonialsSection from "@/components/Home/Review/Review";
import WhyChooseWanderlust from "@/components/Home/Why/Why";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Featured />
      <WhyChooseWanderlust />
      <TestimonialsSection />
      <JourneyCTASection />
    </div>
  );
}
