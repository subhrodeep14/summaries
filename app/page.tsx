import DemoSection from "@/components/hero/DemoSection";
import HeroSection from "@/components/hero/HeroSection";
import HowItWorks from "@/components/hero/HowItWorks";
import PricePage from "@/components/hero/PricePage";


import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative flex flex-col ">
      <HeroSection/>
      <DemoSection/>
      <HowItWorks/>
      <PricePage/>
    </div>
  );
}
