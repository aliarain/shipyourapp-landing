import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-accent-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold text-foreground">
            ShipYourApp
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link 
              href="#benefits" 
              className="text-gray-400 hover:text-foreground transition-colors"
            >
              Benefits
            </Link>
            <Link 
              href="#pricing" 
              className="text-gray-400 hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="#about"
              className="text-gray-400 hover:text-foreground transition-colors"
            >
              About
            </Link>
          </nav>

          <div className="text-sm text-gray-400">
            © 2024 ShipYourApp. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 