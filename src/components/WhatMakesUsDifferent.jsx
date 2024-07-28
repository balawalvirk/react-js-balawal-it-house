import React from "react";

function WhatMakesUsDifferent() {
  const cards = [
    {
      title: "Expertise",
      description:
        "Our seasoned professionals bring years of industry experience to the table, ensuring top-quality solutions tailored to your needs.",
      flexDirection: "row",
    },
    {
      title: "Customization",
      description:
        "We specialize in crafting bespoke solutions that align perfectly with your brand identity, objectives, and target audience.",
      flexDirection: "row-reverse",
    },
    {
      title: "Innovation",
      description:
        "We stay at the forefront of technology trends, leveraging cutting-edge tools and techniques to deliver innovative solutions that give you a competitive edge.",
      flexDirection: "row",
    },
    {
      title: "Collaboration",
      description:
        "We prioritize open communication and collaboration throughout the project, ensuring that your vision is realized every step of the way.",
      flexDirection: "row-reverse",
    },
    {
      title: "Support",
      description:
        "Our commitment to your success doesn't end with project delivery. We provide ongoing support and assistance to help you navigate challenges and maximize your digital presence.",
      flexDirection: "row",
    },
    {
      title: "Results-Oriented",
      description:
        "We are dedicated to delivering tangible results that drive your business forward, whether it's increased sales, enhanced brand visibility, or improved user engagement.",
      flexDirection: "row-reverse",
    },
  ];

  return (
    <section className="py-[120px] container mx-auto">
      <h1 className="font-bold text-[40px] text-center">
        What Makes Us Different
      </h1>
      <div className="mt-16">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#F5F5F5] rounded-[24px] flex items-center mt-5 p-[32px] gap-10"
            style={{ boxShadow: `0px 0px 0px 0px #0047FF00`, flexDirection: card.flexDirection }}
          >
            <p className="bg-primary-gradient text-[64px] font-[500]">{card.title}</p>
            <p className="text-[18px]">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatMakesUsDifferent;
    