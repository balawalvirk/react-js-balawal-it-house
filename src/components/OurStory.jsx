import Button from "../components/Button";
import ArrowRight from "../assets/arrow-right.svg";
import OurStoryImage from "../assets/our-story-section-image.svg";

function OurStory() {
  return (
    <div className="lg:max-w-[90%] m-auto px-5">
      <section className="flex gap-4 md:gap-8 py-[60px] flex-col lg:flex-row">
        <div className="bg-[#F5F5F5] rounded-[24px] p-[4rem] md:col-span-8">
          <p className="font-bold text-[32px]">Our Story</p>
          <p className="mt-5">
            At Balawal IT House, we specialize in turning innovative ideas into
            cutting-edge applications. With over 6 years of experience and a
            portfolio of 300+ successful apps, we have built a reputation for
            delivering high-quality solutions tailored to our clients' needs.{" "}
          </p>
          <p className="mt-3">
            Our dedicated team of experts is committed to excellence, ensuring
            every project meets the highest standards of performance and design.
            We take pride in our collaborative approach, working closely with
            clients to understand their vision and bring it to life.
          </p>
          <Button
            rightIcon={ArrowRight}
            label={"Learn More"}
            className={"font-bold mt-5"}
            rightIconClass={"w-[15px] h-[15px]"}
          />
        </div>
        <div className="col-span-1 md:col-span-4">
          <img
            src={OurStoryImage}
            className="w-full md:w-[420px] mx-auto"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default OurStory;
