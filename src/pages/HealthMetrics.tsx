
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Moon, BarChart, TrendingUp, Watch } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const HealthMetrics = () => {
  return (
    <div className="animate-slide-up">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Health Metrics</h1>
        <p className="text-muted-foreground">
          Track and analyze your health data
        </p>
      </div>

      <Tabs defaultValue="overview" className="mb-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="sleep">Sleep</TabsTrigger>
          <TabsTrigger value="heart">Heart Rate</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-4">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {/* Daily Summary Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Today's Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Activity className="h-5 w-5 text-nq-green-500 mr-2" />
                      <span>Steps</span>
                    </div>
                    <span className="font-medium">8,721</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Heart className="h-5 w-5 text-red-500 mr-2" />
                      <span>Avg. Heart Rate</span>
                    </div>
                    <span className="font-medium">72 bpm</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Moon className="h-5 w-5 text-nq-blue-500 mr-2" />
                      <span>Sleep</span>
                    </div>
                    <span className="font-medium">7.5 hrs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Weekly Trends Card */}
            <Card className="col-span-1 md:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  Weekly Trends
                  <TrendingUp className="h-5 w-5 ml-2 text-nq-purple-500" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Steps</span>
                      <span className="text-sm font-medium text-nq-green-500">+12% vs last week</span>
                    </div>
                    <Progress value={82} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Heart Rate Consistency</span>
                      <span className="text-sm font-medium text-nq-green-500">+5% vs last week</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Sleep Quality</span>
                      <span className="text-sm font-medium text-nq-green-500">+8% vs last week</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="activity" className="mt-4">
          <div className="grid gap-6 grid-cols-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  Activity Tracking
                  <Activity className="h-5 w-5 ml-2 text-nq-green-500" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-card p-4 rounded-lg border">
                    <div className="text-lg font-semibold mb-1">Steps</div>
                    <div className="text-3xl font-bold">8,721</div>
                    <div className="text-xs text-nq-green-500">+12% from average</div>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg border">
                    <div className="text-lg font-semibold mb-1">Distance</div>
                    <div className="text-3xl font-bold">5.3 km</div>
                    <div className="text-xs text-nq-green-500">+8% from average</div>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg border">
                    <div className="text-lg font-semibold mb-1">Calories</div>
                    <div className="text-3xl font-bold">387</div>
                    <div className="text-xs text-nq-green-500">+5% from average</div>
                  </div>
                </div>
                
                <Card className="bg-muted/50">
                  <CardContent className="pt-6">
                    <h3 className="font-medium mb-4">Weekly Activity</h3>
                    <div className="flex items-end justify-between h-40 mb-2">
                      {[65, 40, 85, 30, 90, 75, 55].map((height, index) => (
                        <div key={index} className="w-full mx-1">
                          <div 
                            className="bg-nq-green-500 rounded-t"
                            style={{ height: `${height}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="sleep" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                Sleep Analysis
                <Moon className="h-5 w-5 ml-2 text-nq-blue-500" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-4">
                    <div className="bg-card p-4 rounded-lg border">
                      <div className="text-lg font-semibold mb-1">Sleep Duration</div>
                      <div className="text-3xl font-bold">7.5 hrs</div>
                      <div className="text-xs text-nq-green-500">+30min from average</div>
                    </div>
                    
                    <div className="bg-card p-4 rounded-lg border">
                      <div className="text-lg font-semibold mb-1">Sleep Quality</div>
                      <div className="text-3xl font-bold">85%</div>
                      <div className="text-xs text-nq-green-500">+8% from average</div>
                    </div>
                    
                    <div className="bg-card p-4 rounded-lg border">
                      <div className="text-lg font-semibold mb-1">Bedtime</div>
                      <div className="text-3xl font-bold">11:30 PM</div>
                      <div className="text-xs">Consistent for 5 days</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-medium mb-4">Sleep Stages</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Deep Sleep</span>
                        <span className="text-sm font-medium">1h 45m</span>
                      </div>
                      <Progress value={25} className="h-2 bg-blue-200" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Light Sleep</span>
                        <span className="text-sm font-medium">4h 15m</span>
                      </div>
                      <Progress value={55} className="h-2 bg-blue-200" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">REM</span>
                        <span className="text-sm font-medium">1h 30m</span>
                      </div>
                      <Progress value={20} className="h-2 bg-blue-200" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="heart" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                Heart Rate Metrics
                <Heart className="h-5 w-5 ml-2 text-red-500" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-card p-4 rounded-lg border">
                  <div className="text-lg font-semibold mb-1">Resting HR</div>
                  <div className="text-3xl font-bold">65 bpm</div>
                  <div className="text-xs text-nq-green-500">Healthy range</div>
                </div>
                
                <div className="bg-card p-4 rounded-lg border">
                  <div className="text-lg font-semibold mb-1">Average HR</div>
                  <div className="text-3xl font-bold">72 bpm</div>
                  <div className="text-xs text-nq-green-500">-3 from last week</div>
                </div>
                
                <div className="bg-card p-4 rounded-lg border">
                  <div className="text-lg font-semibold mb-1">Peak HR</div>
                  <div className="text-3xl font-bold">135 bpm</div>
                  <div className="text-xs">During workout</div>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-4">Heart Rate Variability</h3>
                <div className="flex items-end justify-between h-32 mb-2">
                  {[45, 60, 40, 75, 55, 70, 50].map((height, index) => (
                    <div key={index} className="w-full mx-1">
                      <div 
                        className="bg-red-400 rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HealthMetrics;
