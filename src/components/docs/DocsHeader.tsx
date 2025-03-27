
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export const DocsHeader = ({ 
  onToggleSidebar,
  isDarkMode,
  toggleTheme
}: { 
  onToggleSidebar: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
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
        isScrolled 
          ? isDarkMode 
            ? "bg-slate-900/95 shadow-sm border-b border-slate-800" 
            : "bg-white/95 shadow-sm border-b border-slate-100" 
          : "bg-transparent"
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
              <Menu className={cn("h-5 w-5", isDarkMode ? "text-white" : "text-slate-700")} />
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
                isActive('/docs') 
                  ? isDarkMode 
                    ? "bg-slate-800 text-monbridge-300" 
                    : "bg-monbridge-50 text-monbridge-800"
                  : isDarkMode ? "text-slate-300" : ""
              )}
              onClick={() => navigate('/docs')}
            >
              Documentation
            </Button>
            <div className="relative group">
              <Button 
                variant="ghost" 
                className={cn("rounded-full text-sm font-medium transition-colors group", 
                  isDarkMode ? "text-slate-300" : ""
                )}
              >
                <span>Resources</span>
                <ChevronDown className="ml-1 h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Button>
              <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left scale-95 group-hover:scale-100">
                <div className={cn("rounded-lg shadow-lg border p-2", 
                  isDarkMode 
                    ? "bg-slate-800 border-slate-700" 
                    : "bg-white border-slate-100"
                )}>
                  <a href="#" className={cn("block px-4 py-2 text-sm rounded-md", 
                    isDarkMode 
                      ? "text-slate-300 hover:bg-slate-700" 
                      : "text-slate-700 hover:bg-monbridge-50"
                  )}>GitHub</a>
                  <a href="#" className={cn("block px-4 py-2 text-sm rounded-md", 
                    isDarkMode 
                      ? "text-slate-300 hover:bg-slate-700" 
                      : "text-slate-700 hover:bg-monbridge-50"
                  )}>Community</a>
                  <a href="https://x.com/MONBRIDGEDEX" className={cn("block px-4 py-2 text-sm rounded-md", 
                    isDarkMode 
                      ? "text-slate-300 hover:bg-slate-700" 
                      : "text-slate-700 hover:bg-monbridge-50"
                  )}>X</a>
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center space-x-2">
            <div className="hidden md:block mr-2">
              <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </div>
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
    </header>
  );
};
