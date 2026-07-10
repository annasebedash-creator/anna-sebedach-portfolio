import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MobileMenuProvider } from "@/contexts/MobileMenuContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FinlandMentalHealthDashboard from "./pages/projects/FinlandMentalHealthDashboard";
import PsychologyLearningPlatform from "./pages/projects/PsychologyLearningPlatform";
import BiasFallacyLab from "./pages/projects/BiasFallacyLab";
import QualiLab from "./pages/projects/QualiLab";
import SqlDataManagement from "./pages/projects/SqlDataManagement";
import SaunaBookingSystem from "./pages/projects/SaunaBookingSystem";
import IotEcosystem from "./pages/projects/IotEcosystem";
import BlenderPortfolio from "./pages/projects/BlenderPortfolio";
import TeamLeadership from "./pages/projects/TeamLeadership";
import TelegramBotAssistant from "./pages/projects/TelegramBotAssistant";
import PsychologyExtendedEssay from "./pages/projects/PsychologyExtendedEssay";
import WatsonxAssistant from "./pages/projects/WatsonxAssistant";
import FiHealthcareVoiceDemo from "./pages/projects/FiHealthcareVoiceDemo";
import MessukeskusProduction from "./pages/projects/MessukeskusProduction";
import VoiceAIDanceStudio from "./pages/projects/VoiceAIDanceStudio";
import OrderManagementSystem from "./pages/projects/OrderManagementSystem";
import TutorAIAssistant from "./pages/projects/TutorAIAssistant";
import CoventuresAIWorkflow from "./pages/projects/CoventuresAIWorkflow";
import QAEngineeringAIProduct from "./pages/projects/QAEngineeringAIProduct";
import RewardsLedgerTesting from "./pages/projects/RewardsLedgerTesting";

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
          <Route path="/projects/coventures-ai-workflow" element={<CoventuresAIWorkflow />} />
          <Route path="/projects/tutor-ai-assistant" element={<TutorAIAssistant />} />
          <Route path="/projects/qa-ai-product" element={<QAEngineeringAIProduct />} />
          <Route path="/projects/rewards-ledger-testing" element={<RewardsLedgerTesting />} />
          <Route path="/projects/voice-ai-dance-studio" element={<VoiceAIDanceStudio />} />
          <Route path="/projects/messukeskus-production" element={<MessukeskusProduction />} />
          <Route path="/projects/fi-healthcare-voice-demo" element={<FiHealthcareVoiceDemo />} />
          <Route path="/projects/finland-mental-health-dashboard" element={<FinlandMentalHealthDashboard />} />
          <Route path="/projects/psychology-learning-platform" element={<PsychologyLearningPlatform />} />
          <Route path="/projects/bias-fallacy-lab" element={<BiasFallacyLab />} />
          <Route path="/projects/qualilab" element={<QualiLab />} />
          <Route path="/projects/sql-data-management" element={<SqlDataManagement />} />
          <Route path="/projects/sauna-booking-system" element={<SaunaBookingSystem />} />
          <Route path="/projects/iot-ecosystem" element={<IotEcosystem />} />
          <Route path="/projects/blender-portfolio" element={<BlenderPortfolio />} />
          <Route path="/projects/team-leadership" element={<TeamLeadership />} />
          <Route path="/projects/telegram-bot-assistant" element={<TelegramBotAssistant />} />
          <Route path="/projects/psychology-extended-essay" element={<PsychologyExtendedEssay />} />
          <Route path="/projects/watsonx-assistant" element={<WatsonxAssistant />} />
          <Route path="/projects/order-management-system" element={<OrderManagementSystem />} />
          {/* Redirects from old template-named URLs */}
          <Route path="/projects/ecommerce-analytics" element={<Navigate to="/projects/finland-mental-health-dashboard" replace />} />
          <Route path="/projects/supply-chain-optimization" element={<Navigate to="/projects/psychology-learning-platform" replace />} />
          <Route path="/projects/digital-transformation" element={<Navigate to="/projects/bias-fallacy-lab" replace />} />
          <Route path="/projects/spotify-automation" element={<Navigate to="/projects/telegram-bot-assistant" replace />} />
          <Route path="/projects/customer-relationship" element={<Navigate to="/projects/qualilab" replace />} />
          <Route path="/projects/financial-reporting" element={<Navigate to="/projects/sql-data-management" replace />} />
          <Route path="/projects/process-automation" element={<Navigate to="/projects/sauna-booking-system" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </MobileMenuProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
