import { useEffect, useRef, useState } from "react";
import ArrowForwardIcon from "../../assets/arrow-forward-gray.svg";
import ProjectImage from "../../assets/project-image.png";
import ProjectCard from "../../components/ProjectCard";

function BackendDevelopment() {
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
    <section className="mt-12">
      <div className="flex items-center flex-wrap justify-between">
        <h1 className="bg-primary-gradient font-bold text-[32px]">
          Backend Development
        </h1>
        <button
          className="rounded-[16px] px-[16px] py-[12px] gap-3 flex items-center"
          style={{ border: "1px solid #333333" }}
        >
          View All <img src={ArrowForwardIcon} alt="" />
        </button>
      </div>
      <p className="mt-6 text-[14px] text-left">
        We handle the technical side of things, building the functionality that
        powers your website or app, ensuring it runs smoothly and seamlessly
        integrates with other systems. Our expertise in backend development
        ensures robust performance, scalability, and security for your digital
        platform.
      </p>
      <div className="mt-16">
        <div className={`slider-container ${isScrolled ? "scrolled" : ""}`}>
          <div className="slider" ref={sliderRef}>
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BackendDevelopment;
