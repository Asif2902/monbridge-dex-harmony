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
import DocRoadmap from "./pages/DocRoadmap";           // Add this line
import DocDeepLinking from "./pages/DocDeepLinking";   // Add this line
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          
          {/* Documentation Routes */}
          <Route path="/docs" element={<DocsIndex />}>
            <Route index element={<Docs />} />
            <Route path="getting-started" element={<DocGettingStarted />} />
            <Route path="core-functionality" element={<DocCoreFunctionality />} />
            <Route path="fees-price-impact" element={<DocFeesPriceImpact />} />
            <Route path="security" element={<DocSecurity />} />
            <Route path="technical-specifications" element={<DocTechnicalSpecifications />} />
            <Route path="tokenomics" element={<DocTokenomics />} />
            <Route path="roadmap" element={<DocRoadmap />} />                 // Add this line
            <Route path="deep-linking" element={<DocDeepLinking />} />        // Add this line
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;