import React from "react";
import imageBanner from "../../assets/detailBanner.png";
import phoneImage from "../../assets/d5df1a684c8a64b21c41afc880c83aba.png";
import ContactUs from "../../components/ContactUs";
function Index() {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative">
        {/* Main content */}
        <main>
          {/* Image with overlay text */}
          <div className="relative h-[75vh]">
            <img
              src={imageBanner}
              alt="Desk with phone, plant, and camera"
              className="w-full h-full object-cover"
            />
            <div className="absolute  inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center text-white p-4 text-center">
              <h1 className="font-bold text-[64px] leading-[74px] px-[125px]">
                Creating Memorable User Experiences: Design Principles for
                Success
              </h1>
            </div>
          </div>

          <div className=" m-auto lg:max-w-[90%] pt-10 ">
            <h3 className="text-xl font-semibold mb-2">Heading</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Sed ut augue nec sapien fringilla fermentum
              nec ut libero. Quisque posuere hendrerit lectus, et condimentum
              netus sodales vel. Sed lacinia nulla eget magna volutpat, ut
              ultrices ipsum vestibulum.
            </p>

            {/* New image section */}
            <div className="rounded-3xl overflow-hidden mb-4">
              <img
                src={phoneImage}
                alt="Phone with motivational text"
                className="w-full h-[75vh] object-cover rounded-3xl"
              />
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Heading</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Sed ut augue nec sapien fringilla
                fermentum nec ut libero. Quisque posuere hendrerit lectus, et
                condimentum netus sodales vel. Sed lacinia nulla eget magna
                volutpat, ut ultrices ipsum vestibulum.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Sed ut augue nec sapien fringilla
                fermentum nec ut libero. Quisque posuere hendrerit lectus, et
                condimentum netus sodales vel. Sed lacinia nulla eget magna
                volutpat, ut ultrices ipsum vestibulum. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Consequatur, laborum quaerat
                nostrum dolor voluptatibus blanditiis ab cumque, tempora
                eligendi hic enim eos amet animi aliquam deleniti facilis odio
                rem minima.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Sed ut augue nec sapien fringilla
                fermentum nec ut libero. Quisque posuere hendrerit lectus, et
                condimentum netus sodales vel. Sed lacinia nulla eget magna
                volutpat, ut ultrices ipsum vestibulum. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Consequatur, laborum quaerat
                nostrum dolor voluptatibus blanditiis ab cumque, tempora
                eligendi hic enim eos amet animi aliquam deleniti facilis odio
                rem minima.
              </p>

              {/* New image section */}
              <div className="rounded-3xl overflow-hidden mb-4">
                <img
                  src={phoneImage}
                  alt="Phone with motivational text"
                  className="w-full h-[75vh] object-cover rounded-3xl"
                />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Heading</h3>

              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Sed ut augue nec sapien fringilla
                fermentum nec ut libero. Quisque posuere hendrerit lectus, et
                condimentum netus sodales vel. Sed lacinia nulla eget magna
                volutpat, ut ultrices ipsum vestibulum. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Consequatur, laborum quaerat
                nostrum dolor voluptatibus blanditiis ab cumque, tempora
                eligendi hic enim eos amet animi aliquam deleniti facilis odio
                rem minima.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Sed ut augue nec sapien fringilla
                fermentum nec ut libero. Quisque posuere hendrerit lectus, et
                condimentum netus sodales vel. Sed lacinia nulla eget magna
                volutpat, ut ultrices ipsum vestibulum. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Consequatur, laborum quaerat
                nostrum dolor voluptatibus blanditiis ab cumque, tempora
                eligendi hic enim eos amet animi aliquam deleniti facilis odio
                rem minima.
              </p>

              {/* New image section */}

              <ContactUs />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Index;
