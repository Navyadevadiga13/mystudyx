interface DataType {
   id: number;
   page: string;
   title: string;
   desc: string;
   price: number;
   time: string;
   list: {
      icon: string;
      title: string
   }[];
   active?:string;
}

const pricing_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      title: "Starter Plan",
      desc: "Basic task & project management",
      price: 199,
      time: "One-time",
      list: [
         { icon: "/assets/img/icon/cross.png", title: "Financial Health Check" }, { icon: "/assets/img/icon/cross.png", title: "1-Hour Strategy Session" }, { icon: "/assets/img/icon/cross.png", title: "Budget Planning Template" },
         { icon: "/assets/img/icon/check.png", title: "Email Support (5 Days)" }, { icon: "/assets/img/icon/check.png", title: "Data Analytics & Insights" }, { icon: "/assets/img/icon/check.png", title: "Automation & Process Optimization" },
      ]
   },
   {
      id: 2,
      page: "home_1",
      title: "Growth Plan",
      desc: "Advanced features integrations",
      price: 299,
      time: "One-time",
      active:"groth-itemw",
      list: [
         { icon: "/assets/img/icon/cross.png", title: "Multi-user Access" }, { icon: "/assets/img/icon/check.png", title: "Everything in Starter" }, { icon: "/assets/img/icon/check.png", title: "Cash Flow Forecasting" },
         { icon: "/assets/img/icon/check.png", title: "Monthly Consulting Call (1 Hour)" }, { icon: "/assets/img/icon/check.png", title: "Customized Reports" }, { icon: "/assets/img/icon/check.png", title: "Priority Email Support" },
      ]
   },
   {
      id: 3,
      page: "home_1",
      title: "Enterprise Plan",
      desc: "Custom solutions for large teams",
      price: 499,
      time: "month",
      list: [
         { icon: "/assets/img/icon/check.png", title: "Custom Pricing" }, { icon: "/assets/img/icon/check.png", title: "Dedicated Financial Consultant" }, { icon: "/assets/img/icon/check.png", title: "On-Demand Strategy Sessions" },
         { icon: "/assets/img/icon/check.png", title: "Advanced Financial Modeling" }, { icon: "/assets/img/icon/check.png", title: "KPI Dashboards & Insights" }, { icon: "/assets/img/icon/check.png", title: "Full Email + Call Support" },
      ]
   },
]

export default pricing_data;