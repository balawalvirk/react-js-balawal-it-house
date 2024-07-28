import ProjectImage from "../assets/project-image.png";

function ProjectCard({ project }) {
  return (
    <div className="bg-[#F5F5F5] p-[8px] rounded-[24px] ml-10">
      <img
        src={ProjectImage}
        className="rounded-[16px] w-full"
        //   width={400}
        height={392}
        alt=""
      />
      <div className="p-5">
        <p className="font-bold text-[24px] py-3 text-left">{project.title}</p>
        <p className="text-[20px] opacity-75 font-[400] pb-3 text-left">
          {project.description}
        </p>
        <div className="flex items-center gap-4 justify-start">
          {project.tags?.map((tag, index) => (
            <p className="py-[12px] px-[20px] rounded-[48px] bg-white font-[500] text-[12px]">{tag}</p>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default ProjectCard;
