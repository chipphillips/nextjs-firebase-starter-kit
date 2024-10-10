// Import necessary React and UI components
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Define an array of common pain points in the construction industry
// This allows for easy modification and expansion of the list in the future
const painPoints = [
  "Excessive time spent on administrative tasks like managing project documentation, quotes, and schedules, pulling you away from actual building.",
  "Communication breakdowns with subcontractors and clients leading to costly delays and misunderstandings.",
  "Difficulty managing multiple projects simultaneously with limited staff and resources.",
  "Project delays due to unforeseen scheduling conflicts, resource shortages, or inefficient task management.",
  "Risk management becomes overwhelming with site safety, compliance, and liability issues."
];

// ProblemStatement component: Displays common challenges faced by construction businesses
export const ProblemStatement = () => {
  return (
    // Use a Card component to create a visually distinct section
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        {/* Title with an alert icon to draw attention */}
        <CardTitle className="text-3xl font-bold text-primary flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 text-warning" />
          Struggling with Inefficient Processes?
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Introductory text explaining the purpose of this section */}
        <p className="text-lg text-muted-foreground mb-6">
          Many construction businesses face challenges that slow down their projects and negatively impact their profitability. Here are some common pain points:
        </p>
        {/* Container for individual pain points */}
        <div className="space-y-4">
          {/* Map through the painPoints array to create an Alert for each point */}
          {painPoints.map((point, index) => (
            <Alert key={index} variant="default">
              <AlertTitle className="font-semibold">Pain Point {index + 1}</AlertTitle>
              <AlertDescription>{point}</AlertDescription>
            </Alert>
          ))}
        </div>
        {/* Concluding statement to emphasize the need for a solution */}
        <Alert className="mt-6">
          <AlertDescription className="text-lg font-semibold">
            These issues consume valuable time and resources, making it harder to complete projects on time and within budget. You need a better way to manage these challenges.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

// Export the ProblemStatement component as the default export
export default ProblemStatement;