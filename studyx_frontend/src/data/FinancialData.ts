
interface DataType{
   id:number;
   thumb:string;
   sub_title:string;
   title:string;
   desc:string;
   icon:string;
}

const financial_data:DataType[]=[
   {
      id: 1,
      thumb: "/assets/img/blog/financial-thumb1.png",
      sub_title: "Our Mission",
      title: "Driven by Purpose, Guided by Results",
      desc: "Our mission is simple — to simplify complex financial challenges and provide actionable solutions that help our clients grow, protect, and manage their wealth with confidence",
      icon: "/assets/img/icon/financial-icon1.png",
   },
   {
      id: 2,
      thumb: "/assets/img/blog/financial-thumb2.png",
      sub_title: "Our Story",
      title: "Built on Trust. Backed by Experience",
      desc: "Founded by industry veterans, our consulting firm started with a passion for empowering businesses to thrive financially. Over the years, we’ve worked with startups",
      icon: "/assets/img/icon/financial-icon2.png",
   },
   {
      id: 3,
      thumb: "/assets/img/blog/financial-thumb3.png",
      sub_title: "Our Values",
      title: "The Principles That Guide Every Step We Take",
      desc: "At the heart of our consulting practice lies a clear set of values that shape every relationship, decision, and solution we deliver. These principles are more",
      icon: "/assets/img/icon/financial-icon3.png",
   },
];

export default financial_data;