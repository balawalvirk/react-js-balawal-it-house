import TeamMemberImage from "../../assets/team-member.png";

function TeamMember({ member }) {
  return (
    <div className="rounded-[8px] bg-[#F5F5F5] p-[8px] text-left  flex-grow">
      <img src={TeamMemberImage} alt="" width={240} height={240} />
      <p className="mt-4 text-[20px] font-bold">{member.name}</p>
      <p className="text-[14px] opacity-75 mt-3 mb-1">{member.role}</p>
    </div>
  );
}

export default TeamMember;
