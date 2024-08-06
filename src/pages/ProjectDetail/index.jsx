import imageBanner from "../../assets/detailBanner.png";
import phoneImage from "../../assets/d5df1a684c8a64b21c41afc880c83aba.png";
import ContactUs from "../ContactUs/ContactUs";
import ProjectDetailBanner from "../../assets/project-detail-banner.png";
import Button from "../../components/Button";
import NativeSpeciesImage from "../../assets/native-species-project-img.png";

function index() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="relative">
          <main>
            <div className="relative h-[75vh]">
              <img
                src={ProjectDetailBanner}
                alt="Desk with phone, plant, and camera"
                className="w-full h-full object-cover"
              />
              <div className="absolute  inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center text-white p-4 text-center">
                <h1 className="font-bold text-[64px] leading-[74px] px-[125px]">
                  EcoVibes Marketplace
                </h1>
                <p className="px-[125px] text-[18px] leading-[27px] my-5">
                  An e-commerce platform promoting sustainable products and
                  eco-friendly living. Features include user-friendly
                  navigation, product reviews, and secure payment options.
                </p>
                <div className="flex justify-center gap-3 items-center">
                  <Button
                    label={"UI/UX Design"}
                    className={"rounded-[48px] text-[14px]"}
                  />
                  <Button
                    label={"Front-end Development"}
                    className={"rounded-[48px] text-[14px]"}
                  />
                  <Button
                    label={"Website"}
                    className={"rounded-[48px] text-[14px]"}
                  />
                </div>
              </div>
            </div>

            <div className=" m-auto lg:max-w-[90%] pt-10 ">
              <h3 className="text-xl font-semibold mb-2">Overview</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Sed ut turpis nec sapien fringilla
                fermentum nec id libero. Quisque porttitor hendrerit lectus, et
                condimentum metus sodales vel. Sed laoreet nulla eget magna
                eleifend, id ultricies lorem vestibulum.
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Key Features</h3>
                <ul className="list-disc pl-5">
                  <li>
                    <p>Lorem ipsum dolor sit amet</p>
                  </li>
                  <li>
                    <p>Consectetur adipiscing elit</p>
                  </li>
                  <li>
                    <p>Vestibulum ante ipsum primis</p>
                  </li>
                  <li>
                    <p>Sed ut turpis nec sapien fringilla fermentum</p>
                  </li>
                  <li>
                    <p>Quisque porttitor hendrerit lectus</p>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">
                  Modules & Screens
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-center">
                  <div
                    className="relative project cursor-pointer w-full h-[300px] sm:h-[350px]"
                    style={{
                      backgroundSize: "cover",
                      borderRadius: "24px",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="absolute bottom-[3%] left-[3%]">
                      <p className="font-bold text-[24px] text-white project-title">
                        Explore Native Species
                      </p>
                      <p className="project-description mt-2 text-white">
                        Discover a wide variety of native plant species tailored
                        to your location. From flowers to trees, the EcoGarden
                        App's extensive database provides detailed information
                        on each species, including growth requirements, ideal
                        planting seasons, and maintenance tips.
                      </p>
                    </div>
                  </div>
                  <div
                    className="relative project cursor-pointer w-full h-[300px] sm:h-[350px]"
                    style={{
                      backgroundSize: "cover",
                      borderRadius: "24px",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="absolute bottom-[3%] left-[3%]">
                      <p className="font-bold text-[24px] text-white project-title">
                        Explore Native Species
                      </p>
                      <p className="project-description mt-2 text-white">
                        Discover a wide variety of native plant species tailored
                        to your location. From flowers to trees, the EcoGarden
                        App's extensive database provides detailed information
                        on each species, including growth requirements, ideal
                        planting seasons, and maintenance tips.
                      </p>
                    </div>
                  </div>
                  <div
                    className="relative project cursor-pointer w-full h-[300px] sm:h-[350px]"
                    style={{
                      backgroundSize: "cover",
                      borderRadius: "24px",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="absolute bottom-[3%] left-[3%]">
                      <p className="font-bold text-[24px] text-white project-title">
                        Explore Native Species
                      </p>
                      <p className="project-description mt-2 text-white">
                        Discover a wide variety of native plant species tailored
                        to your location. From flowers to trees, the EcoGarden
                        App's extensive database provides detailed information
                        on each species, including growth requirements, ideal
                        planting seasons, and maintenance tips.
                      </p>
                    </div>
                  </div>
                  <div
                    className="relative project cursor-pointer w-full h-[300px] sm:h-[350px]"
                    style={{
                      backgroundSize: "cover",
                      borderRadius: "24px",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="absolute bottom-[3%] left-[3%]">
                      <p className="font-bold text-[24px] text-white project-title">
                        Explore Native Species
                      </p>
                      <p className="project-description mt-2 text-white">
                        Discover a wide variety of native plant species tailored
                        to your location. From flowers to trees, the EcoGarden
                        App's extensive database provides detailed information
                        on each species, including growth requirements, ideal
                        planting seasons, and maintenance tips.
                      </p>
                    </div>
                  </div>
                  <div
                    className="relative project cursor-pointer w-full h-[300px] sm:h-[350px]"
                    style={{
                      backgroundSize: "cover",
                      borderRadius: "24px",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="absolute bottom-[3%] left-[3%]">
                      <p className="font-bold text-[24px] text-white project-title">
                        Explore Native Species
                      </p>
                      <p className="project-description mt-2 text-white">
                        Discover a wide variety of native plant species tailored
                        to your location. From flowers to trees, the EcoGarden
                        App's extensive database provides detailed information
                        on each species, including growth requirements, ideal
                        planting seasons, and maintenance tips.
                      </p>
                    </div>
                  </div>
                </div>

                {/* New image section */}

                <ContactUs />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default index;
