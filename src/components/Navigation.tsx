import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              JK
            </div>
            <span className="font-bold text-gray-900">Jasmeet Kaur</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="sm" 
              className="bg-blue-600 hover:bg-blue-700"
            >
              Contact
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t space-y-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              Projects
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="sm" 
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
