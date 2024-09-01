import ContactUs from "../ContactUs/ContactUs";
import ProjectDetailBanner from "../../assets/project-detail-banner.png";
import Button from "../../components/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import NativeSpeciesImage from "../../assets/native-species-project-img.png";
import CollapseIcon from "../../assets/collapse-icon.svg";
import {
  ArrowBack,
  ArrowForward,
  ArrowLeft,
  ArrowRight,
} from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100vh",
  bgcolor: "transparent",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function index() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                  {Array.from({ length: 5 }).map((item, index) => (
                    <div
                      className="relative project cursor-pointer w-full h-[300px] sm:h-[350px]"
                      key={index}
                      onClick={handleOpen}
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
                          Discover a wide variety of native plant species
                          tailored to your location. From flowers to trees, the
                          EcoGarden App's extensive database provides detailed
                          information on each species, including growth
                          requirements, ideal planting seasons, and maintenance
                          tips.
                        </p>
                      </div>
                    </div>
                  ))}
                  {/* <div
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
                  </div> */}
                </div>

                {/* New image section */}

                <ContactUs />
              </div>
            </div>
          </main>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center justify-between h-full gap-3 md:gap-20">
            <div className="bg-white rounded-full p-5">
              <ArrowBack htmlColor="#333333" />
            </div>
            <div className="w-full flex-grow rounded-[24px] hidden xl:flex">
              <img
                src={NativeSpeciesImage}
                alt=""
                className="w-[70%] object-cover h-full"
                style={{
                  borderTopLeftRadius: "24px",
                  borderBottomLeftRadius: "24px",
                }}
              />
              <div
                className="p-[24px] bg-white flex-grow cursor-pointer basis-[30%]"
                onClick={handleClose}
                style={{
                  borderTopRightRadius: "24px",
                  borderBottomRightRadius: "24px",
                }}
              >
                <img
                  src={CollapseIcon}
                  alt=""
                  width={24}
                  height={24}
                  className="ml-auto"
                />
                <h1 className="font-bold mt-4 text-[32px] leading-[43.2px]">
                  Explore Native Species
                </h1>
                <p className="text-[18px] mt-3">
                  Discover a wide variety of native plant species tailored to
                  your location. From flowers to trees, the EcoGarden App's
                  extensive database provides detailed information on each
                  species, including growth requirements, ideal planting
                  seasons, and maintenance tips.
                </p>
              </div>
            </div>
            <div className="w-full flex-grow rounded-[24px] xl:hidden relative">
              <img
                src={CollapseIcon}
                alt=""
                width={24}
                height={24}
                className="ml-auto absolute top-[5%] right-[5%]"
              />
              <img
                src={NativeSpeciesImage}
                alt=""
                className="w-full object-cover h-full"
                style={{
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                }}
              />
              <div
                className="p-[24px] bg-white flex-grow cursor-pointer w-full"
                onClick={handleClose}
                style={{
                  borderBottomLeftRadius: "24px",
                  borderBottomRightRadius: "24px",
                }}
              >
                <h1 className="font-bold mt-4 text-[32px] leading-[43.2px]">
                  Explore Native Species
                </h1>
                <p className="text-[18px] mt-3">
                  Discover a wide variety of native plant species tailored to
                  your location. From flowers to trees, the EcoGarden App's
                  extensive database provides detailed information on each
                  species, including growth requirements, ideal planting
                  seasons, and maintenance tips.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-full p-5">
              <ArrowForward htmlColor="#333333" />
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default index;
