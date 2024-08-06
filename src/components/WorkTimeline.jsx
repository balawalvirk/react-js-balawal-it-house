import React from 'react'

const WorkStep = ({ number, title, descriptions }) => {
  return (
    <div className="flex flex-col items-center w-1/5">
      <div className="text-gray-200 text-[80px] font-bold leading-none ">{number}</div>
      <h3 className="text-lg font-semibold text-center mb-1">{title}</h3>
      <p className="text-xs text-center text-gray-600">{descriptions}</p>
    </div>
  )
}

const WorkTimeline = () => {
  const steps = [
    { number: "1", title: "Requirement Analysis", descriptions: "Understanding objectives\nIdentifying challenges" },
    { number: "2", title: "Planning & Design", descriptions: "Developing detailed plan\nCreating blueprints" },
    { number: "3", title: "Development Phase", descriptions: "Coding or creating solution\nEnsuring alignment" },
    { number: "4", title: "Testing & Quality Assurance", descriptions: "Testing rigorously\nEnsuring quality" },
    { number: "5", title: "Maintenance & Support", descriptions: "Providing ongoing support\nAddressing updates, issues" },
  ];

  return (
    <div className="lg:max-w-[90%] mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
      <div className="relative">
        <div className="absolute top-3 left-0 right-0 h-0.5 bg-green-500"></div>
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="w-6 h-6 bg-green-500 rounded-full z-10 relative"></div>
              {index < steps.length - 1 && <div className="flex-grow"></div>}
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          {steps.map((step, index) => (
            <WorkStep key={index} {...step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkTimeline