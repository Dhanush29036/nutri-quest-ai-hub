
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
import { useState, useEffect, createContext } from "react";

const queryClient = new QueryClient();

// User context type
export interface UserContextType {
  user: {
    name: string;
    email: string;
    bio: string;
    phone: string;
    avatar: string;
    coins: number;
    level: number;
    xpProgress: number;
  };
  updateUser: (updates: Partial<UserContextType['user']>) => void;
  completedChallenges: string[];
  addCompletedChallenge: (challengeId: string, coins: number) => void;
}

// Create the context with a default value
export const UserContext = createContext<UserContextType | null>(null);

const App = () => {
  // For demo purposes - in a real app, this would be managed by an auth system
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem("isAuthenticated") === "true"
  );

  // Default user info
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("userInfo");
    return savedUser ? JSON.parse(savedUser) : {
      name: "New User",
      email: "user@example.com",
      bio: "Health enthusiast",
      phone: "+1 (555) 123-4567",
      avatar: "https://i.pravatar.cc/300",
      coins: 0,
      level: 1,
      xpProgress: 0
    };
  });

  // Completed challenges
  const [completedChallenges, setCompletedChallenges] = useState<string[]>(() => {
    const savedChallenges = localStorage.getItem("completedChallenges");
    return savedChallenges ? JSON.parse(savedChallenges) : [];
  });

  // Update user information
  const updateUser = (updates: Partial<typeof user>) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem("userInfo", JSON.stringify(updatedUser));
  };

  // Add completed challenge and award coins
  const addCompletedChallenge = (challengeId: string, coins: number) => {
    if (!completedChallenges.includes(challengeId)) {
      const newCompletedChallenges = [...completedChallenges, challengeId];
      setCompletedChallenges(newCompletedChallenges);
      localStorage.setItem("completedChallenges", JSON.stringify(newCompletedChallenges));
      
      // Update coins
      updateUser({ coins: user.coins + coins });
    }
  };

  // Function to handle login
  const handleLogin = (userData?: Partial<typeof user>) => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
    
    if (userData) {
      updateUser(userData);
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    setIsAuthenticated(false);
  };

  // Save user context to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(user));
  }, [user]);

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

  // Create user context value
  const userContextValue: UserContextType = {
    user,
    updateUser,
    completedChallenges,
    addCompletedChallenge
  };

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={userContextValue}>
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
      </UserContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
