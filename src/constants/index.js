import {
  chair,
  codeo,
  desk,
  dice,
  erai,
  flower,
  game,
  garden,
  house,
  idc,
  minecraft,
  modal,
  movie,
  mushroom,
  question,
  quotes,
  rose,
  scene,
  spider,
  stopwatch,
  sword,
  todolist,
  watch,
  weather,
} from "../assets/images";

import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  motion,
  mui,
  react,
  tailwindcss,
  typescript,
  blender,
  mysql,
  chakraui,
  three,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: chakraui,
    name: "ChakraUI",
    type: "Frontend",
  },
  {
    imageUrl: blender,
    name: "Blender",
    type: "3D",
  },
  {
    imageUrl: three,
    name: "Three.js",
    type: "3D",
  },
];

export const experiences = [
  {
    title: "Java Developer Intern",
    company_name: "Codeograph Solutions",
    icon: codeo,
    iconBg: "#ced4da",
    date: "Aug 2021 - Feb 2022",
    points: [
      "Contributed as part of a three-person team in the development of the DART GLOBAL COURIER SERVICE (DGCS) software.",
      "Specifically responsible for designing and managing the super admin panel within the software framework.",
      "Java, Servlet, MySQL, MVC, Bootstrap, and JSP technologies to create a comprehensive software framework for domestic courier services.",
      "Involved in the entire software development lifecycle, from requirement gathering to project planning and database creation.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "iDigiCloud Technologies",
    icon: idc,
    iconBg: "#21295c",
    date: "Mar 2022 - Jul 2023",
    points: [
      "Worked on core banking software application and Developed UI pages primarily focusing on forms based on UI designs using HTML, CSS, and Chakra UI for styling and creating visually appealing interfaces.",
      "Verified API functionality by utilizing Graphql query generators like Altair, ensuring seamless communication between the UI and backend.",
      "Created interactive and dynamic charts/graphs using Highcharts to visualize data effectively.",
      "Developed reusable UI components using React and JavaScript, enhancing code efficiency and maintainability.",
      "Collaborated with testing teams to ensure UI functionality, responsiveness, and cross-browser compatibility.",
    ],
  },
  {
    title: "Bilingual Frontend Developer",
    company_name: "Erai Technologies",
    icon: erai,
    iconBg: "#ced4da",
    date: "Nov 2023 - Present",
    points: [
      "Development and maintenance of diverse websites primarily catering to Japanese clients/customers.",
      "Translating UI designs into responsive websites. Utilizing HTML, CSS, and Material UI for website development.",
      "Working with various technologies like React, WordPress, etc., based on project requirements.",
      "Collaborated with testing teams to ensure UI functionality, responsiveness, and cross-browser compatibility.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    name: "Where is Modal",
    image: modal,
    description: "JavaScript - Where is Modal",
    link: "https://github.com/adrianhajdin/threads",
    hash1: "html",
    hash2: "css",
    hash3: "javascript",
  },
  {
    name: "Frequently Asked Questions",
    image: question,
    description: "JavaScript - Frequently Asked Questions",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
    hash1: "html",
    hash2: "css",
    hash3: "javascript",
  },
  {
    name: "Quotes Generator",
    image: quotes,
    description: "JavaScript - Quotes Generator",
    link: "https://github.com/adrianhajdin/social_media_app",
    hash1: "html",
    hash2: "css",
    hash3: "javascript",
  },
  {
    name: "Stop-Watch",
    image: stopwatch,
    description: "JavaScript - Stop Watch",
    link: "https://github.com/adrianhajdin/projects_realestate",
    hash1: "html",
    hash2: "css",
    hash3: "javascript",
  },
  {
    name: "To Do List",
    image: todolist,
    description: "JavaScript - To Do List",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
    hash1: "html",
    hash2: "css",
    hash3: "javascript",
  },
  {
    name: "Tic Tac Toe",
    image: game,
    description: "JavaScript - Tic Tac Toe",
    link: "https://github.com/adrianhajdin/pricewise",
    hash1: "html",
    hash2: "css",
    hash3: "javascript",
  },
  {
    name: "Analog Watch",
    image: watch,
    description: "JavaScript - Analog Watch",
    link: "https://github.com/adrianhajdin/pricewise",
    hash1: "html",
    hash2: "css",
    hash3: "javascript",
  },
  {
    name: "Weather App",
    image: weather,
    description: "React - Weather App",
    link: "https://github.com/adrianhajdin/pricewise",
    hash1: "html",
    hash2: "css",
    hash3: "react",
  },
  {
    name: "Movie Land",
    image: movie,
    description: "React - Movie Search App",
    link: "https://github.com/adrianhajdin/pricewise",
    hash1: "html",
    hash2: "css",
    hash3: "react",
  },
];

export const blenders = [
  {
    name: "Alchemist Desk",
    image: desk,
  },
  {
    name: "Mushroom Little Forest",
    image: mushroom,
  },
  {
    name: "Sword",
    image: sword,
  },
  {
    name: "Interior House",
    image: house,
  },
  {
    name: "Garden Illustration",
    image: garden,
  },
  {
    name: "Chair",
    image: chair,
  },
  {
    name: "Dice",
    image: dice,
  },
  {
    name: "Flower Pot",
    image: flower,
  },
  {
    name: "Rose",
    image: rose,
  },
  {
    name: "Spider",
    image: spider,
  },
  {
    name: "2D Scenery",
    image: scene,
  },
  {
    name: "Minecraft",
    image: minecraft,
  },
];
