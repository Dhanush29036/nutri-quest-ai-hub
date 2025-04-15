
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
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // For demo purposes - in a real app, this would be managed by an auth system
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem("isAuthenticated") === "true"
  );

  // Function to handle login
  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    setIsAuthenticated(false);
  };

  // Check localStorage on initial load
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    } else if (authStatus === null) {
      // First time visiting the site, set default to not authenticated
      localStorage.setItem("isAuthenticated", "false");
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Auth route */}
            <Route 
              path="/auth" 
              element={
                isAuthenticated ? 
                <Navigate to="/" /> : 
                <Auth onLogin={handleLogin} />
              } 
            />
            
            {/* Protected routes */}
            <Route 
              path="/" 
              element={
                isAuthenticated ? 
                <AppLayout onLogout={handleLogout}><Dashboard /></AppLayout> : 
                <Navigate to="/auth" />
              } 
            />
            <Route 
              path="/microbiome" 
              element={
                isAuthenticated ? 
                <AppLayout onLogout={handleLogout}><Microbiome /></AppLayout> : 
                <Navigate to="/auth" />
              } 
            />
            <Route 
              path="/meal-planner" 
              element={
                isAuthenticated ? 
                <AppLayout onLogout={handleLogout}><MealPlanner /></AppLayout> : 
                <Navigate to="/auth" />
              } 
            />
            <Route 
              path="/health-metrics" 
              element={
                isAuthenticated ? 
                <AppLayout onLogout={handleLogout}><HealthMetrics /></AppLayout> : 
                <Navigate to="/auth" />
              } 
            />
            <Route 
              path="/challenges" 
              element={
                isAuthenticated ? 
                <AppLayout onLogout={handleLogout}><Challenges /></AppLayout> : 
                <Navigate to="/auth" />
              } 
            />
            <Route 
              path="/chat" 
              element={
                isAuthenticated ? 
                <AppLayout onLogout={handleLogout}><ChatPage /></AppLayout> : 
                <Navigate to="/auth" />
              } 
            />
            <Route 
              path="/profile" 
              element={
                isAuthenticated ? 
                <AppLayout onLogout={handleLogout}><Profile /></AppLayout> : 
                <Navigate to="/auth" />
              } 
            />
            <Route 
              path="/settings" 
              element={
                isAuthenticated ? 
                <AppLayout onLogout={handleLogout}><Settings /></AppLayout> : 
                <Navigate to="/auth" />
              } 
            />
            <Route 
              path="/settings/:tab" 
              element={
                isAuthenticated ? 
                <AppLayout onLogout={handleLogout}><Settings /></AppLayout> : 
                <Navigate to="/auth" />
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
