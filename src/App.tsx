import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EcommerceAnalytics from "./pages/projects/EcommerceAnalytics";
import SupplyChainOptimization from "./pages/projects/SupplyChainOptimization";
import DigitalTransformation from "./pages/projects/DigitalTransformation";
import CustomerRelationship from "./pages/projects/CustomerRelationship";
import FinancialReporting from "./pages/projects/FinancialReporting";
import ProcessAutomation from "./pages/projects/ProcessAutomation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/ecommerce-analytics" element={<EcommerceAnalytics />} />
          <Route path="/projects/supply-chain-optimization" element={<SupplyChainOptimization />} />
          <Route path="/projects/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/projects/customer-relationship" element={<CustomerRelationship />} />
          <Route path="/projects/financial-reporting" element={<FinancialReporting />} />
          <Route path="/projects/process-automation" element={<ProcessAutomation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
