import React, { useState } from "react";
import { Bell, Sun, MoonStar, User, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavbarProps {
  onLogout?: () => void;
}

const Navbar = ({ onLogout }: NavbarProps) => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const { toast } = useToast();
  const navigate = useNavigate();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    toast({
      title: `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode activated`,
      duration: 2000,
    });
  };

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    
    if (onLogout) {
      onLogout();
    }
    
    navigate("/auth");
  };

  const notifications = [
    { id: 1, message: "Your gut diversity score improved! +20 coins", isNew: true },
    { id: 2, message: "New meal plan available based on your preferences", isNew: true },
    { id: 3, message: "You earned the 'Week Warrior' badge!", isNew: false },
    { id: 4, message: "Sleep quality improved by 15% this week", isNew: false },
  ];

  return (
    <nav className="bg-card border-b border-border h-16 px-4 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-nq-green-600 to-nq-purple-600 hidden md:block">
          NutriQuest
        </h1>
      </div>
      
      <div className="flex items-center space-x-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-2"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://i.pravatar.cc/300" alt="User" />
                <AvatarFallback className="bg-nq-purple-200 text-nq-purple-700">JD</AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline">Jane Doe</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="flex items-center justify-start p-2">
              <Avatar className="h-10 w-10 mr-2">
                <AvatarImage src="https://i.pravatar.cc/300" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm font-medium">Jane Doe</p>
                <p className="text-xs text-muted-foreground">jane.doe@example.com</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onClick={() => navigate('/profile')}>
              <User className="mr-2 h-4 w-4" />
              <span>My Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" onClick={() => navigate('/settings')}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-destructive" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {notifications.some((n) => n.isNew) && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-destructive"></span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="end">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Notifications</h3>
                <Button variant="ghost" size="sm" className="text-xs">
                  Mark all as read
                </Button>
              </div>
              <div className="max-h-72 overflow-y-auto space-y-2">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg ${
                      notification.isNew
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted/60"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-sm">{notification.message}</span>
                      {notification.isNew && (
                        <Badge className="bg-nq-purple-500 text-white ml-2 text-xs">New</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
        
        <Button variant="outline" size="icon" onClick={toggleTheme}>
          {theme === "light" ? <MoonStar className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
