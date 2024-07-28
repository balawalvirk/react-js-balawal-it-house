import TeamMemberImage from "../../assets/team-member.png";

function TeamMember({ member }) {
  return (
    <div className="rouded-[16px] bg-[#F5F5F5] p-[8px] text-left carousel-item flex-grow">
      <img src={TeamMemberImage} alt="" />
      <p className="mt-4 text-[20px] font-bold">{member.name}</p>
      <p className="text-[14px] opacity-75 mt-3">{member.role}</p>
    </div>
  );
}

export default TeamMember;
