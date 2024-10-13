// Import necessary React and UI components
import React from 'react';
import { AlertTriangle } from 'lucide-react';

// Define an array of common pain points in the construction industry
const painPoints = [
  {
    title: "Administrative Overload",
    description: "Excessive time spent on managing project documentation, quotes, and schedules, pulling you away from actual building."
  },
  {
    title: "Communication Breakdowns",
    description: "Miscommunication with subcontractors and clients leading to costly delays and misunderstandings."
  },
  {
    title: "Resource Management",
    description: "Difficulty managing multiple projects simultaneously with limited staff and resources."
  },
  {
    title: "Project Delays",
    description: "Unforeseen scheduling conflicts, resource shortages, or inefficient task management causing setbacks."
  },
  {
    title: "Risk Management",
    description: "Overwhelming challenges with site safety, compliance, and liability issues."
  },
  {
    title: "Profitability Pressure",
    description: "Inefficiencies and delays negatively impacting project profitability and overall business success."
  }
];

// ProblemStatement component: Displays common challenges faced by construction businesses
export const ProblemStatement = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-red-900 uppercase rounded-full bg-red-accent-400">
            Industry Challenges
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Struggling</span>
          </span>{' '}
          with Inefficient Processes in Construction?
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Many construction businesses face challenges that slow down their projects and negatively impact their profitability. Here are some common pain points:
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-2">
        {painPoints.map((point, index) => (
          <div key={index} className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5 flex items-center">
                <AlertTriangle className="w-5 h-5 text-deep-purple-accent-400 mr-2" />
                {point.title}
              </h6>
              <p className="text-sm text-gray-900">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Learn How We Can Help
        </a>
      </div>
    </div>
  );
};

// Export the ProblemStatement component as the default export
export default ProblemStatement;
