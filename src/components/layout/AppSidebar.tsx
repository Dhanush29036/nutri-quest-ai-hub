import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, PieChart, Utensils, Heart, MessageCircle, Trophy, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

interface AppSidebarProps {
  onLogout?: () => void;
}

const AppSidebar = ({ onLogout }: AppSidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const coins = 245;
  const level = 12;
  const xpProgress = 65;

  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      path: "/",
    },
    {
      title: "Gut Microbiome",
      icon: PieChart,
      path: "/microbiome",
    },
    {
      title: "Meal Planner",
      icon: Utensils,
      path: "/meal-planner",
      badge: "New",
    },
    {
      title: "Health Metrics",
      icon: Heart,
      path: "/health-metrics",
    },
    {
      title: "Challenges",
      icon: Trophy,
      path: "/challenges",
    },
    {
      title: "AI Chat",
      icon: MessageCircle,
      path: "/chat",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    
    if (onLogout) {
      onLogout();
    }
    
    navigate('/auth');
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-5 flex items-center justify-center border-b border-sidebar-border">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-nq-green-500"></div>
            <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-nq-purple-500"></div>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-nq-green-600 to-nq-purple-600">
            NutriQuest
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-4 pt-6">
        <div className="mb-6 text-center">
          <Avatar className="w-16 h-16 mx-auto mb-2 border-2 border-nq-green-400">
            <AvatarImage src="https://i.pravatar.cc/300" alt="User" />
            <AvatarFallback className="bg-nq-purple-200 text-nq-purple-700">JD</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold">Jane Doe</h3>
          <p className="text-sm text-muted-foreground">Level {level} Explorer</p>
          
          <div className="mt-3">
            <div className="flex justify-between mb-1 text-xs">
              <span>XP Level {level}</span>
              <span>{xpProgress}%</span>
            </div>
            <Progress value={xpProgress} className="h-2 bg-muted" />
          </div>
          
          <div className="mt-3 bg-nq-green-50 p-2 rounded-lg inline-flex items-center">
            <span className="coin mr-1">🪙</span>
            <span className="font-medium">{coins} coins</span>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase font-semibold tracking-wider">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      location.pathname === item.path
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <Link to={item.path} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </div>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-2 bg-nq-purple-500 text-white">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <div className="space-y-4">
          <div className="p-3 bg-muted rounded-lg space-y-2">
            <h4 className="font-medium text-sm flex items-center">
              <Trophy className="w-4 h-4 mr-1 text-nq-green-500" /> 
              Current Streak
            </h4>
            <div className="flex items-center justify-between text-sm">
              <span>🔥 7 days</span>
              <Button variant="outline" size="sm" className="h-7 text-xs" onClick={() => navigate('/challenges')}>
                View All
              </Button>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full flex items-center justify-center"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </SidebarFooter>
      
      <SidebarTrigger className="absolute right-0 translate-x-1/2 top-[5rem] bg-sidebar-primary text-sidebar-primary-foreground h-8 w-8" />
    </Sidebar>
  );
};

export default AppSidebar;
