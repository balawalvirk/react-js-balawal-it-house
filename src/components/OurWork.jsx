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

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("scroll", handleScroll);
    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="py-[120px]">
      <h1 className="font-bold text-[40px] text-center">Our Work</h1>
      <div className="mt-16">
        <div className={`slider-container ${isScrolled ? "scrolled" : ""}`}>
          <div className="slider" ref={sliderRef}>
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </div>
      </div>
        <TransparentPrimaryBtn
        className="mx-auto mt-16"
          label={"Explore our Work"}
          labelClassName={"bg-primary-gradient"}
          rightIcon={ForwardIcon}
        />
    </section>
  );
}

export default OurWork;