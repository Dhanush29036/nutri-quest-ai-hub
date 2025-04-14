
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Info, PieChart, Calendar } from "lucide-react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const Microbiome = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Microbiome data
  const diversityScore = 65;
  const healthScore = 72;
  const inflammationScore = 28;

  const microbiomeData = [
    { name: "Bifidobacterium", value: 25, color: "#22c55e" },
    { name: "Lactobacillus", value: 18, color: "#a855f7" },
    { name: "Bacteroides", value: 15, color: "#3b82f6" },
    { name: "Firmicutes", value: 12, color: "#f59e0b" },
    { name: "Others", value: 30, color: "#9ca3af" },
  ];

  const recommendations = [
    {
      id: 1,
      title: "Increase fiber intake",
      description: "Add more diverse plant foods to boost microbial diversity",
      icon: "🥦",
    },
    {
      id: 2,
      title: "Include fermented foods",
      description: "Add yogurt, kimchi, or kombucha for probiotics",
      icon: "🥣",
    },
    {
      id: 3,
      title: "Reduce processed foods",
      description: "Lower intake of ultra-processed foods to reduce inflammation",
      icon: "🍔",
    },
    {
      id: 4,
      title: "Stay hydrated",
      description: "Drink plenty of water to support gut function",
      icon: "💧",
    },
  ];

  const historyData = [
    { date: "Jan 2025", diversity: 55, health: 62 },
    { date: "Feb 2025", diversity: 58, health: 65 },
    { date: "Mar 2025", diversity: 60, health: 68 },
    { date: "Apr 2025", diversity: 65, health: 72 },
  ];

  return (
    <div className="animate-slide-up">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Gut Microbiome</h1>
        <p className="text-muted-foreground">
          Understand and optimize your gut health
        </p>
      </div>

      <div className="grid gap-6 mb-6 grid-cols-1 sm:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-nq-green-100 flex items-center justify-center mb-2">
                <span className="text-nq-green-700 text-2xl">🦠</span>
              </div>
              <h3 className="text-sm font-medium mb-1">Diversity Score</h3>
              <div className="text-3xl font-bold">{diversityScore}%</div>
              <Progress value={diversityScore} className="h-2 mt-2" />
              <p className="text-xs text-nq-green-600 mt-2">+3% from last test</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-nq-blue-100 flex items-center justify-center mb-2">
                <span className="text-nq-blue-700 text-2xl">❤️</span>
              </div>
              <h3 className="text-sm font-medium mb-1">Gut Health</h3>
              <div className="text-3xl font-bold">{healthScore}%</div>
              <Progress value={healthScore} className="h-2 mt-2" />
              <p className="text-xs text-nq-green-600 mt-2">+5% from last test</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-2">
                <span className="text-red-700 text-2xl">🔥</span>
              </div>
              <h3 className="text-sm font-medium mb-1">Inflammation</h3>
              <div className="text-3xl font-bold">{inflammationScore}%</div>
              <Progress value={inflammationScore} className="h-2 mt-2 bg-muted" />
              <p className="text-xs text-nq-green-600 mt-2">-4% from last test</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview" className="flex items-center">
            <PieChart className="h-4 w-4 mr-2" /> Overview
          </TabsTrigger>
          <TabsTrigger value="recommendations">
            <Info className="h-4 w-4 mr-2" /> Recommendations
          </TabsTrigger>
          <TabsTrigger value="history">
            <Calendar className="h-4 w-4 mr-2" /> History
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Microbiome Composition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={microbiomeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                        label={(entry) => `${entry.name}: ${entry.value}%`}
                        labelLine={false}
                      >
                        {microbiomeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend layout="vertical" align="right" verticalAlign="middle" />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-nq-green-50 border border-nq-green-200 rounded-lg">
                  <h4 className="font-medium flex items-center">
                    <span className="text-lg mr-1">🌱</span> Good Diversity
                  </h4>
                  <p className="text-sm">Your gut has a good variety of beneficial bacteria, supporting your overall health.</p>
                </div>
                
                <div className="p-3 bg-nq-purple-50 border border-nq-purple-200 rounded-lg">
                  <h4 className="font-medium flex items-center">
                    <span className="text-lg mr-1">🔬</span> Bifidobacterium Levels
                  </h4>
                  <p className="text-sm">Your Bifidobacterium levels are optimal, supporting your digestive health and immune function.</p>
                </div>
                
                <div className="p-3 bg-nq-blue-50 border border-nq-blue-200 rounded-lg">
                  <h4 className="font-medium flex items-center">
                    <span className="text-lg mr-1">⚠️</span> Low Akkermansia
                  </h4>
                  <p className="text-sm">Consider increasing polyphenol-rich foods to boost Akkermansia levels for better gut barrier function.</p>
                </div>
                
                <Button variant="outline" className="w-full mt-2 flex items-center justify-center">
                  <Upload className="h-4 w-4 mr-1" />
                  Upload new test results
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="recommendations" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Personalized Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {recommendations.map((rec) => (
                  <div key={rec.id} className="p-4 bg-white rounded-lg border shadow-sm">
                    <div className="text-2xl mb-2">{rec.icon}</div>
                    <h3 className="font-medium">{rec.title}</h3>
                    <p className="text-sm text-muted-foreground">{rec.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Test History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left p-2">Date</th>
                      <th className="text-left p-2">Diversity Score</th>
                      <th className="text-left p-2">Gut Health Score</th>
                      <th className="text-left p-2">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historyData.map((item, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-2">{item.date}</td>
                        <td className="p-2">{item.diversity}%</td>
                        <td className="p-2">{item.health}%</td>
                        <td className="p-2">
                          {index > 0 ? (
                            <span className={`text-xs font-medium ${item.health - historyData[index - 1].health > 0 ? "text-nq-green-500" : "text-red-500"}`}>
                              {item.health - historyData[index - 1].health > 0 ? "+" : ""}
                              {item.health - historyData[index - 1].health}%
                            </span>
                          ) : (
                            <span className="text-xs text-muted-foreground">Baseline</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Microbiome;
