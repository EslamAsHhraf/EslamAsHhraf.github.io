import {
  mobile,
  creator,
  web,
  python,
  C,
  Java,
  angular,
  reactjs,
  git,
  javascript,
  mongodb,
  Net,
  Sql,
  Mui,
  php,
  redux,
  typescript,
  TEQNEIA,
  Liquid_C2_MENA,
  Lumin_Soft,
  EJADA,
  yummy_front,
  yummy_back,
  reddit,
  bld,
  LinkedIn,
  github,
  Hand_Gesture,
  Grades_auto_filler,
  flash,
  captainHook,
  operatingSystem,
  Flappy_Bird,
} from "../assets";

export const socialLinks = [
  {
    id: "linkedIn",
    title: "Linked In",
    link: "https://www.linkedin.com/in/eslam-ashraf-b70880216/",
    icon: LinkedIn,
  },
  {
    id: "gitHub",
    title: "GitHub",
    link: "https://github.com/EslamAsHhraf",
    icon: github,
  },
  {
    id: "resume",
    title: "Resume",
    link: "https://drive.google.com/file/d/1_lhrx6Dm1rigoqJKfxISz8dxM3MsYRo1/view?usp=sharing",
    icon: "",
  },
];



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
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "C",
    icon: C,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Mui",
    icon: Mui,
  },
  {
    name: "Net",
    icon: Net,
  },
  {
    name: "php",
    icon: php,
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

const projects = [
  {
    name: "Yummy (Frontend)",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "PrimNG",
        color: "green-text-gradient",
      },
      {
        name: "Eslint",
        color: "pink-text-gradient",
      },
      {
        name: "Jwt Authentication",
        color: "blue-text-gradient",
      },
    ],
    image: yummy_front,
    source_code_link: "https://github.com/EslamAsHhraf/Recipe-Frontend",
  },
  {
    name: "Yummy (Backend)",
    description:
      "Yummy is interactive platform for recipe management, meal planning, and social interaction related to cooking and culinary activities.",
    tags: [
      {
        name: "Asp Net Core",
        color: "blue-text-gradient",
      },
      {
        name: "MVC Architecture",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "Jwt Authentication",
        color: "blue-text-gradient",
      },
    ],
    image: yummy_back,
    source_code_link: "https://github.com/EslamAsHhraf/Recipe-Backend",
  },
  {
    name: "Nonlight",
    description:
      "Nonlight mimic some functionalities of Reddit. We are responsible for Front-End part. Nonlight is social media website that can help you to enjoy your time and share your ideas and connect with other people on it.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mui",
        color: "green-text-gradient",
      },
      {
        name: "unit testing",
        color: "pink-text-gradient",
      },
      {
        name: "json-server",
        color: "blue-text-gradient",
      },
      {
        name: "socket",
        color: "green-text-gradient",
      },
    ],
    image: reddit,
    source_code_link: "https://github.com/NonLegit/Front-End",
  },
  {
    name: "Hand Gesture Recognition",
    description:
      "An implementation of a machine learning model for detecting and recognizing hand signs (0-5) accurately using Python. The project pipeline involves the following modules: Preprocessing, Feature Extraction, Model selection and training, and finally performance analysis.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "feature extraction",
        color: "pink-text-gradient",
      },
    ],
    image: Hand_Gesture,
    source_code_link:
      "https://github.com/EslamAsHhraf/Hand-Gesture-Recognition",
  },
  {
    name: "Grades Auto Filler",
    description:
      "Grades auto-filler provide an easy way to fill the grades electronically, and it should be able to correct MCQ bubble sheet exams automatically.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Image Processing",
        color: "pink-text-gradient",
      },
      {
        name: "Image classification",
        color: "blue-text-gradient",
      },
    ],
    image: Grades_auto_filler,
    source_code_link: "https://github.com/EslamAsHhraf/Grades-auto-filler",
  },
  {
    name: "Flash",
    description:
      "A simple Crawler-based search engine that demonstrates the main features of a search engine (web crawling, indexing and ranking) and the interaction between them using Java and a Web Interface.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Ranker",
        color: "green-text-gradient",
      },
      {
        name: "Data Structure",
        color: "pink-text-gradient",
      },
      {
        name: "Indexer",
        color: "blue-text-gradient",
      },
      {
        name: "Advanced Programming Techniques ",
        color: "blue-text-gradient",
      },
    ],
    image: flash,
    source_code_link: "https://github.com/EslamAsHhraf/Flash",
  },
  {
    name: "Captain Hook",
    description:
      "Captain Hook is a robot which makes food and drinks using a wide range of functionalities cooperating together by Arduino for the full cooking process.",
    tags: [
      {
        name: "Arduino",
        color: "blue-text-gradient",
      },
      {
        name: "Robot",
        color: "green-text-gradient",
      },
      {
        name: "Hardware",
        color: "pink-text-gradient",
      },
      {
        name: "Motors",
        color: "blue-text-gradient",
      },
    ],
    image: captainHook,
    source_code_link: "https://github.com/EslamAsHhraf/Captain-Hook",
  },
  {
    name: "Operating System Scheduler",
    description:
      "A CPU scheduler determines an order for the execution of its scheduled processes. Operating System Scheduler decides which process will run according to a certain data structure that keeps track of the processes in the system and their status.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "Linux",
        color: "green-text-gradient",
      },
      {
        name: "Cpu Scheduling",
        color: "pink-text-gradient",
      },
      {
        name: "Threads",
        color: "blue-text-gradient",
      },
    ],
    image: operatingSystem,
    source_code_link:
      "https://github.com/EslamAsHhraf/Operating-System-Scheduler",
  },
  {
    name: "Flappy Bird Game",
    description:
      "Flappy Bird is a side-scrolling mobile game featuring 2D retro style graphics. The objective is to direct a flying bird, named 'Faby', who moves continuously to the right, between sets of Mario-like pipes.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Game",
        color: "green-text-gradient",
      },
      {
        name: "Web Development",
        color: "pink-text-gradient",
      },
    ],
    image: Flappy_Bird,
    source_code_link: "https://github.com/EslamAsHhraf/Flappy-Bird-Game",
  },
];

export { services, technologies, experiences, projects };
