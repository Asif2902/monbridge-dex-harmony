
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { DocsHeader } from "./DocsHeader";
import { DocsSidebar } from "./DocsSidebar";
import { cn } from "@/lib/utils";

export const DocsLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Close sidebar on route change on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <DocsHeader onToggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1 pt-16 md:pt-20">
        <DocsSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <div 
          className={cn(
            "flex-1 transition-all duration-300 md:pl-72"
          )}
        >
          <main className="container max-w-4xl py-8 md:py-12 px-4 md:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
