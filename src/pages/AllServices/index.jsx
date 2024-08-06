import ProjectImage from "../../assets/project-image.png";
import ProjectCard from "../../components/ProjectCard";
import ContactUs from "../ContactUs/ContactUs";
import Service from "./Service";

function index() {
  const projects = [
    {
      title: "EcoVibes Marketplace",
      description:
        "An e-commerce platform promoting sustainable products and eco-friendly living. Features include user-friendly navigation, product reviews, and secure payment options.",
      image: ProjectImage,
      tags: ["UI/UX Design", "Front-end Development", "Website"],
    },
    {
      title: "EcoVibes Marketplace",
      description:
        "An e-commerce platform promoting sustainable products and eco-friendly living. Features include user-friendly navigation, product reviews, and secure payment options.",
      image: ProjectImage,
      tags: ["UI/UX Design", "Front-end Development", "Website"],
    },
    {
      title: "EcoVibes Marketplace",
      description:
        "An e-commerce platform promoting sustainable products and eco-friendly living. Features include user-friendly navigation, product reviews, and secure payment options.",
      image: ProjectImage,
      tags: ["UI/UX Design", "Front-end Development", "Website"],
    },
    {
      title: "EcoVibes Marketplace",
      description:
        "An e-commerce platform promoting sustainable products and eco-friendly living. Features include user-friendly navigation, product reviews, and secure payment options.",
      image: ProjectImage,
      tags: ["UI/UX Design", "Front-end Development", "Website"],
    },
    {
      title: "EcoVibes Marketplace",
      description:
        "An e-commerce platform promoting sustainable products and eco-friendly living. Features include user-friendly navigation, product reviews, and secure payment options.",
      image: ProjectImage,
      tags: ["UI/UX Design", "Front-end Development", "Website"],
    },
    {
      title: "EcoVibes Marketplace",
      description:
        "An e-commerce platform promoting sustainable products and eco-friendly living. Features include user-friendly navigation, product reviews, and secure payment options.",
      image: ProjectImage,
      tags: ["UI/UX Design", "Front-end Development", "Website"],
    },
    {
      title: "EcoVibes Marketplace",
      description:
        "An e-commerce platform promoting sustainable products and eco-friendly living. Features include user-friendly navigation, product reviews, and secure payment options.",
      image: ProjectImage,
      tags: ["UI/UX Design", "Front-end Development", "Website"],
    },
    {
      title: "EcoVibes Marketplace",
      description:
        "An e-commerce platform promoting sustainable products and eco-friendly living. Features include user-friendly navigation, product reviews, and secure payment options.",
      image: ProjectImage,
      tags: ["UI/UX Design", "Front-end Development", "Website"],
    },
    {
      title: "EcoVibes Marketplace",
      description:
        "An e-commerce platform promoting sustainable products and eco-friendly living. Features include user-friendly navigation, product reviews, and secure payment options.",
      image: ProjectImage,
      tags: ["UI/UX Design", "Front-end Development", "Website"],
    },
    {
      title: "EcoVibes Marketplace",
      description:
        "An e-commerce platform promoting sustainable products and eco-friendly living. Features include user-friendly navigation, product reviews, and secure payment options.",
      image: ProjectImage,
      tags: ["UI/UX Design", "Front-end Development", "Website"],
    },
    {
      title: "EcoVibes Marketplace",
      description:
        "An e-commerce platform promoting sustainable products and eco-friendly living. Features include user-friendly navigation, product reviews, and secure payment options.",
      image: ProjectImage,
      tags: ["UI/UX Design", "Front-end Development", "Website"],
    },
    {
      title: "EcoVibes Marketplace",
      description:
        "An e-commerce platform promoting sustainable products and eco-friendly living. Features include user-friendly navigation, product reviews, and secure payment options.",
      image: ProjectImage,
      tags: ["UI/UX Design", "Front-end Development", "Website"],
    },
  ];
  return (
    <>
      <div className="text-center container mx-auto">
        <h1 className="text-[40px] font-bold mt-16">UI/UX Design</h1>
        <p className="text-[18px] mt-5">
          We create user-friendly interfaces and engaging experiences for your
          website or app, ensuring it's easy to navigate and leaves a lasting
          impression on your audience. Our meticulous attention to detail
          ensures that every aspect of the design enhances usability and
          reflects your brand identity.
        </p>
        <div
          className="flex justify-between gap-8 rounded-[16px] w-fit mx-auto mt-10"
          style={{ border: "1px solid #C5C5C5" }}
        >
          <input
            type="text"
            placeholder="Search a project..."
            className="bg-transparent border-none outline-none p-[1rem] text-[18px]"
          />
        </div>
        <div className="mt-10 gap-10 justify-center">
          {projects.map((project, ind) => (
            <Service project={project} key={ind} />
          ))}
        </div>
        <ContactUs />
      </div>
    </>
  );
}

export default index;
