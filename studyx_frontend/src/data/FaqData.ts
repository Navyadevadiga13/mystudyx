interface DataType {
   id: number;
   page: string
   title: string;
   desc: string;
   showAnswer: boolean;
};

const faq_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      showAnswer: false,
      title: " What documents do I need to apply for study abroad?",
      desc: "You’ll need academic transcripts, language test scores (like IELTS or TOEFL), a valid passport, and often a statement of purpose and recommendation letters.",
   },
   {
      id: 2,
      page: "home_1",
      showAnswer: false,
      title: "How do I find and apply for scholarships?",
      desc: "Research scholarships from universities, governments, and private organizations, then apply online with your academic records and required documents.",
   },
   {
      id: 3,
      page: "home_1",
      showAnswer: false,
      title: "Can I study abroad if I don’t know the local language?",
      desc: "Many courses are in English, but knowing basics of the local language helps for daily life and networking.",
   },
   {
      id: 4,
      page: "home_1",
      showAnswer: false,
      title: "What is the student visa process like?",
      desc: "After admission, apply for a visa with your offer letter, financial proofs, academic documents, and follow the country’s embassy guidelines.",
   },
   {
      id: 5,
      page: "home_1",
      showAnswer: false,
      title: "What types of accommodations can I expect as a student abroad?",
      desc: "Options include university hostels, private apartments, and homestays; universities often help students find suitable housing before arrival.",
   },

   // inner_page
   {
      id: 1,
      page: "inner_page",
      showAnswer: false,
      title: "What industries do you specialize in?",
      desc: "We work with clients across a wide range of industries including real estate, healthcare, SaaS, legal, e-commerce, and more. Our financial strategies are tailored to each sector’s unique needs.",
   },
   {
      id: 2,
      page: "inner_page",
      showAnswer: false,
      title: "Do you offer one-time consultations or ongoing support?",
      desc: "We work with clients across a wide range of industries including real estate, healthcare, SaaS, legal, e-commerce, and more. Our financial strategies are tailored to each sector’s unique needs.",
   },
   {
      id: 3,
      page: "inner_page",
      showAnswer: false,
      title: "Can I customize a plan based on my business size & budget?",
      desc: "We work with clients across a wide range of industries including real estate, healthcare, SaaS, legal, e-commerce, and more. Our financial strategies are tailored to each sector’s unique needs.",
   },
   {
      id: 4,
      page: "inner_page",
      showAnswer: false,
      title: "Is my financial data kept confidential?",
      desc: "We work with clients across a wide range of industries including real estate, healthcare, SaaS, legal, e-commerce, and more. Our financial strategies are tailored to each sector’s unique needs.",
   },
   {
      id: 5,
      page: "inner_page",
      showAnswer: false,
      title: "How do I know which package is right for me?",
      desc: "We work with clients across a wide range of industries including real estate, healthcare, SaaS, legal, e-commerce, and more. Our financial strategies are tailored to each sector’s unique needs.",
   },
   {
      id: 6,
      page: "inner_page",
      showAnswer: false,
      title: "What industries do you specialize in?",
      desc: "We work with clients across a wide range of industries including real estate, healthcare, SaaS, legal, e-commerce, and more. Our financial strategies are tailored to each sector’s unique needs.",
   },
   {
      id: 7,
      page: "inner_page",
      showAnswer: false,
      title: "Do you offer one-time consultations or ongoing support?",
      desc: "We work with clients across a wide range of industries including real estate, healthcare, SaaS, legal, e-commerce, and more. Our financial strategies are tailored to each sector’s unique needs.",
   },
   {
      id: 8,
      page: "inner_page",
      showAnswer: false,
      title: "Can I customize a plan based on my business size & budget?",
      desc: "We work with clients across a wide range of industries including real estate, healthcare, SaaS, legal, e-commerce, and more. Our financial strategies are tailored to each sector’s unique needs.",
   },
   {
      id: 9,
      page: "inner_page",
      showAnswer: false,
      title: "Is my financial data kept confidential?",
      desc: "We work with clients across a wide range of industries including real estate, healthcare, SaaS, legal, e-commerce, and more. Our financial strategies are tailored to each sector’s unique needs.",
   },
   {
      id: 10,
      page: "inner_page",
      showAnswer: false,
      title: "How do I know which package is right for me?",
      desc: "We work with clients across a wide range of industries including real estate, healthcare, SaaS, legal, e-commerce, and more. Our financial strategies are tailored to each sector’s unique needs.",
   },
];

export default faq_data;