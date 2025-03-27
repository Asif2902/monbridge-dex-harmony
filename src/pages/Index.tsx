
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-monbridge-700 to-monbridge-600 py-6 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              MonBridge DEX
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
              The secure, efficient, and user-friendly decentralized exchange for the MON ecosystem
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-white text-monbridge-700 hover:bg-white/90"
                onClick={() => navigate('/docs')}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                View Documentation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
                onClick={() => window.open('https://monbridgedex.xyz', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Launch App
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Easy to Use</h2>
              <p className="text-slate-600 dark:text-slate-300">
                Designed with simplicity in mind, allowing anyone to swap tokens without complex interfaces.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Secure Transactions</h2>
              <p className="text-slate-600 dark:text-slate-300">
                Built with security as a priority, ensuring your assets remain safe during all operations.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Low Fees</h2>
              <p className="text-slate-600 dark:text-slate-300">
                Competitive fee structure designed to maximize value for traders and liquidity providers.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white">
              Ready to start trading?
            </h2>
            <Button 
              size="lg"
              className="bg-monbridge-600 hover:bg-monbridge-700 text-white"
              onClick={() => window.open('https://monbridgedex.xyz', '_blank')}
            >
              Launch MonBridge DEX
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="bg-slate-100 dark:bg-slate-900 py-8 px-4 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-600 dark:text-slate-400">
                © 2025 MonBridge DEX. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-monbridge-600 dark:hover:text-monbridge-400">
                Terms
              </a>
              <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-monbridge-600 dark:hover:text-monbridge-400">
                Privacy
              </a>
              <a href="https://x.com/MONBRIDGEDEX" className="text-slate-600 dark:text-slate-400 hover:text-monbridge-600 dark:hover:text-monbridge-400">
                X
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
