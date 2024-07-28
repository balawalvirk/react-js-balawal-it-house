import { useEffect, useRef, useState } from 'react'
import image from '../assets/BITH-Logo.svg'

function PartnersAndClients() {

  const images = [
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
    image,
  ];
  const sliderRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (sliderRef.current.scrollLeft > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("scroll", handleScroll);
    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="py-[60px] bg-[#F5F5F5]">
      <h1 className="font-bold text-center text-[54px]">
        Our Partners & Clients
      </h1>
      <div className={`slider-container ${isScrolled ? "scrolled" : ""}`}>
        <div className="slider" ref={sliderRef}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="slider-image"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersAndClients