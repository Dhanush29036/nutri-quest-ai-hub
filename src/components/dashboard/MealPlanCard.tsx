
import React, { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Trophy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { UserContext, UserContextType } from "../../App";

interface Meal {
  id: string;
  time: string;
  name: string;
  description: string;
  completed: boolean;
  imageUrl: string;
  coins: number;
}

const MealPlanCard = () => {
  const { toast } = useToast();
  const userContext = useContext(UserContext) as UserContextType;
  const { user, updateUser } = userContext;
  
  const meals: Meal[] = [
    {
      id: "1",
      time: "8:00 AM",
      name: "Probiotic Smoothie Bowl",
      description: "Blueberries, banana, kefir, and granola",
      completed: false,
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      coins: 15,
    },
    {
      id: "2",
      time: "12:30 PM",
      name: "Mediterranean Quinoa Bowl",
      description: "Quinoa, chickpeas, olives, feta, and greens",
      completed: false,
      imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      coins: 20,
    },
    {
      id: "3",
      time: "6:30 PM",
      name: "Salmon with Prebiotic Veggies",
      description: "Wild salmon, asparagus, garlic, and lemon",
      completed: false,
      imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      coins: 25,
    },
    {
      id: "4",
      time: "10:30 AM",
      name: "Fermented Foods Snack Plate",
      description: "Kimchi, sauerkraut, pickles, and whole grain crackers",
      completed: false,
      imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      coins: 15,
    },
    {
      id: "5",
      time: "3:30 PM",
      name: "Greek Yogurt Parfait",
      description: "Greek yogurt, honey, walnuts, and berries",
      completed: false,
      imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      coins: 10,
    },
  ];

  // Track logged meals in local state
  const [loggedMeals, setLoggedMeals] = React.useState<string[]>([]);

  const handleLogMeal = (meal: Meal) => {
    if (!loggedMeals.includes(meal.id)) {
      // Update local state
      setLoggedMeals([...loggedMeals, meal.id]);
      
      // Update user coins
      updateUser({ coins: user.coins + meal.coins });
      
      // Show toast
      toast({
        title: "Meal completed!",
        description: `You earned ${meal.coins} coins for ${meal.name}`,
        duration: 3000,
      });
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg">
          Today's Meal Plan
          <Button variant="link" size="sm" className="ml-auto text-xs font-normal text-nq-purple-500">
            View Full Plan <ChevronRight className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {meals.map((meal) => (
            <div
              key={meal.id}
              className={`flex items-center border rounded-lg p-2 ${
                loggedMeals.includes(meal.id) ? "border-nq-green-200 bg-nq-green-50" : "border-border"
              }`}
            >
              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={meal.imageUrl}
                  alt={meal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-3 flex-grow">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">{meal.time}</span>
                  <div className="flex items-center">
                    <span className="coin text-xs mr-1">🪙</span>
                    <span className="text-xs font-medium">{meal.coins}</span>
                  </div>
                </div>
                <h4 className="font-medium">{meal.name}</h4>
                <p className="text-xs text-muted-foreground line-clamp-1">{meal.description}</p>
              </div>
              <Button
                variant={loggedMeals.includes(meal.id) ? "outline" : "default"}
                size="sm"
                className={`ml-2 flex-shrink-0 ${
                  loggedMeals.includes(meal.id)
                    ? "bg-nq-green-100 border-nq-green-200 text-nq-green-700"
                    : "bg-nq-green-500 hover:bg-nq-green-600"
                }`}
                onClick={() => handleLogMeal(meal)}
                disabled={loggedMeals.includes(meal.id)}
              >
                {loggedMeals.includes(meal.id) ? "Logged" : "Log Meal"}
              </Button>
            </div>
          ))}

          <div className="bg-accent/50 rounded-lg p-3 mt-4">
            <div className="flex items-center text-sm font-medium">
              <Trophy className="text-nq-purple-500 h-4 w-4 mr-1" />
              <span>Complete all meals to earn a 50 coin bonus!</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MealPlanCard;
