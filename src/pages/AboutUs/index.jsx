import OurMissionImage from '../../assets/our-mission-image.png'
import OurValuesImage from '../../assets/our-values-image.png'
import WhyChooseUsImage from '../../assets/our-values-image.png'
import ContactUs from '../../components/ContactUs';

function AboutUs() {
  return (
    <>
      <div className="text-center container mx-auto px-5">
        <h1 className="text-[40px] font-bold mt-16">About Balawal IT House</h1>
        <p className="text-[18px] mt-5">
          At Balawal IT House, we're more than just a team of developers and
          designers. We're your partners in digital innovation, dedicated to
          crafting solutions that propel your business forward. With a focus on
          creativity, collaboration, and excellence, we strive to exceed your
          expectations and deliver impactful results. Learn more about our
          journey, values, and commitment to your success.
        </p>
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 py-[60px] items-center">
          <div className="text-left">
            <p className="font-bold text-[24px]">Our Mission</p>
            <p className="mt-4 text-[18px]">
              Our mission at Balawal IT House is simple: to empower businesses
              with cutting-edge digital solutions that drive success. We believe
              in the power of technology to transform businesses and enrich
              lives. Through our expertise in web development, mobile apps,
              UI/UX design, and digital marketing, we aim to create meaningful
              experiences that make a difference.
            </p>
          </div>
          <div>
            <img src={OurMissionImage} alt="" className="ml-auto w-full" />
          </div>
        </section>
        <section className="flex flex-col-reverse md:flex-row gap-8 py-[60px] items-center">
          <div>
            <img src={OurValuesImage} alt="" className="mr-auto w-full" />
          </div>
          <div className="text-left">
            <p className="font-bold text-[24px]">Our Values</p>
            <ul className="list-disc mt-4">
              <li>
                <p className="text-[18px]">
                  Innovation: We embrace creativity and push the boundaries of
                  what's possible.
                </p>
              </li>
              <li>
                <p className="text-[18px]">
                  Excellence: We strive for excellence in everything we do,
                  delivering top-notch solutions that exceed expectations.
                </p>
              </li>
              <li>
                <p className="text-[18px]">
                  Collaboration: We believe in the power of teamwork and
                  collaboration, working closely with our clients to achieve
                  shared goals.
                </p>
              </li>
              <li>
                <p className="text-[18px]">
                  Integrity: We conduct business with honesty, integrity, and
                  transparency, building trust with our clients and partners.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 py-[60px] items-center">
          <div className="text-left">
            <p className="font-bold text-[24px]">
              Why Choose Balawal IT House?
            </p>
            <ul className="list-disc mt-4 ml-5">
              <li>
                <p className="text-[18px]">
                  Expertise: Our team consists of seasoned professionals with
                  years of experience in their respective fields.
                </p>
              </li>
              <li>
                <p className="text-[18px]">
                  Customization: We tailor our solutions to meet your unique
                  business needs, ensuring a personalized approach.
                </p>
              </li>
              <li>
                <p className="text-[18px]">
                  Communication: We value open and transparent communication,
                  keeping you informed every step of the way.
                </p>
              </li>
              <li>
                <p className="text-[18px]">
                  Results-Driven: We're committed to delivering tangible results
                  that drive business growth and success.
                </p>
              </li>
              <li>
                <p className="text-[18px]">
                  Customer-Centric: Your satisfaction is our top priority, and
                  we go above and beyond to exceed your expectations.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <img src={WhyChooseUsImage} alt="" className="ml-auto w-full" />
          </div>
        </section>
        <ContactUs />
      </div>
    </>
  );
}

export default AboutUs