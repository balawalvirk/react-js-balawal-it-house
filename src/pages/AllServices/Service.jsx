import ProjectImage from "../../assets/project-image.png";
import ForwardArrowWithBg from "../../assets/forward-arrow-with-bg.svg";
import { useNavigate } from "react-router-dom";

function Service({ project }) {
  const navigate = useNavigate();
  const handleServiceClick = () => {
    navigate(`/projects/${project.id}`);
  };
  return (
    <div
      className="bg-[#F5F5F5] p-[8px] rounded-[24px] ml-5 project-card w-full flex mt-5 items-center cursor-pointer"
      onClick={handleServiceClick}
    >
      <img
        src={ProjectImage}
        className="rounded-[16px]"
        //   width={400}
        height={392}
        alt=""
      />
      <div className="p-5">
        <p className="font-bold text-[32px] py-3 text-left">{project.title}</p>
        <p className="text-[20px] opacity-75 font-[400] pb-3 text-left">
          {project.description}
        </p>
        <div className="flex items-center gap-4 justify-start flex-wrap">
          {project.tags?.map((tag, index) => (
            <p className="py-[12px] px-[10px] rounded-[48px] bg-white font-[500] text-[14px] my-5">
              {tag}
            </p>
          ))}
        </div>
      </div>
      <img
        src={ForwardArrowWithBg}
        alt=""
        width={48}
        height={48}
        className="mr-10"
      />
    </div>
  );
}

export default Service;
