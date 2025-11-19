import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudyStudio from "./pages/StudyStudio";
import ProductivityStudio from "./pages/ProductivityStudio";
import CreativityStudio from "./pages/CreativityStudio";
import KnowledgeVault from "./pages/KnowledgeVault";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/study-studio" element={<StudyStudio />} />
          <Route path="/productivity-studio" element={<ProductivityStudio />} />
          <Route path="/creativity-studio" element={<CreativityStudio />} />
          <Route path="/knowledge-vault" element={<KnowledgeVault />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
