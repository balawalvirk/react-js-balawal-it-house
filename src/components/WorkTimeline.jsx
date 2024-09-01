import React from "react";

const WorkStep = ({ number, title, descriptions }) => {
  return (
    <div className="flex md:flex-col items-center gap-5 flex-row w-full md:1/5 pl-10 md:pl-0">
      <div className="text-gray-200 text-[80px] font-bold leading-none ">
        {number}
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-center mb-1">{title}</h3>
        <p className="text-xs text-center text-gray-600">{descriptions}</p>
      </div>
    </div>
  );
};

const WorkTimeline = () => {
  const steps = [
    {
      number: "1",
      title: "Requirement Analysis",
      descriptions: "Understanding objectives\nIdentifying challenges",
    },
    {
      number: "2",
      title: "Planning & Design",
      descriptions: "Developing detailed plan\nCreating blueprints",
    },
    {
      number: "3",
      title: "Development Phase",
      descriptions: "Coding or creating solution\nEnsuring alignment",
    },
    {
      number: "4",
      title: "Testing & Quality Assurance",
      descriptions: "Testing rigorously\nEnsuring quality",
    },
    {
      number: "5",
      title: "Maintenance & Support",
      descriptions: "Providing ongoing support\nAddressing updates, issues",
    },
  ];

  return (
    <div className="lg:max-w-[90%] mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
      <div className="relative">
        <div className="absolute top-3 left-0 right-0 h-0.5 bg-green-500 hidden md:block"></div>
        <div className="md:flex justify-between hidden">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="w-6 h-6 bg-green-500 rounded-full z-10 relative"></div>
              {index < steps.length - 1 && <div className="flex-grow"></div>}
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center mt-4 flex-col md:flex-row justify-center md:justify-between gap-5 md:gap-2">
          {steps.map((step, index) => (
            <WorkStep key={index} {...step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkTimeline;
