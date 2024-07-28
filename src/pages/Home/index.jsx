import ContactUs from "../../components/ContactUs";
import FeaturedArticles from "../../components/FeaturedArticles";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import IndustryInsights from "../../components/IndustryInsights";
import Navigation from "../../components/Navigation";
import OurStory from "../../components/OurStory";
import OurWork from "../../components/OurWork";
import PartnersAndClients from "../../components/Partners&Clients";
import Services from "../../components/Services";
import TrackRecord from "../../components/TrackRecord";
import WhatMakesUsDifferent from "../../components/WhatMakesUsDifferent";

function index() {
  return (
    <div className="">
      <HeroSection />
      <PartnersAndClients />
      <OurStory />
      <TrackRecord />
      <Services />
      <OurWork />
      <WhatMakesUsDifferent />
      <IndustryInsights />
      <FeaturedArticles />
      <ContactUs />
    </div>
  );
}

export default index;
