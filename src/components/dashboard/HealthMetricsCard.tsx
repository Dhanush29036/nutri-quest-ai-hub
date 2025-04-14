
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Moon } from "lucide-react";

interface HealthMetric {
  icon: React.ElementType;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  color: string;
}

const HealthMetricsCard = () => {
  const metrics: HealthMetric[] = [
    {
      icon: Activity,
      title: "Activity",
      value: "8,721",
      change: "+12%",
      isPositive: true,
      color: "text-nq-green-500",
    },
    {
      icon: Heart,
      title: "Heart Rate",
      value: "72 bpm",
      change: "-3%",
      isPositive: true,
      color: "text-red-500",
    },
    {
      icon: Moon,
      title: "Sleep",
      value: "7.5 hrs",
      change: "+5%",
      isPositive: true,
      color: "text-nq-blue-500",
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg">
          Health Metrics
          <span className="ml-auto text-xs font-normal text-muted-foreground">
            From wearable
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3">
          {metrics.map((metric, index) => (
            <div key={index} className="health-metric">
              <div className={`p-2 rounded-full bg-opacity-10 ${metric.color.replace('text-', 'bg-')}`}>
                <metric.icon className={`h-5 w-5 ${metric.color}`} />
              </div>
              <span className="mt-2 text-sm font-medium">{metric.title}</span>
              <span className="text-xl font-bold">{metric.value}</span>
              <span
                className={`text-xs font-medium ${
                  metric.isPositive ? "text-nq-green-500" : "text-destructive"
                }`}
              >
                {metric.change}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthMetricsCard;
