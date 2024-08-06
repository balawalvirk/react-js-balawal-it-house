import TeamMember from "./TeamMember";

function QualityAssuranceTeam() {
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
    <section className="mt-14 text-left">
      <h1 className="text-[32px] font-bold">Quality Assurance (QA) Team</h1>
      <p className="text-[14px] mt-2 text-left mb-5">
        Responsible for testing software to identify bugs, defects, and
        usability issues before deployment, ensuring a high level of quality and
        reliability.
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

export default QualityAssuranceTeam;
