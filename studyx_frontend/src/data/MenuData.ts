
interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    mega_menus?: {
        id: number;
        thumb: string;
        link: string;
        title: string;
    }[];
    sub_menus?: {
        link: string;
        title: string;
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        has_dropdown: true,
        // mega_menus: [
        //     {
        //         id: 1,
        //         thumb: "/assets/img/banner/home1.png",
        //         link: "/",
        //         title: "Home 01",
        //     },
        //     {
        //         id: 2,
        //         thumb: "/assets/img/banner/home2.png",
        //         link: "/home-two",
        //         title: "Home 02",
        //     },
        //     {
        //         id: 3,
        //         thumb: "/assets/img/banner/home3.png",
        //         link: "/home-three",
        //         title: "Home 03",
        //     },
        // ],
    },
    {
        id: 2,
        has_dropdown: false,
        title: "About us",
        link: "https://www.wizx.org/",
    },
    {
        id: 3,
        title: "University Courses",
        link: "/courses",
        has_dropdown: true,
        // sub_menus: [
        //     { link: "/services", title: "Services" },
        //     { link: "/services-details", title: "Services Details" },
        // ],
    },
    {
        id: 4,
        title: "Services",
        link: "/service",
        has_dropdown: true,
        // sub_menus: [
        //     { link: "/services", title: "Services" },
        //     { link: "/services-details", title: "Services Details" },
        // ],
    },
    // {
    //     id: 4,
    //     title: "Case",
    //     link: "#",
    //     has_dropdown: true,
    //     sub_menus: [
    //         { link: "/case-studies", title: "Case studies" },
    //         { link: "/case-details", title: "Case Details" },
    //     ],
    // },
    // {
    //     id: 5,
    //     title: "Blog",
    //     link: "#",
    //     has_dropdown: true,
    //     sub_menus: [
    //         { link: "/blog", title: "Blog" },
    //         { link: "/blog-details", title: "Blog Details" },
    //     ],
    // },
    // {
    //     id: 6,
    //     title: "Pages",
    //     link: "#",
    //     has_dropdown: true,
    //     sub_menus: [
    //         { link: "/team", title: "Team" },
    //         { link: "/team-details", title: "Team Details" },
    //         { link: "/testimonials", title: "Testimonials" },
    //         { link: "/faqs", title: "Faqs" },
    //         { link: "/pricing-plan", title: "Pricing Plan" },
    //     ],
    // },
    {
        id: 7,
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },
    {
        id: 8,
        has_dropdown: false,
        title: "Sign Up",
        link: "/sign-up",
    },
];

export default menu_data;