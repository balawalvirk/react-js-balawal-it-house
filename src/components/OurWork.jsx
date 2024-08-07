import { useEffect, useRef, useState } from "react";
import ProjectImage from "../assets/project-image.png";
import ForwardIcon from "../assets/forward-icon.svg";
import ProjectCard from "./ProjectCard";
import Button from "./Button";
import TransparentPrimaryBtn from "./TransparentPrimaryBtn";

function OurWork() {
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
  const sliderRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (sliderRef.current.scrollLeft > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <section className="py-[20px]">
      <h1 className="font-semibold text-[40px] text-center">Our Work</h1>
      <div className="mt-16">
        <div className="flex items-center gap-4 justify-start flex-nowrap overflow-auto px-[5rem] hide-scrollbar">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
      <TransparentPrimaryBtn
        className="mx-auto mt-16 py-4"
        label={"Explore our Work"}
        labelClassName={"bg-primary-gradient"}
        rightIcon={ForwardIcon}
      />
    </section>
  );
}

export default OurWork;
