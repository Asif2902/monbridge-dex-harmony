
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="relative z-10 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-xl font-medium">
                <span className="bg-gradient-to-r from-monbridge-600 to-monbridge-500 bg-clip-text text-transparent">
                  Mon Bridge Dex
                </span>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-1">
              <Button 
                variant="ghost" 
                className="rounded-full text-sm font-medium"
                onClick={() => navigate('/docs')}
              >
                Documentation
              </Button>
              <Button 
                variant="ghost" 
                className="rounded-full text-sm font-medium"
              >
                Community
              </Button>
              <Button 
                variant="ghost" 
                className="rounded-full text-sm font-medium"
              >
                About
              </Button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="default" 
                className="rounded-full bg-monbridge-600 hover:bg-monbridge-700"
                onClick={() => navigate('/docs')}
              >
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 flex-1 flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-monbridge-50 text-monbridge-600 animate-fade-in">
                Version 1.0 Documentation
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                  Mon Bridge Dex
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Comprehensive documentation for the optimized DEX aggregator on the Mon Testnet.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  size="lg"
                  className="rounded-full bg-monbridge-600 hover:bg-monbridge-700 text-white min-w-[180px] h-12"
                  onClick={() => navigate('/docs')}
                >
                  <span>Start Reading</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="rounded-full border-slate-200 hover:bg-slate-50 min-w-[180px] h-12"
                >
                  <span>Launch App</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute -top-40 left-0 right-0 h-96 bg-gradient-to-b from-monbridge-50/30 to-transparent blur-3xl -z-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-monbridge-50/20 rounded-full blur-3xl -z-10"></div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Documentation Highlights</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to know about Mon Bridge Dex in one place.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-monbridge-50 flex items-center justify-center text-monbridge-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7" />
                  <polyline points="16 2 12 6 8 2" />
                  <line x1="12" y1="6" x2="12" y2="17" />
                  <line x1="8" y1="11" x2="16" y2="11" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Core Functionality</h3>
              <p className="text-slate-600 mb-4">
                Detailed guides on token swaps, adding and removing liquidity, and more.
              </p>
              <Button 
                variant="ghost" 
                className="text-monbridge-600 hover:text-monbridge-800 hover:bg-monbridge-50 p-0"
                onClick={() => navigate('/docs/core-functionality')}
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-monbridge-50 flex items-center justify-center text-monbridge-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                  <path d="M12 18V6" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Fees & Price Impact</h3>
              <p className="text-slate-600 mb-4">
                Information on fee structure, price impact, and best practices for minimizing costs.
              </p>
              <Button 
                variant="ghost" 
                className="text-monbridge-600 hover:text-monbridge-800 hover:bg-monbridge-50 p-0"
                onClick={() => navigate('/docs/fees-price-impact')}
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-monbridge-50 flex items-center justify-center text-monbridge-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                  <path d="M12 22V2" />
                  <path d="M12 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Tokenomics</h3>
              <p className="text-slate-600 mb-4">
                Comprehensive overview of MDB token, distribution, utility, and vesting schedule.
              </p>
              <Button 
                variant="ghost" 
                className="text-monbridge-600 hover:text-monbridge-800 hover:bg-monbridge-50 p-0"
                onClick={() => navigate('/docs/tokenomics')}
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-monbridge-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to dive in?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Explore our comprehensive documentation and start using Mon Bridge Dex today.
            </p>
            <Button 
              size="lg"
              className="rounded-full bg-monbridge-600 hover:bg-monbridge-700 text-white min-w-[200px] h-12"
              onClick={() => navigate('/docs')}
            >
              <span>Read Documentation</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 md:py-12 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-lg font-medium">
                <span className="bg-gradient-to-r from-monbridge-600 to-monbridge-500 bg-clip-text text-transparent">
                  Mon Bridge Dex
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-slate-500">
              <a href="#" className="hover:text-monbridge-600 transition-colors">Twitter</a>
              <a href="#" className="hover:text-monbridge-600 transition-colors">Github</a>
              <a href="#" className="hover:text-monbridge-600 transition-colors">Discord</a>
              <a href="#" className="hover:text-monbridge-600 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-100 text-center text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Mon Bridge Dex. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
