import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const painPoints = [
  "Excessive time spent on administrative tasks like managing project documentation, quotes, and schedules, pulling you away from actual building.",
  "Communication breakdowns with subcontractors and clients leading to costly delays and misunderstandings.",
  "Difficulty managing multiple projects simultaneously with limited staff and resources.",
  "Project delays due to unforeseen scheduling conflicts, resource shortages, or inefficient task management.",
  "Risk management becomes overwhelming with site safety, compliance, and liability issues."
];

export const ProblemStatement = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-primary flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 text-warning" />
          Struggling with Inefficient Processes?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-muted-foreground mb-6">
          Many construction businesses face challenges that slow down their projects and negatively impact their profitability. Here are some common pain points:
        </p>
        <div className="space-y-4">
          {painPoints.map((point, index) => (
            <Alert key={index} variant="default">
              <AlertTitle className="font-semibold">Pain Point {index + 1}</AlertTitle>
              <AlertDescription>{point}</AlertDescription>
            </Alert>
          ))}
        </div>
        <Alert className="mt-6">
          <AlertDescription className="text-lg font-semibold">
            These issues consume valuable time and resources, making it harder to complete projects on time and within budget. You need a better way to manage these challenges.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

export default ProblemStatement;