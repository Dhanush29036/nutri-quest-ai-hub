
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Upload } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const GutHealthCard = () => {
  const diversity = 65;
  const health = 72;
  
  const bacteria = [
    { name: "Bifidobacterium", percentage: 25, color: "bg-nq-green-400" },
    { name: "Lactobacillus", percentage: 18, color: "bg-nq-purple-400" },
    { name: "Bacteroides", percentage: 15, color: "bg-nq-blue-400" },
    { name: "Firmicutes", percentage: 12, color: "bg-amber-400" },
    { name: "Others", percentage: 30, color: "bg-gray-300" },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg">
          Gut Microbiome
          <Button variant="link" size="sm" className="ml-auto text-xs font-normal text-nq-purple-500">
            View Details <ChevronRight className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <span className="text-sm text-muted-foreground">Diversity Score</span>
              <div className="flex items-end justify-between mt-1">
                <span className="text-2xl font-bold">{diversity}%</span>
                <span className="text-xs text-nq-green-500 font-medium">+3% this month</span>
              </div>
              <Progress value={diversity} className="h-2 mt-2" />
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <span className="text-sm text-muted-foreground">Gut Health</span>
              <div className="flex items-end justify-between mt-1">
                <span className="text-2xl font-bold">{health}%</span>
                <span className="text-xs text-nq-green-500 font-medium">+5% this month</span>
              </div>
              <Progress value={health} className="h-2 mt-2" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Key Bacteria</h4>
            <div className="space-y-2">
              {bacteria.map((bacterium) => (
                <div key={bacterium.name} className="flex items-center">
                  <div className={`microbiome-dot ${bacterium.color} w-3 h-3 mr-2`}></div>
                  <span className="text-sm flex-grow">{bacterium.name}</span>
                  <span className="text-sm font-medium">{bacterium.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          <Button variant="outline" className="w-full flex items-center justify-center">
            <Upload className="h-4 w-4 mr-1" />
            Upload new gut test results
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GutHealthCard;
