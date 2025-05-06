
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-blue-dark/80 backdrop-blur-lg py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-light to-highlight flex items-center justify-center">
            <span className="text-white font-bold">P</span>
          </div>
          <span className="font-bold text-lg text-gradient">PropAI</span>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="text-sm text-white/80 hover:text-white">Features</a>
          <a href="#workflow" className="text-sm text-white/80 hover:text-white">How It Works</a>
          <a href="#demo" className="text-sm text-white/80 hover:text-white">Demo</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
        </div>
        
        <Button className="bg-gradient-to-r from-blue to-highlight hover:opacity-90 text-white">
          Book a Demo
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
