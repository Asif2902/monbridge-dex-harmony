
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  ChevronRight, 
  BookOpen, 
  Rocket, 
  LayoutDashboard, 
  ShieldCheck, 
  Coins, 
  Code, 
  Sparkles,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";

type NavItem = {
  title: string;
  link: string;
  icon?: React.ReactNode;
  children?: NavItem[];
};

export const DocsSidebar = ({ 
  isOpen, 
  onClose, 
  isDarkMode, 
  toggleTheme 
}: { 
  isOpen: boolean; 
  onClose: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems: NavItem[] = [
    {
      title: "1. Overview",
      link: "/docs",
      icon: <BookOpen className="h-4 w-4" />
    },
    {
      title: "2. Getting Started",
      link: "/docs/getting-started",
      icon: <Rocket className="h-4 w-4" />,
      children: [
        { title: "2.1 Prerequisites", link: "/docs/getting-started#prerequisites" },
        { title: "2.2 Connecting a Wallet", link: "/docs/getting-started#connecting-wallet" }
      ]
    },
    {
      title: "3. Core Functionality",
      link: "/docs/core-functionality",
      icon: <LayoutDashboard className="h-4 w-4" />,
      children: [
        { title: "3.1 Token Swaps", link: "/docs/core-functionality#token-swaps" },
        { title: "3.2 Adding Liquidity", link: "/docs/core-functionality#adding-liquidity" },
        { title: "3.3 Removing Liquidity", link: "/docs/core-functionality#removing-liquidity" }
      ]
    },
    {
      title: "4. Fees & Price Impact",
      link: "/docs/fees-price-impact",
      icon: <Coins className="h-4 w-4" />
    },
    {
      title: "5. Security & Best Practices",
      link: "/docs/security",
      icon: <ShieldCheck className="h-4 w-4" />
    },
    {
      title: "6. Technical Specifications",
      link: "/docs/technical-specifications",
      icon: <Code className="h-4 w-4" />
    },
    {
      title: "7. Tokenomics",
      link: "/docs/tokenomics",
      icon: <Sparkles className="h-4 w-4" />
    }
  ];

  const isActive = (path: string) => {
    if (path.includes('#')) {
      // For anchor links, check if the base path matches
      const basePath = path.split('#')[0];
      return location.pathname === basePath;
    }
    return location.pathname === path;
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) {
      onClose();
    }
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent
          side="left"
          className={cn(
            "w-[85%] max-w-[320px] p-0 pt-0",
            isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white"
          )}
        >
          <div className="flex flex-col h-full">
            <div className="h-16 flex items-center px-4 justify-between">
              <div className="text-lg font-semibold">Contents</div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <Separator className={cn(isDarkMode ? "bg-slate-800" : "bg-slate-200")} />
            <ScrollArea className="flex-1 px-3 py-4">
              <div className="space-y-1 pb-4">
                {navItems.map((item, index) => (
                  <div key={index} className="mb-2">
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start font-medium text-sm",
                        isActive(item.link) 
                          ? isDarkMode
                            ? "bg-monbridge-900/20 text-monbridge-300 hover:bg-monbridge-900/30"
                            : "bg-monbridge-50 text-monbridge-800 hover:bg-monbridge-100"
                          : isDarkMode
                            ? "text-slate-300 hover:bg-slate-800/70"
                            : "text-slate-700 hover:bg-slate-100"
                      )}
                      onClick={() => handleNavigation(item.link)}
                    >
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.title}
                    </Button>
                    
                    {item.children && item.children.length > 0 && (
                      <div className="ml-5 mt-1 space-y-1">
                        {item.children.map((child, childIndex) => (
                          <Button
                            key={childIndex}
                            variant="ghost"
                            className={cn(
                              "w-full justify-start font-normal text-sm pl-6",
                              isDarkMode
                                ? "text-slate-400 hover:text-monbridge-300 hover:bg-slate-800/50"
                                : "text-slate-600 hover:text-monbridge-800 hover:bg-slate-50", 
                              isActive(child.link) && (isDarkMode
                                ? "text-monbridge-300"
                                : "text-monbridge-800")
                            )}
                            onClick={() => handleNavigation(child.link)}
                          >
                            {child.title}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className={cn(
              "p-4 border-t", 
              isDarkMode ? "border-slate-800" : "border-slate-200"
            )}>
              <div className="flex items-center justify-between mb-2">
                <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
              </div>
              <div className="flex items-center justify-between">
                <div className={cn(
                  "text-xs",
                  isDarkMode ? "text-slate-500" : "text-slate-500"
                )}>Version 1.0</div>
                <div className={cn(
                  "text-xs",
                  isDarkMode ? "text-slate-500" : "text-slate-500"
                )}>Last updated: March 2025</div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div 
      className={cn(
        "fixed inset-y-0 left-0 z-40 w-72 border-r md:translate-x-0",
        isDarkMode 
          ? "bg-slate-900 border-slate-800 text-slate-200" 
          : "bg-white border-slate-200 text-slate-900",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="h-16 md:h-16 flex items-center px-6 justify-between">
          <div className="text-lg font-semibold">Contents</div>
        </div>
        <Separator className={cn(isDarkMode ? "bg-slate-800" : "bg-slate-200")} />
        <ScrollArea className="flex-1 px-3 py-4">
          <div className="space-y-1 pb-4">
            {navItems.map((item, index) => (
              <div key={index} className="mb-2">
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start font-medium text-sm",
                    isActive(item.link) 
                      ? isDarkMode
                        ? "bg-monbridge-900/20 text-monbridge-300 hover:bg-monbridge-900/30"
                        : "bg-monbridge-50 text-monbridge-800 hover:bg-monbridge-100"
                      : isDarkMode
                        ? "text-slate-300 hover:bg-slate-800/70"
                        : "text-slate-700 hover:bg-slate-100"
                  )}
                  onClick={() => handleNavigation(item.link)}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.title}
                </Button>
                
                {item.children && item.children.length > 0 && (
                  <div className="ml-5 mt-1 space-y-1">
                    {item.children.map((child, childIndex) => (
                      <Button
                        key={childIndex}
                        variant="ghost"
                        className={cn(
                          "w-full justify-start font-normal text-sm pl-6",
                          isDarkMode
                            ? "text-slate-400 hover:text-monbridge-300 hover:bg-slate-800/50"
                            : "text-slate-600 hover:text-monbridge-800 hover:bg-slate-50", 
                          isActive(child.link) && (isDarkMode
                            ? "text-monbridge-300"
                            : "text-monbridge-800")
                        )}
                        onClick={() => handleNavigation(child.link)}
                      >
                        {child.title}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className={cn(
          "p-4 border-t", 
          isDarkMode ? "border-slate-800" : "border-slate-200"
        )}>
          <div className="flex items-center justify-between mb-2">
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>
          <div className="flex items-center justify-between">
            <div className={cn(
              "text-xs",
              isDarkMode ? "text-slate-500" : "text-slate-500"
            )}>Version 1.0</div>
            <div className={cn(
              "text-xs",
              isDarkMode ? "text-slate-500" : "text-slate-500"
            )}>Last updated: March 2025</div>
          </div>
        </div>
      </div>
    </div>
  );
};
