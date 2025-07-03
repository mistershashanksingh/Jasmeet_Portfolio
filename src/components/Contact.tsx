import { Button } from "@/components/ui/button";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  useScrollAnimation();

  const handleEmailClick = () => {
    window.location.href = 'mailto:jasmeet08virdi@email.com?subject=Hello%20from%20your%20portfolio&body=Hi%20Jasmeet,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0ABest%20regards';
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/jasmeet-kaur-861486220', '_blank', 'noopener,noreferrer');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/jasmeet0810', '_blank', 'noopener,noreferrer');
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/jasmeet08virdi', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white aurora-bg">
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              I'm always interested in discussing data analytics opportunities, 
              collaborating on projects, or sharing insights about analytics and AI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4 scroll-animate-left stagger-1">
              <Mail className="h-8 w-8 mx-auto text-blue-200" />
              <h3 className="text-lg font-semibold">Email Me</h3>
              <p className="text-blue-100 text-sm">jasmeet08virdi@email.com</p>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900 transition-colors"
                onClick={handleEmailClick}
              >
                Send Email
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4 scroll-animate-right stagger-2">
              <Twitter className="h-8 w-8 mx-auto text-purple-200" />
              <h3 className="text-lg font-semibold">Follow Me</h3>
              <p className="text-purple-100 text-sm">@jasmeet08virdi</p>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-900 transition-colors"
                onClick={handleTwitterClick}
              >
                Follow on Twitter
              </Button>
            </div>
          </div>
          
          <div className="pt-8 scroll-animate stagger-3">
            <h3 className="text-lg font-semibold mb-4">Professional Profiles</h3>
            <div className="flex justify-center space-x-6">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/20 transition-colors"
                onClick={handleLinkedInClick}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/20 transition-colors"
                onClick={handleGitHubClick}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/20 scroll-animate stagger-4">
            <p className="text-blue-200 text-sm">
              © 2025 Jasmeet Kaur. Available for exciting data analytics opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;