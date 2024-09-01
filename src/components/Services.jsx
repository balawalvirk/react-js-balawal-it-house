import UIUXImage from "../assets/ui-ux.svg";
import FrontendDevelopmentImage from "../assets/frontend-development.svg";
import BackendDevelopmentImage from "../assets/backend-development.svg";
import SoftwareDevelopmentImage from "../assets/software-development.svg";
import MobileAppDevelopment from "../assets/mobile-app-development.svg";
import WebDevelopment from "../assets/web-development.svg";
import ECommerceSolutions from "../assets/e-commerce-solutions.svg";
import CloudServices from "../assets/cloud-services.svg";
import LearnMoreArrowIcon from "../assets/learn-more-arrow-icon.svg";

function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "We create user-friendly interfaces and engaging experiences for your website or app, ensuring it's easy to navigate and l...",
      image: UIUXImage,
    },
    {
      title: "Frontend Development",
      description:
        "Our team brings your designs to life with visually appealing and responsive websites, making sure your online presence...",
      image: FrontendDevelopmentImage,
    },
    {
      title: "Backend Development",
      description:
        "We handle the technical side of things, building the functionality that powers your website or app, ensuring it ru...",
      image: BackendDevelopmentImage,
    },
    {
      title: "Mobile App Development",
      description:
        "We develop mobile apps that keep your audience engaged on the go, delivering seamless experiences across iOS and...",
      image: MobileAppDevelopment,
    },
    {
      title: "Software Development",
      description:
        "We create custom software solutions tailored to your unique business needs, streamlining processes and helping you ac...",
      image: SoftwareDevelopmentImage,
    },
    {
      title: "Web Development",
      description:
        "From dynamic websites to custom features, we build online experiences that captivate your audience and drive results f...",
      image: WebDevelopment,
    },
    {
      title: "Cloud Services",
      description:
        "From dynamic websites to custom features, we build online experiences that captivate your audience and drive results f...",
      image: CloudServices,
    },
    {
      title: "E-commerce Solutions",
      description:
        "We set up online stores that make it easy for your customers to shop securely and conveniently, ensuring a seamless ex...",
      image: ECommerceSolutions,
    },
  ];

  return (
    <section className="py-[60px] text-center  lg:max-w-[90%]  mx-auto px-5">
      <h1 className="font-semibold text-[40px]">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-20 justify-items-center mt-16">
        {services.map((service) => (
          <div className="text-center" key={service.title}>
            <img
              src={service.image}
              alt=""
              className="mx-auto"
              height={72}
              width={72}
            />
            <p className="font-bold text-[24px] mt-3">{service.title}</p>
            <p className="text-[14px] mt-3 opac75">{service.description}</p>
            <p className="flex items-center gap-3 justify-center mt-3 font-[500] bg-primary-gradient">
              Learn More <img src={LearnMoreArrowIcon} alt="" />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
