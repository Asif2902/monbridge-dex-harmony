
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  ChevronRight, 
  BookOpen, 
  Rocket, 
  LayoutDashboard, 
  ShieldCheck, 
  Coins, 
  Code, 
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  link: string;
  icon?: React.ReactNode;
  children?: NavItem[];
};

export const DocsSidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

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
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <div 
      className={cn(
        "fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="h-16 md:h-20 flex items-center px-6 justify-between">
          <div className="text-lg font-semibold">Contents</div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={onClose}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        <Separator />
        <ScrollArea className="flex-1 px-3 py-4">
          <div className="space-y-1 pb-4">
            {navItems.map((item, index) => (
              <div key={index} className="mb-2">
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start font-medium text-sm",
                    isActive(item.link) && "bg-monbridge-50 text-monbridge-800"
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
                          "w-full justify-start font-normal text-sm text-slate-600 hover:text-monbridge-800 pl-6",
                          isActive(child.link) && "text-monbridge-800"
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
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500">Version 1.0</div>
            <div className="text-xs text-slate-500">Last updated: 25 March 2025</div>
          </div>
        </div>
      </div>
    </div>
  );
};
