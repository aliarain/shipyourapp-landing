import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-bold text-foreground">
            ShipYourApp
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link 
              href="#demo" 
              className="text-gray-400 hover:text-foreground transition-colors"
            >
              Demo
            </Link>
            <Link 
              href="#pricing" 
              className="text-gray-400 hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="https://aliarain.com/about"
              className="text-gray-400 hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 