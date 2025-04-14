
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Check, Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Meal {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  benefits: string[];
  tags: string[];
  rating?: number;
}

const MealPlanner = () => {
  const [activeTab, setActiveTab] = useState("today");
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const { toast } = useToast();

  const meals: Meal[] = [
    {
      id: "1",
      name: "Probiotic Smoothie Bowl",
      description: "A gut-friendly smoothie bowl with kefir, berries, banana, and granola topping",
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      calories: 320,
      protein: 15,
      carbs: 45,
      fat: 8,
      benefits: ["Gut diversity", "Probiotics", "Antioxidants"],
      tags: ["Breakfast", "Lactose", "High fiber"],
      rating: 4,
    },
    {
      id: "2",
      name: "Mediterranean Quinoa Bowl",
      description: "Protein-packed bowl with quinoa, chickpeas, olives, cucumber, tomatoes, and feta cheese",
      imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      calories: 420,
      protein: 18,
      carbs: 52,
      fat: 12,
      benefits: ["Prebiotics", "Heart health", "Anti-inflammatory"],
      tags: ["Lunch", "Vegetarian", "Gluten-free"],
      rating: 5,
    },
    {
      id: "3",
      name: "Salmon with Prebiotic Veggies",
      description: "Wild-caught salmon with asparagus, Jerusalem artichokes, and lemon-garlic sauce",
      imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      calories: 380,
      protein: 32,
      carbs: 15,
      fat: 20,
      benefits: ["Omega-3", "Prebiotics", "Vitamin D"],
      tags: ["Dinner", "High protein", "Gluten-free"],
      rating: 4,
    },
    {
      id: "4",
      name: "Prebiotic Overnight Oats",
      description: "Oats soaked with almond milk, topped with banana, berries and inulin powder",
      imageUrl: "https://images.unsplash.com/photo-1556637641-0ac7101023f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      calories: 340,
      protein: 12,
      carbs: 55,
      fat: 6,
      benefits: ["Prebiotics", "Gut diversity", "Sustained energy"],
      tags: ["Breakfast", "Vegan", "High fiber"],
    },
    {
      id: "5",
      name: "Rainbow Buddha Bowl",
      description: "Colorful bowl with roasted vegetables, fermented red cabbage, avocado and tahini dressing",
      imageUrl: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      calories: 390,
      protein: 14,
      carbs: 42,
      fat: 18,
      benefits: ["Diverse plant foods", "Healthy fats", "Fermentation"],
      tags: ["Lunch", "Vegan", "Gluten-free"],
    },
    {
      id: "6",
      name: "Miso Soup with Tofu",
      description: "Traditional Japanese soup with miso, tofu, seaweed, and green onions",
      imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      calories: 220,
      protein: 18,
      carbs: 12,
      fat: 8,
      benefits: ["Fermentation", "Probiotics", "Digestive health"],
      tags: ["Lunch", "Vegetarian", "Low calorie"],
    },
  ];

  const handleSelectMeal = (meal: Meal) => {
    setSelectedMeal(meal);
  };

  const handleAddToMealPlan = () => {
    if (selectedMeal) {
      toast({
        title: "Meal added to your plan!",
        description: `${selectedMeal.name} has been added to your meal plan.`,
        duration: 3000,
      });
      setSelectedMeal(null);
    }
  };

  const handleRateMeal = (rating: "up" | "down") => {
    toast({
      title: rating === "up" ? "You liked this meal!" : "You disliked this meal",
      description: "Your preferences have been updated for better recommendations.",
      duration: 3000,
    });
  };

  return (
    <div className="animate-slide-up">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Meal Planner</h1>
        <p className="text-muted-foreground">
          AI-powered meals based on your gut microbiome and preferences
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="browse">Browse Meals</TabsTrigger>
        </TabsList>

        <TabsContent value="today">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Personalized Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {["Breakfast", "Lunch", "Dinner", "Snack"].map((mealTime, index) => (
                      <div key={mealTime} className="border rounded-lg overflow-hidden">
                        <div className="bg-muted px-4 py-2 font-medium">{mealTime}</div>
                        {index < 3 ? (
                          <div className="flex p-4">
                            <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                              <img
                                src={meals[index].imageUrl}
                                alt={meals[index].name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="ml-4 flex-grow">
                              <div className="flex justify-between items-start">
                                <h3 className="font-medium">{meals[index].name}</h3>
                                <div className="flex">
                                  {meals[index].rating && Array(meals[index].rating).fill(0).map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                {meals[index].description}
                              </p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {meals[index].tags.map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex mt-3 space-x-2">
                                <Button variant="outline" size="sm" className="text-xs">
                                  View Recipe
                                </Button>
                                <div className="flex space-x-1">
                                  <Button onClick={() => handleRateMeal("up")} variant="ghost" size="sm" className="h-7 px-2">
                                    <ThumbsUp className="h-4 w-4" />
                                  </Button>
                                  <Button onClick={() => handleRateMeal("down")} variant="ghost" size="sm" className="h-7 px-2">
                                    <ThumbsDown className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="p-4">
                            <p className="text-sm text-muted-foreground">Greek yogurt with honey and walnuts</p>
                            <div className="flex mt-3">
                              <Button variant="outline" size="sm" className="text-xs">
                                View Recipe
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Nutritional Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Calories</span>
                    <span>1,720 / 2,000 kcal</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-nq-green-500 h-2.5 rounded-full" style={{ width: '86%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Protein</span>
                    <span>98 / 120g</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-nq-purple-500 h-2.5 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Carbs</span>
                    <span>195 / 240g</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-nq-blue-500 h-2.5 rounded-full" style={{ width: '81%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Fat</span>
                    <span>58 / 65g</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2">Gut Health Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-nq-green-50 border-nq-green-200 text-nq-green-700">
                      Diverse Plants: 16
                    </Badge>
                    <Badge variant="outline" className="bg-nq-purple-50 border-nq-purple-200 text-nq-purple-700">
                      Probiotics: High
                    </Badge>
                    <Badge variant="outline" className="bg-nq-blue-50 border-nq-blue-200 text-nq-blue-700">
                      Fiber: 28g
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="week">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Meal Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2 bg-muted text-left"></th>
                      <th className="border p-2 bg-muted text-left">Monday</th>
                      <th className="border p-2 bg-muted text-left">Tuesday</th>
                      <th className="border p-2 bg-muted text-left">Wednesday</th>
                      <th className="border p-2 bg-muted text-left">Thursday</th>
                      <th className="border p-2 bg-muted text-left">Friday</th>
                      <th className="border p-2 bg-muted text-left">Saturday</th>
                      <th className="border p-2 bg-muted text-left">Sunday</th>
                    </tr>
                  </thead>
                  <tbody>
                    {["Breakfast", "Lunch", "Dinner"].map((mealTime) => (
                      <tr key={mealTime}>
                        <td className="border p-2 font-medium bg-muted">{mealTime}</td>
                        {Array(7).fill(0).map((_, i) => {
                          const meal = meals[Math.floor(Math.random() * meals.length)];
                          return (
                            <td key={i} className="border p-2">
                              <div className="text-sm font-medium">{meal.name}</div>
                              <div className="flex mt-1">
                                <Button variant="ghost" size="sm" className="h-6 text-xs p-0 underline">
                                  View
                                </Button>
                                <Button variant="ghost" size="sm" className="h-6 text-xs p-0 ml-2 underline">
                                  Change
                                </Button>
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end mt-4">
                <Button>Generate New Plan</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="browse">
          <div className="flex mb-4 space-x-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search meals by name, ingredient or benefit..."
                className="pl-9"
              />
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter className="h-4 w-4 mr-2" /> Filter
            </Button>
          </div>
          
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {meals.map((meal) => (
              <Card
                key={meal.id}
                className={`overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedMeal?.id === meal.id ? "ring-2 ring-nq-purple-500" : ""
                }`}
                onClick={() => handleSelectMeal(meal)}
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={meal.imageUrl}
                    alt={meal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{meal.name}</h3>
                    <div className="flex">
                      {meal.rating && Array(meal.rating).fill(0).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1 mb-2">
                    {meal.description}
                  </p>
                  <div className="grid grid-cols-2 gap-y-1 text-xs mb-3">
                    <div>Calories: <span className="font-medium">{meal.calories}</span></div>
                    <div>Protein: <span className="font-medium">{meal.protein}g</span></div>
                    <div>Carbs: <span className="font-medium">{meal.carbs}g</span></div>
                    <div>Fat: <span className="font-medium">{meal.fat}g</span></div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {meal.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {selectedMeal?.id === meal.id && (
                    <Button onClick={handleAddToMealPlan} className="w-full mt-3 bg-nq-purple-500 hover:bg-nq-purple-600">
                      <Check className="h-4 w-4 mr-1" /> Add to Meal Plan
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MealPlanner;
