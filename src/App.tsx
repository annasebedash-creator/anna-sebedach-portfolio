import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MobileMenuProvider } from "@/contexts/MobileMenuContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EcommerceAnalytics from "./pages/projects/EcommerceAnalytics";
import SupplyChainOptimization from "./pages/projects/SupplyChainOptimization";
import DigitalTransformation from "./pages/projects/DigitalTransformation";
import CustomerRelationship from "./pages/projects/CustomerRelationship";
import FinancialReporting from "./pages/projects/FinancialReporting";
import ProcessAutomation from "./pages/projects/ProcessAutomation";
import IotEcosystem from "./pages/projects/IotEcosystem";
import BlenderPortfolio from "./pages/projects/BlenderPortfolio";
import TeamLeadership from "./pages/projects/TeamLeadership";
import SpotifyAutomation from "./pages/projects/SpotifyAutomation";
import PsychologyExtendedEssay from "./pages/projects/PsychologyExtendedEssay";
import WatsonxAssistant from "./pages/projects/WatsonxAssistant";
import FiHealthcareVoiceDemo from "./pages/projects/FiHealthcareVoiceDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MobileMenuProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/fi-healthcare-voice-demo" element={<FiHealthcareVoiceDemo />} />
          <Route path="/projects/ecommerce-analytics" element={<EcommerceAnalytics />} />
          <Route path="/projects/supply-chain-optimization" element={<SupplyChainOptimization />} />
          <Route path="/projects/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/projects/customer-relationship" element={<CustomerRelationship />} />
          <Route path="/projects/financial-reporting" element={<FinancialReporting />} />
          <Route path="/projects/process-automation" element={<ProcessAutomation />} />
          <Route path="/projects/iot-ecosystem" element={<IotEcosystem />} />
          <Route path="/projects/blender-portfolio" element={<BlenderPortfolio />} />
          <Route path="/projects/team-leadership" element={<TeamLeadership />} />
          <Route path="/projects/spotify-automation" element={<SpotifyAutomation />} />
          <Route path="/projects/psychology-extended-essay" element={<PsychologyExtendedEssay />} />
          <Route path="/projects/watsonx-assistant" element={<WatsonxAssistant />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </MobileMenuProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
