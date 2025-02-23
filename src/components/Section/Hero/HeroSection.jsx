import Image from "next/image";
import { FaBolt } from "react-icons/fa6";
import { InteractiveButton } from "@/components/ui/interactive-button";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { IconCloud } from "@/components/ui/icon-cloud";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiPrisma, SiSupabase, SiMongodb } from "react-icons/si";

const HeroSection = () => {
  const techIcons = [
    <SiJavascript key="js" />,
    <SiTypescript key="ts" />,
    <SiReact key="react" />,
    <SiNextdotjs key="next" />,
    <SiTailwindcss key="tailwind" />,
    <SiPrisma key="prisma" />,
    <SiSupabase key="supabase" />,
    <SiMongodb key="mongodb" />
  ];

  return (
    <div className="relative min-h-[100vh] flex items-center bg-background overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-60">
        <InteractiveGridPattern 
          width={12} 
          height={12} 
          squares={[370, 240]} 
          className="absolute inset-0"
        />
      </div> */}

      <div className="container mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            {/* <div className="inline-block bg-accent-background rounded-full px-4 py-2 text-sm">
              <span className="text-primary">Product of the day</span>
              <span className="ml-2 text-gray-400">2nd</span>
            </div> */}
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
              Ship your startup
              <br />
              in days,{" "}
              <span className="highlight-text bg-white">not weeks</span>
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
          
          {/* Right side - Icon Cloud */}
          <div className="relative h-[400px] flex items-center justify-center">
            <IconCloud 
              icons={techIcons}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 