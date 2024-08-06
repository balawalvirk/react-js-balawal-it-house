import TeamMember from "./TeamMember";

function ProjectManagementTeam() {
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
    <section className="mt-12 text-left">
      <h1 className="text-[32px] font-bold">Project Management Team</h1>
      <p className="text-[14px] mt-2 text-left mb-5">
        Coordinates project timelines, resources, and budgets to ensure
        successful delivery, while also managing stakeholder communication and
        risk mitigation.
      </p>
      <div className="">
        <div className="flex gap-4 flex-nowrap overflow-auto items-center hide-scrollbar">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectManagementTeam;
