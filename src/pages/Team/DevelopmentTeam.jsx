import React from "react";
import TeamMember from "./TeamMember";

function DevelopmentTeam() {
  const teamMembers = [
    { name: "Kurt Bates", role: "Full-stack Developer", image: "" },
    { name: "Jerry Helfer", role: "Frontend Developer", image: "" },
    { name: "Patricia Sanders", role: "Backend Developer", image: "" },
    { name: "Eddie Lake", role: "Software Engineer", image: "" },
    { name: "Daniel Hamilton", role: "Full-stack Developer", image: "" },
    { name: "Daniel Hamilton", role: "Full-stack Developer", image: "" },
    { name: "Daniel Hamilton", role: "Full-stack Developer", image: "" },
    { name: "Daniel Hamilton", role: "Full-stack Developer", image: "" },
    { name: "Daniel Hamilton", role: "Full-stack Developer", image: "" },
    { name: "Daniel Hamilton", role: "Full-stack Developer", image: "" },
    { name: "Daniel Hamilton", role: "Full-stack Developer", image: "" },
    { name: "Daniel Hamilton", role: "Full-stack Developer", image: "" },
    { name: "Daniel Hamilton", role: "Full-stack Developer", image: "" },
    { name: "Daniel Hamilton", role: "Full-stack Developer", image: "" },
    { name: "Daniel Hamilton", role: "Full-stack Developer", image: "" },
    { name: "Daniel Hamilton", role: "Full-stack Developer", image: "" },
  ];

  return (
    <section className="mt-12">
      <h1 className="text-[32px] font-bold">Development Team</h1>
      <p className="text-[14px] mt-4">
        Handles the coding and programming of software applications based on
        project requirements, focusing on functionality and technical
        implementation.
      </p>
      <div className="carousel w-full overflow-x-scroll p-4">
        <div className="carousel-inner flex gap-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DevelopmentTeam;
