
import React from "react";

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

const TeamMember = ({ name, position, bio, imageUrl }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 overflow-hidden rounded-full border-4 border-realestate-teal w-32 h-32">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <h3 className="text-xl font-bold text-realestate-blue">{name}</h3>
      <p className="text-realestate-teal font-medium mb-2">{position}</p>
      <p className="text-realestate-gray text-sm">{bio}</p>
    </div>
  );
};

export default TeamMember;
