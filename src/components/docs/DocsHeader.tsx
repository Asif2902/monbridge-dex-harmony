
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const DocsHeader = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled ? "bg-white/90 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="doc-container">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={onToggleSidebar}
            >
              <Menu className="h-5 w-5 text-slate-700" />
            </Button>
            <div 
              className="text-xl font-medium flex items-center cursor-pointer"
              onClick={() => navigate('/')}
            >
              <span className="bg-gradient-to-r from-monbridge-600 to-monbridge-500 bg-clip-text text-transparent">
                Mon Bridge Dex
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            <Button 
              variant="ghost" 
              className={cn(
                "rounded-full text-sm font-medium transition-colors",
                isActive('/docs') && "bg-monbridge-50 text-monbridge-800"
              )}
              onClick={() => navigate('/docs')}
            >
              Documentation
            </Button>
            <div className="relative group">
              <Button 
                variant="ghost" 
                className="rounded-full text-sm font-medium transition-colors group"
              >
                <span>Resources</span>
                <ChevronDown className="ml-1 h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Button>
              <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left scale-95 group-hover:scale-100">
                <div className="bg-white rounded-lg shadow-lg border border-slate-100 p-2">
                  <a href="#" className="block px-4 py-2 text-sm text-slate-700 rounded-md hover:bg-monbridge-50">GitHub</a>
                  <a href="#" className="block px-4 py-2 text-sm text-slate-700 rounded-md hover:bg-monbridge-50">Community</a>
                  <a href="https://x.com/MONBRIDGEDEX" className="block px-4 py-2 text-sm text-slate-700 rounded-md hover:bg-monbridge-50">X</a>
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5 text-slate-700" />
            </Button>
            <Button 
              variant="default" 
              className="rounded-full bg-monbridge-600 hover:bg-monbridge-700 text-white"
              onClick={() => window.open('https://monbridgedex.xyz', '_blank')}
            >
              Launch App
            </Button>
          </div>
        </div>
      </div>
      
      {isSearchOpen && (
        <div className="absolute inset-0 bg-white/95 z-50 animate-fade-in">
          <div className="container h-full flex flex-col items-center justify-center max-w-2xl py-20">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 rounded-full"
              onClick={() => setIsSearchOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
            <div className="w-full">
              <div className="relative w-full">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-monbridge-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-monbridge-400 transition-all"
                  autoFocus
                />
              </div>
              <div className="mt-8 text-center text-slate-500">
                No recent searches
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
