
import { useState, useEffect } from "react";
import { DocsHeader } from "./DocsHeader";
import { DocsSidebar } from "./DocsSidebar";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isMobile = useIsMobile();
  
  // Initialize dark mode based on user preference or localStorage
  useEffect(() => {
    // Check localStorage first
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    } else {
      // Default to light mode instead of checking user preference
      setIsDarkMode(false);
    }
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save preference to localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);
  
  // Close sidebar on route change on mobile
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [location.pathname, isMobile]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={cn(
      "min-h-screen flex flex-col",
      isDarkMode 
        ? "bg-slate-950 text-slate-200" 
        : "bg-slate-50 text-slate-900"
    )}>
      <DocsHeader 
        onToggleSidebar={toggleSidebar} 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
      />
      
      <div className="flex flex-1 pt-16">
        <DocsSidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
        
        <div 
          className={cn(
            "flex-1 transition-all duration-300",
            !isMobile && "md:pl-72"
          )}
        >
          <main className={cn(
            "container max-w-4xl py-6 md:py-12 px-4 md:px-8",
            isDarkMode ? "prose-invert" : "prose"
          )}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};
