import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full text-left bg-gray-100 p-4 rounded-lg flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 text-green-500 transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="bg-white p-4 rounded-b-lg mt-1">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of IT services including software development, web design, and IT consulting."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project duration varies depending on complexity. We provide detailed timelines during our initial consultation."
    },
    {
      question: "How much does your services cost?",
      answer: "Our pricing is tailored to each project's specific requirements. Contact us for a personalized quote."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-project support and maintenance services."
    },
    {
      question: "How do I get started with your services?",
      answer: "Simply reach out to us via phone or email to schedule an initial consultation."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
      <div className="max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;