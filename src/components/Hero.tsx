import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  useScrollAnimation();

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center aurora-bg px-6 relative">
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 scroll-animate">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            JK
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Jasmeet Kaur
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            Data Analytics & AI Specialist
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Masters in Data Analytics| Passionate about transforming data into actionable insights 
            and building intelligent solutions for complex problems
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center scroll-animate stagger-2">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" onClick={() => scrollToSection('contact')}>
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8" onClick={() => scrollToSection('projects')} >
            <ExternalLink className="mr-2 h-5 w-5" />
            View Projects
          </Button>
        </div>
        
        <div className="flex justify-center space-x-8 pt-8 scroll-animate stagger-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">15+</div>
            <div className="text-sm text-gray-500">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">5+</div>
            <div className="text-sm text-gray-500">Programming Languages</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">Masters</div>
            <div className="text-sm text-gray-500">Degree</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
