
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Page = {
  title: string;
  path: string;
};

const pages: Page[] = [
  { title: "Overview", path: "/docs" },
  { title: "Getting Started", path: "/docs/getting-started" },
  { title: "Core Functionality", path: "/docs/core-functionality" },
  { title: "Fees & Price Impact", path: "/docs/fees-price-impact" },
  { title: "Security & Best Practices", path: "/docs/security" },
  { title: "Technical Specifications", path: "/docs/technical-specifications" },
  { title: "Tokenomics", path: "/docs/tokenomics" },
];

export const DocsPagination = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [prev, setPrev] = useState<Page | null>(null);
  const [next, setNext] = useState<Page | null>(null);

  useEffect(() => {
    const currentIndex = pages.findIndex(page => page.path === location.pathname);
    
    if (currentIndex > 0) {
      setPrev(pages[currentIndex - 1]);
    } else {
      setPrev(null);
    }
    
    if (currentIndex < pages.length - 1) {
      setNext(pages[currentIndex + 1]);
    } else {
      setNext(null);
    }
  }, [location.pathname]);

  return (
    <div className="border-t border-slate-200 mt-16 pt-8 flex justify-between items-center">
      {prev ? (
        <Button 
          variant="outline" 
          className="flex items-center space-x-2 text-slate-700 hover:text-monbridge-700 hover:border-monbridge-200"
          onClick={() => navigate(prev.path)}
        >
          <ArrowLeft className="h-4 w-4" />
          <div className="flex flex-col items-start">
            <span className="text-xs text-slate-500">Previous</span>
            <span className="text-sm font-medium">{prev.title}</span>
          </div>
        </Button>
      ) : (
        <div></div>
      )}
      
      {next && (
        <Button 
          variant="outline"
          className="flex items-center space-x-2 text-slate-700 hover:text-monbridge-700 hover:border-monbridge-200"
          onClick={() => navigate(next.path)}
        >
          <div className="flex flex-col items-end">
            <span className="text-xs text-slate-500">Next</span>
            <span className="text-sm font-medium">{next.title}</span>
          </div>
          <ArrowRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};
