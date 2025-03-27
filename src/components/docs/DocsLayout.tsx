
import { useState, useEffect } from "react";
import { DocsHeader } from "./DocsHeader";
import { DocsSidebar } from "./DocsSidebar";
import { cn } from "@/lib/utils";

export const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Initialize dark mode based on user preference or localStorage
  useEffect(() => {
    // Check localStorage first
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    } else {
      // Check user preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
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
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [location.pathname]);

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
      
      <div className="flex flex-1 pt-16 md:pt-20">
        <DocsSidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
        
        <div 
          className={cn(
            "flex-1 transition-all duration-300 md:pl-72"
          )}
        >
          <main className={cn(
            "container max-w-4xl py-8 md:py-12 px-4 md:px-8",
            isDarkMode ? "prose-invert" : "prose"
          )}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};
