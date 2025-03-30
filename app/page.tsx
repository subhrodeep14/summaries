import DemoSection from "@/components/hero/DemoSection";
import HeroSection from "@/components/hero/HeroSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative ">
      <HeroSection/>
      <DemoSection/>
    </div>
  );
}
