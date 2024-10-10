import React from 'react';
import Image from 'next/image';

// Define the structure of props that the TeamMember component expects
interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

// TeamMember component: Displays information about a team member
const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl }) => {
  return (
    // Container for the team member card with styling for appearance and layout
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      {/* Display the team member's image using Next.js Image component for optimization */}
      <Image
        src={imageUrl}
        alt={name}
        width={200}
        height={200}
        className="rounded-full mx-auto mb-4"
      />
      {/* Display the team member's name with emphasis */}
      <h3 className="text-xl font-semibold">{name}</h3>
      {/* Display the team member's role with a muted color */}
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

// Export the TeamMember component for use in other parts of the application
export default TeamMember;