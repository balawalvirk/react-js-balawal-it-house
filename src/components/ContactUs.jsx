import ContactUsImage from "../assets/contactus.png";
import PhoneImage from "../assets/phone.svg";
import Button from "./Button";

const ContactUs = () => {
  return (
    <section className="pt-[120px] container mx-auto px-5">
      <h1 className="font-bold text-[40px] text-center">
        Book a Free 30-Minute Strategy Call & a Free First Update
      </h1>
      <div className="mt-16 bg-[#F5F5F5] rounded-[24px] p-[8px] flex gap-4 items-center w-fit">
        <img src={ContactUsImage} alt="" className="hidden md:block" />
        <div className="py-3">
          <p className="text-[18px] font-[400] text-left">
            Ready to start your next project? Fill out the form below and get to
            book a free 30-minute strategy call & a free first update of your
            project.
          </p>
          <form className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="font-[500px] text-[14px] opacity-75">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="contact-us-form-input"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-[500px] text-[14px] opacity-75">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="contact-us-form-input"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5">
              <div className="flex flex-col">
                <label className="font-[500px] text-[14px] opacity-75">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="contact-us-form-input"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-[500px] text-[14px] opacity-75">
                  Organization
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="contact-us-form-input"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <label className="font-[500px] text-[14px] opacity-75">
                Briefly describe your project requirements and objectives.
              </label>
              <textarea
                name=""
                id=""
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
                label={"Book a Strategy Call"}
                labelClassName={"text-[14px]"}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
