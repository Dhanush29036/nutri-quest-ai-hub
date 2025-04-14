
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  progress: number;
  total: number;
  coins: number;
}

const AchievementsCard = () => {
  const achievements: Achievement[] = [
    {
      id: "1",
      name: "Consistency Champion",
      description: "Log meals for 7 consecutive days",
      icon: "🔥",
      progress: 5,
      total: 7,
      coins: 50,
    },
    {
      id: "2",
      name: "Gut Explorer",
      description: "Try 10 different probiotic-rich foods",
      icon: "🧫",
      progress: 6,
      total: 10,
      coins: 75,
    },
    {
      id: "3",
      name: "Activity Master",
      description: "Reach 10,000 steps for 5 days",
      icon: "👟",
      progress: 3,
      total: 5,
      coins: 60,
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg">
          Current Challenges
          <Button variant="link" size="sm" className="ml-auto text-xs font-normal text-nq-purple-500">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex items-start">
                <div className="text-xl mr-2">{achievement.icon}</div>
                <div className="flex-grow">
                  <h4 className="font-medium">{achievement.name}</h4>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Progress</span>
                      <span className="font-medium">
                        {achievement.progress}/{achievement.total}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className="bg-nq-purple-500 h-1.5 rounded-full"
                        style={{
                          width: `${(achievement.progress / achievement.total) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center ml-2">
                  <span className="coin w-7 h-7 text-sm">🪙</span>
                  <span className="text-xs font-medium mt-1">{achievement.coins}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementsCard;
