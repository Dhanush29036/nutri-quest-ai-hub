
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, Timer, ArrowUpRight, Users, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  progress: number;
  total: number;
  coins: number;
  xp: number;
  category: string;
  icon: React.ReactNode;
  daysLeft?: number;
}

const Challenges = () => {
  const activeChallenges: Challenge[] = [
    {
      id: "1",
      title: "Morning Hydration",
      description: "Drink water first thing in the morning",
      difficulty: "easy",
      progress: 5,
      total: 7,
      coins: 50,
      xp: 100,
      category: "Hydration",
      icon: <Trophy className="h-5 w-5 text-yellow-500" />,
      daysLeft: 2,
    },
    {
      id: "2",
      title: "Gut Health Explorer",
      description: "Try 10 different probiotic-rich foods",
      difficulty: "medium",
      progress: 6,
      total: 10,
      coins: 75,
      xp: 150,
      category: "Nutrition",
      icon: <Star className="h-5 w-5 text-purple-500" />,
      daysLeft: 4,
    },
    {
      id: "3",
      title: "Steps Master",
      description: "Reach 10,000 steps for 5 days",
      difficulty: "medium",
      progress: 3,
      total: 5,
      coins: 60,
      xp: 120,
      category: "Activity",
      icon: <Timer className="h-5 w-5 text-blue-500" />,
      daysLeft: 2,
    },
  ];

  const availableChallenges: Challenge[] = [
    {
      id: "4",
      title: "Veggie Variety",
      description: "Eat 5 different vegetables in a day",
      difficulty: "easy",
      progress: 0,
      total: 3,
      coins: 40,
      xp: 80,
      category: "Nutrition",
      icon: <Star className="h-5 w-5 text-green-500" />,
    },
    {
      id: "5",
      title: "Sleep Schedule",
      description: "Go to bed before 11 PM for 5 days",
      difficulty: "medium",
      progress: 0,
      total: 5,
      coins: 60,
      xp: 120,
      category: "Sleep",
      icon: <Timer className="h-5 w-5 text-indigo-500" />,
    },
    {
      id: "6",
      title: "Group Challenge",
      description: "Complete this week's community challenge",
      difficulty: "hard",
      progress: 0,
      total: 1,
      coins: 100,
      xp: 200,
      category: "Community",
      icon: <Users className="h-5 w-5 text-pink-500" />,
    },
  ];

  const completedChallenges: Challenge[] = [
    {
      id: "7",
      title: "Water Champion",
      description: "Drink 8 glasses of water for 7 days",
      difficulty: "medium",
      progress: 7,
      total: 7,
      coins: 70,
      xp: 140,
      category: "Hydration",
      icon: <Trophy className="h-5 w-5 text-blue-500" />,
    },
    {
      id: "8",
      title: "Meditation Starter",
      description: "Meditate for 5 minutes for 5 days",
      difficulty: "easy",
      progress: 5,
      total: 5,
      coins: 50,
      xp: 100,
      category: "Mindfulness",
      icon: <Star className="h-5 w-5 text-purple-500" />,
    },
  ];

  const renderChallengeCard = (challenge: Challenge, active: boolean = true) => (
    <Card key={challenge.id} className="overflow-hidden">
      <div className={`h-1 ${
        challenge.difficulty === "easy" 
          ? "bg-green-500" 
          : challenge.difficulty === "medium" 
            ? "bg-amber-500" 
            : "bg-red-500"
      }`}></div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-muted mr-3">
              {challenge.icon}
            </div>
            <div>
              <h3 className="font-medium">{challenge.title}</h3>
              <p className="text-xs text-muted-foreground">{challenge.description}</p>
              <div className="flex items-center mt-1">
                <Badge variant="outline" className="text-xs mr-2">
                  {challenge.category}
                </Badge>
                <Badge variant="outline" className={`text-xs ${
                  challenge.difficulty === "easy" 
                    ? "text-green-500 border-green-200" 
                    : challenge.difficulty === "medium" 
                      ? "text-amber-500 border-amber-200" 
                      : "text-red-500 border-red-200"
                }`}>
                  {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center">
              <span className="text-xs font-medium mr-2">🪙 {challenge.coins}</span>
              <span className="text-xs font-medium">✨ {challenge.xp} XP</span>
            </div>
            {challenge.daysLeft && (
              <span className="text-xs text-muted-foreground block mt-1">
                {challenge.daysLeft} days left
              </span>
            )}
          </div>
        </div>
        
        {active && (
          <div className="mt-3">
            <div className="flex justify-between text-xs mb-1">
              <span>Progress</span>
              <span className="font-medium">
                {challenge.progress}/{challenge.total}
              </span>
            </div>
            <Progress 
              value={(challenge.progress / challenge.total) * 100} 
              className="h-1.5"
            />
          </div>
        )}
        
        {!active && (
          <Button size="sm" className="w-full mt-3">
            Accept Challenge
          </Button>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="animate-slide-up">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Challenges</h1>
        <p className="text-muted-foreground">
          Complete challenges to earn coins and XP
        </p>
      </div>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-nq-purple-500/90 to-nq-purple-700 text-white">
          <CardContent className="p-4">
            <div className="flex items-center">
              <Trophy className="h-6 w-6 mr-2" />
              <h3 className="font-semibold">Active Challenges</h3>
            </div>
            <p className="text-2xl font-bold mt-2">{activeChallenges.length}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center text-nq-green-500">
              <Star className="h-6 w-6 mr-2" />
              <h3 className="font-semibold">Total Completed</h3>
            </div>
            <p className="text-2xl font-bold mt-2">{completedChallenges.length}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center text-amber-500">
              <Gift className="h-6 w-6 mr-2" />
              <h3 className="font-semibold">Coins Earned</h3>
            </div>
            <p className="text-2xl font-bold mt-2">
              {completedChallenges.reduce((sum, challenge) => sum + challenge.coins, 0)}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center text-blue-500">
              <ArrowUpRight className="h-6 w-6 mr-2" />
              <h3 className="font-semibold">XP Gained</h3>
            </div>
            <p className="text-2xl font-bold mt-2">
              {completedChallenges.reduce((sum, challenge) => sum + challenge.xp, 0)}
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Challenges</TabsTrigger>
          <TabsTrigger value="available">Available</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeChallenges.map(challenge => renderChallengeCard(challenge))}
          </div>
        </TabsContent>
        
        <TabsContent value="available" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableChallenges.map(challenge => renderChallengeCard(challenge, false))}
          </div>
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completedChallenges.map(challenge => (
              <Card key={challenge.id} className="overflow-hidden">
                <div className="h-1 bg-nq-green-500"></div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-nq-green-100 mr-3">
                        <Trophy className="h-5 w-5 text-nq-green-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">{challenge.title}</h3>
                        <p className="text-xs text-muted-foreground">{challenge.description}</p>
                        <div className="flex items-center mt-1">
                          <Badge variant="outline" className="text-xs mr-2">
                            {challenge.category}
                          </Badge>
                          <Badge className="bg-nq-green-500 text-white text-xs">
                            Completed
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center">
                        <span className="text-xs font-medium mr-2">🪙 {challenge.coins}</span>
                        <span className="text-xs font-medium">✨ {challenge.xp} XP</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Challenges;
