
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Microbiome from "./pages/Microbiome";
import MealPlanner from "./pages/MealPlanner";
import ChatPage from "./pages/ChatPage";
import HealthMetrics from "./pages/HealthMetrics";
import Challenges from "./pages/Challenges";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // For demo purposes - in a real app, this would be managed by an auth system
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Auth route */}
            <Route path="/auth" element={isAuthenticated ? <Navigate to="/" /> : <Auth />} />
            
            {/* Protected routes */}
            <Route path="/" element={<AppLayout><Dashboard /></AppLayout>} />
            <Route path="/microbiome" element={<AppLayout><Microbiome /></AppLayout>} />
            <Route path="/meal-planner" element={<AppLayout><MealPlanner /></AppLayout>} />
            <Route path="/health-metrics" element={<AppLayout><HealthMetrics /></AppLayout>} />
            <Route path="/challenges" element={<AppLayout><Challenges /></AppLayout>} />
            <Route path="/chat" element={<AppLayout><ChatPage /></AppLayout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
