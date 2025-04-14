
import React from "react";
import HealthMetricsCard from "@/components/dashboard/HealthMetricsCard";
import MealPlanCard from "@/components/dashboard/MealPlanCard";
import GutHealthCard from "@/components/dashboard/GutHealthCard";
import AchievementsCard from "@/components/dashboard/AchievementsCard";
import ChatbotCard from "@/components/dashboard/ChatbotCard";

const Dashboard = () => {
  return (
    <div className="animate-slide-up">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Welcome back, Jane!</h1>
        <p className="text-muted-foreground">
          Your personalized nutrition journey continues
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <HealthMetricsCard />
          
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <GutHealthCard />
            <AchievementsCard />
          </div>
        </div>

        <div className="space-y-6">
          <MealPlanCard />
          <div className="hidden lg:block">
            <ChatbotCard />
          </div>
        </div>
      </div>
      
      <div className="mt-6 lg:hidden">
        <ChatbotCard />
      </div>
    </div>
  );
};

export default Dashboard;
