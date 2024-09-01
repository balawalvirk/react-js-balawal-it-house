import ContactUs from "../../components/ContactUs";
import BackendDevelopment from "./BackendDevelopment";
import CloudServices from "./CloudServices";
import ECommerceSolutions from "./ECommerceSolutions";
import FrontendDevelopment from "./FrontendDevelopment";
import MobileAppDevelopment from "./MobileAppDevelopment";
import SoftwareDevelopment from "./SoftwareDevelopment";
import UXUIDesign from "./UXUIDesign";
import WebDevelopment from "./WebDevelopment";

function index() {
  return (
    <>
      <div className="text-center container mx-auto px-5">
        <h1 className="text-[40px] font-bold mt-16">
          Digital Solutions Tailored to Your Success
        </h1>
        <p className="text-[18px] mt-5">
          Unlock the full potential of your online presence with our diverse
          range of digital services. Whether you're looking to launch a new
          website or enhance your digital marketing strategy, our team is here
          to help you achieve your goals with precision and expertise.
        </p>
        <div
          className="flex justify-between gap-8 rounded-[16px] w-fit mx-auto mt-10"
          style={{ border: "1px solid #C5C5C5" }}
        >
          <input
            type="text"
            placeholder="Search a project..."
            className="bg-transparent border-none outline-none p-[1rem] text-[18px] sm:w-[400px]"
          />
        </div>
        <UXUIDesign />
        <FrontendDevelopment />
        <BackendDevelopment />
        <MobileAppDevelopment />
        <SoftwareDevelopment />
        <WebDevelopment />
        <CloudServices />
        <ECommerceSolutions />
        <ContactUs />
      </div>
    </>
  );
}

export default index