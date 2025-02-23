import Image from "next/image";
import { FaBolt } from "react-icons/fa6";
import { InteractiveButton } from "@/components/ui/interactive-button";

const HeroSection = () => {
  return (
    <div className="min-h-[80vh] flex items-center bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-accent-background rounded-full px-4 py-2 text-sm">
              <span className="text-primary">Product of the day</span>
              <span className="ml-2 text-gray-400">2nd</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
              Ship your startup
              <br />
              in days,{" "}
              <span className="highlight-text">not weeks</span>
            </h1>
            
            <p className="text-xl text-gray-400">
              The NextJS boilerplate with all you need to build your SaaS, AI
              tool, or any other web app and make your first $ online fast.
            </p>
            
            <InteractiveButton>
              <FaBolt className="text-xl" />
              Get ShipYourApp
            </InteractiveButton>
            
            <div className="text-sm text-gray-400">
              $100 off for the first 8500 customers (12 left)
            </div>
          </div>
          
          <div className="relative hidden md:block">
            {/* You can add your hero image here */}
            <div className="aspect-square rounded-2xl bg-accent-background"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 