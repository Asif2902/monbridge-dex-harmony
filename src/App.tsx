
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import DocsIndex from "./pages/DocsIndex";
import Docs from "./pages/Docs";
import DocGettingStarted from "./pages/DocGettingStarted";
import DocCoreFunctionality from "./pages/DocCoreFunctionality";
import DocFeesPriceImpact from "./pages/DocFeesPriceImpact";
import DocSecurity from "./pages/DocSecurity";
import DocTechnicalSpecifications from "./pages/DocTechnicalSpecifications";
import DocTokenomics from "./pages/DocTokenomics";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

const App = () => {
  // Create a new QueryClient instance inside the component
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Documentation Routes */}
            <Route path="/docs" element={<DocsIndex />}>
              <Route index element={<Docs />} />
              <Route path="getting-started" element={<DocGettingStarted />} />
              <Route path="core-functionality" element={<DocCoreFunctionality />} />
              <Route path="fees-price-impact" element={<DocFeesPriceImpact />} />
              <Route path="security" element={<DocSecurity />} />
              <Route path="technical-specifications" element={<DocTechnicalSpecifications />} />
              <Route path="tokenomics" element={<DocTokenomics />} />
            </Route>
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
