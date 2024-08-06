function TrackRecord() {
  let items = [
    {
      stat: "300+",
      desc: "Apps of varying complexity",
    },
    {
      stat: "6+",
      desc: "Years of experience in the industry",
    },
    {
      stat: "99%",
      desc: "Job Success Rate",
    },
    {
      stat: "1000s",
      desc: "of App users",
    },
    {
      stat: "99%",
      desc: "On-Time Delivery Rate",
    },
    {
      stat: "$500M",
      desc: "Raised by our clients Worldwide",
    },
  ];
  return (
    <section className="py-[50px] text-center lg:max-w-[90%]  mx-auto">
      <h1 className="font-semibold text-[40px]">Our Proven Track Record</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-16">
        {items?.map((item, index) => (
          <div
            className="record-card p-[24px] rounded-[24px] bg-[#F5F5F5] sm:grid-cols-6 md:grid-cols-4 text-center"
            key={index}
          >
            <h1>{item.stat}</h1>
            <p className="font-[500]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrackRecord;
