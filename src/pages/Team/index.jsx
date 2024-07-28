import SearchIcon from "../../assets/search.svg";
import ProjectImage from "../../assets/project-image.png";
import ProjectCard from "../../components/ProjectCard";
import ContactUs from "../../components/ContactUs";
import DevelopmentTeam from "./DevelopmentTeam";

function index() {
  return (
    <>
      <div className="text-center container mx-auto">
        <h1 className="text-[40px] font-bold mt-16">Meet Our Dedicated Team</h1>
        <p className="text-[18px] mt-5">
          Get to know the talented individuals behind our company. Our team is
          comprised of passionate professionals who are dedicated to delivering
          top-notch service and innovative solutions. With diverse backgrounds
          and expertise, we work together to exceed our clients' expectations
          and drive success. Learn more about the people who make our company
          thrive.
        </p>
        <DevelopmentTeam />
        <ContactUs />
      </div>
    </>
  );
}

export default index;
