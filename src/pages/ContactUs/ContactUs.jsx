import MapsImage from "../../assets/maps-image.png";
import Button from "../../components/Button";
import PhoneImage from "../../assets/phone.svg";
import EmailIconWithBg from "../../assets/email-icon-with-bg.svg";
import PhoneIconWithBg from "../../assets/phone-icon-with-bg.svg";
import LocationIconWithBg from "../../assets/location-icon-with-bg.svg";
import ProjectCard from "../../components/ProjectCard";
import ProjectImage from "../../assets/project-image.png";
import OurWork from "../../components/OurWork";

function ContactUs() {
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
      <div className="contact-us text-center">
        <div className="font-bold text-[40px] mt-16">
          <h1>Get in Touch</h1>
        </div>
        <p className="text-[18px] mt-5">
          Have a question, comment, or need assistance? We’re here to help. Fill
          out the form below and we’ll get back to you as soon as possible.
        </p>
        <div className="rounded-[24px] p-[8px] bg-[#F5F5F5] mt-10 flex gap-5 container mx-auto">
          <img
            src={MapsImage}
            alt=""
            className="w-1/2 inline-block object-cover"
          />
          <div className="w-1/2 inline-block p-4">
            <div className="flex flex-col mt-3">
              <label className="font-[500px] text-[14px] opacity-75">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Type here..."
                className="contact-us-form-input"
              />
            </div>
            <div className="flex flex-col mt-5">
              <label className="font-[500px] text-[14px] opacity-75">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="contact-us-form-input"
              />
            </div>
            <div className="mt-5 flex flex-col">
              <label className="font-[500px] text-[14px] opacity-75">
                Message
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="What's on your mind?"
                className="contact-us-form-input resize-none"
              ></textarea>
            </div>
            <div className="flex justify-between items-center my-7 flex-wrap">
              <p>
                By submitting this form, you agree to our{" "}
                <span className="bg-primary-gradient text-[14px]">
                  Privacy Policy
                </span>
                .
              </p>
              <Button
                leftIcon={PhoneImage}
                label={"Send Message"}
                labelClassName={"text-[14px]"}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col sm:flex-row gap-14 mt-32 container mx-auto">
          <div className="rounded-[16px] p-[24px] bg-[#F5F5F5] relative flex-grow">
            <img
              src={PhoneIconWithBg}
              alt=""
              className="absolute"
              style={{
                left: "50%",
                right: "50%",
                transform: "translate(-50%, -50%)",
                top: "0",
              }}
            />
            <p className="font-bold pt-[3rem]">Call Us Now</p>
            <p className="text-[18px]">+92 333 4444 555</p>
          </div>
          <div className="rounded-[16px] p-[24px] bg-[#F5F5F5] relative flex-grow">
            <img
              src={EmailIconWithBg}
              alt=""
              className="absolute"
              style={{
                left: "50%",
                right: "50%",
                transform: "translate(-50%, -50%)",
                top: "0",
              }}
            />
            <p className="font-bold pt-[3rem]">Send Us a Mail</p>
            <p className="text-[18px]">example@gmail.com</p>
          </div>
          <div className="rounded-[16px] p-[24px] bg-[#F5F5F5] relative flex-grow">
            <img
              src={LocationIconWithBg}
              alt=""
              className="absolute"
              style={{
                left: "50%",
                right: "50%",
                transform: "translate(-50%, -50%)",
                top: "0",
              }}
            />
            <p className="font-bold pt-[3rem]">Visit Our Office</p>
            <p className="text-[18px]">Office 123, Sialkot, Pakistan</p>
          </div>
        </div>
        {/* <div className="mt-20">
          <h1 className="text-center text-[40px] font-bold mb-10">Our Work</h1>
          <div className="flex items-center gap-4 justify-start flex-nowrap overflow-auto px-[5rem]">
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </div> */}
        <div className="mt-12">
          <OurWork />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
