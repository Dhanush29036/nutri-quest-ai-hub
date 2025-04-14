
import React from "react";
import { Bell, Sun, MoonStar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const { toast } = useToast();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    toast({
      title: `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode activated`,
      duration: 2000,
    });
  };

  const notifications = [
    { id: 1, message: "Your gut diversity score improved! +20 coins", isNew: true },
    { id: 2, message: "New meal plan available based on your preferences", isNew: true },
    { id: 3, message: "You earned the 'Week Warrior' badge!", isNew: false },
    { id: 4, message: "Sleep quality improved by 15% this week", isNew: false },
  ];

  return (
    <nav className="bg-card border-b border-border h-16 px-4 flex items-center justify-between">
      <div className="flex-1 md:flex md:justify-center">
        <div className="flex items-center justify-end space-x-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications.some((n) => n.isNew) && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-destructive"></span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
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
      </div>
    </nav>
  );
};

export default Navbar;
