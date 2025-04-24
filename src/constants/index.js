import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a Fullstack Developer who also loves building cool stuff with Machine Learning, AI, and Game Development.  bridge creativity and code—whether it's crafting scalable web apps, training intelligent models, or creating immersive game experiences. Let’s build something amazing together`;

export const ABOUT_TEXT = `I'm a passionate Fullstack Developer with experience in building scalable web applications, intelligent systems using Machine Learning and AI, and even diving into the world of Game Development.

My journey started with a love for problem-solving and curiosity for how things work under the hood. Over the years, I’ve worked with technologies like React, Node.js, Django, Flutter, and Python, while also exploring advanced concepts in data science and interactive game mechanics.

Whether it’s developing seamless user experiences, crafting robust APIs, or experimenting with neural networks and Unity engines—I enjoy turning ideas into real-world solutions.

I'm always learning, always building, and always open to exciting opportunities that push my boundaries.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Freelancer",
    company: "Upwork, Fiverr",
    description: `Join different Projects. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Junior Python Developer",
    company: "Vanilla Tech",
    description: `Designed and developed user interfaces for web applications using Python and Fastapi. Worked closely with backend developers to integrate frontend components with Python APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021(Mid) - 2022",
    role: "Python Developer Internship",
    company: "Vanilla Tech",
    description: `Developed and maintained web applications using Python, Fastapi, and Postgres. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    id:1,
    name: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    githubLink: "https://ecommerce-nu-olive-37.vercel.app/",
    livelink: "https:google.com",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Nextjs"],
  },
  {
    id:2,
    name: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    githubLink: "https://github.com",
    livelink: "https:google.com",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    id:3,
    name: "CMovies",
    image: project3,
    description:
      "A website like Netflix where users can browse movies and add it to their favorite Collection",
    githubLink: "https://cmovies-sachin455s-projects.vercel.app/",
    livelink: "https:google.com",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    id:4,
    name: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    githubLink: "https://github.com",
    livelink: "https:google.com",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
