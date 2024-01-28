import {
  mobile,
  creator,
  web,
  python,
  C,
  C_sharp2,
  C_plus_plus,
  Java,
  angular,
  reactjs,
  figma,
  git,
  html,
  javascript,
  mongodb,
  Net,
  firebase,
  Sql,
  Mui,
  php,
  redux,
  tailwind,
  typescript,
  css,
  scss,
  TEQNEIA,
  Liquid_C2_MENA,
  Lumin_Soft,
  EJADA,
  carrent,
  jobit,
  tripguide,
  bld,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning Engineer",
    icon: creator,
  },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "Java", icon: Java },
  { name: "C", icon: C },
  { name: "C#", icon: C_sharp2 },
  { name: "C++", icon: C_plus_plus },
  { name: ".Net", icon: Net },
  { name: "PHP", icon: php },
  { name: "Firebase", icon: firebase },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "SCSS",
    icon: scss,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Material UI",
    icon: Mui,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: Sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Liquid C2 MENA",
    icon: Liquid_C2_MENA,
    iconBg: "#FFFFFF",
    date: "Sep 2023 - Oct 2023",
    points: [
      "I was in Liquid C2 MENA as Frontend Developer internship using React with Next using type script.",
      "Learned more about frontend developer responsibilities and Web development life cycle stages.",
      "I worked on Production Stage for Website used to generate reports which saves time to security team.",
      "Maintained an organized workflow using project management tools like Jira, Teams and Azure.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Lumin Soft",
    icon: Lumin_Soft,
    iconBg: "#FFFFFF",
    date: "Aug 2023 - Oct 2023",
    points: [
      "I was in Lumin Soft as Full Stack internship Developer using Angular and .Net Core.",
      "We built Full Stack Website called Yummy about Recipes which user can view recipes ,make him own recipe , give rating to other recipes , made him own plan meal and share recipes on social media platforms.",
    ],
  },
  {
    title: "Software Developer",
    company_name: " EJADA",
    icon: EJADA,
    iconBg: "#FFFFFF",
    date: "Jul 2023 - Aug 2023",
    points: [
      "I was in EJADA in Oracle (ERP) Applications Development Department as internship..",
      "Learned more about Oracle Applications, SQL, PL/SQL and Apex.",
      "Maintained an organized workflow using project management tools and soft skills.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: " TEQNEIA ICT",
    icon: TEQNEIA,
    iconBg: "#FFFFFF",
    date: "Jun 2023 - Jul 2023",
    points: [
      "I was in TEQNEIA ICT as Frontend internship using React by TypeScript , Redux Toolkit, MUI and Tailwind.",
      "We built E-martes website which allows customers to purchase a wide variety of products online. The website has a user-friendly interface that makes it easy to browse through different categories of items and find what you’re looking for. E-martes offers a broad range of products, including clothing, shoes, accessories, electronics, home appliances, and more. Each product has a detailed description that includes information about its features, price, and availability. ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Learned the Web development life cycle stages. used project management ClickUp.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: " bld.ai",
    icon: bld,
    iconBg: "#FFFFFF",
    date: "Jul 2022 - Sep 2022",
    points: [
      "I was in bld.ai as Full Stack internship using React.js and Django.",
      " I learned basic about Django and types of Database.",
      "Maintained an organized workflow using project management tools and version control systems like Jira, Slack, Git, and GitHub.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
