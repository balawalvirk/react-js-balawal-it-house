import HeroImage from "../assets/hero-image-home-page.svg";
import Phone from "../assets/phone.svg";
import Button from "./Button";

function HeroSection() {
  return (
    <section className="py-[60px] grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 md:px-16">
      <div className="flex flex-col justify-center items-start">
        <h1 className="hero-heading text-[30px] md:text-[64px] md:leading-[74px]">
          Transform Your Ideas into Reality
        </h1>
        <p style={{ lineHeight: "27px" }} className="font-[400] mt-[2.5rem]">
          Partner with us to bring your app ideas to life. Our expert team is
          dedicated to delivering exceptional results from concept to launch.
        </p>
        <p className="mt-[2.5rem]">
          Get a Free 30-Minute Strategy Call and a Free First Update
        </p>
        <Button
          icon={Phone}
          label={"Book a Strategy Call"}
          labelClassName={"font-[700] text-[16px]"}
          className="mt-[2.5rem]"
        />
      </div>
      <div className="hidden lg:block">
        <img src={HeroImage} alt="Hero Image" />
      </div>
    </section>
  );
}
0;

export default HeroSection;
