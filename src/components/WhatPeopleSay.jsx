import UserImage from '../assets/team-member.png'

const TestimonialCard = ({ name, title, comment, rating }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col w-80 flex-shrink-0 mr-6">
    <div className="flex items-center mb-4">
      <img src={UserImage} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
    <p className="text-gray-700 mb-4">{comment}</p>
    <div className="flex mt-auto">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </div>
);

const WhatPeopleSay = () => {
  const testimonials = [
    { name: "John D.", title: "CEO, Tech Company", comment: "Great experience working with the team...", rating: 3 },
    { name: "Emily S.", title: "Marketing Director", comment: "Exceeded our expectations in every way...", rating: 4 },
    { name: "David B.", title: "Founder, Solutions Inc.", comment: "Responsive, professional, and delivers results...", rating: 4 },
    { name: "Sarah L.", title: "COO, Innovations Ltd.", comment: "One of the best decisions for our business...", rating: 4 },
    { name: "Michael C.", title: "CTO, Future Tech", comment: "Truly understands client needs...", rating: 4 },
    { name: "John D.", title: "CEO, Tech Company", comment: "Great experience working with the team...", rating: 3 },
    { name: "Emily S.", title: "Marketing Director", comment: "Exceeded our expectations in every way...", rating: 4 },
    { name: "David B.", title: "Founder, Solutions Inc.", comment: "Responsive, professional, and delivers results...", rating: 4 },
    { name: "Sarah L.", title: "COO, Innovations Ltd.", comment: "One of the best decisions for our business...", rating: 4 },
    { name: "Michael C.", title: "CTO, Future Tech", comment: "Truly understands client needs...", rating: 4 },
    { name: "John D.", title: "CEO, Tech Company", comment: "Great experience working with the team...", rating: 3 },
    { name: "Emily S.", title: "Marketing Director", comment: "Exceeded our expectations in every way...", rating: 4 },
    { name: "David B.", title: "Founder, Solutions Inc.", comment: "Responsive, professional, and delivers results...", rating: 4 },
    { name: "Sarah L.", title: "COO, Innovations Ltd.", comment: "One of the best decisions for our business...", rating: 4 },
  
    // Add more testimonials to have at least 6 for two rows
  ];

  return (
    <div className="py-12 w-full overflow-hidden">
      <h2 className="text-[40px] font-bold text-center mb-8">What People Say</h2>
      <div className="flex flex-col space-y-6">
        {[0, 1].map((rowIndex) => (
          <div key={rowIndex} className="flex overflow-x-auto pb-4 hide-scrollbar">
            {testimonials.slice(rowIndex * 3, rowIndex * 5 + 5).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatPeopleSay;