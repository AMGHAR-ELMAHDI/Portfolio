export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 prevent-select",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Full Stack E-commerce App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ft_Trascendence",
    des: "Full stack web application, play Ping Pong online, make new friends, and chat with each other.",
    img: "/Trans.png",
    iconLists: [
      "/re.svg",
      "/ts.svg",
      "/django.png",
      "/docker.png",
      "postgresql.png",
    ],
    link: "https://github.com/AMGHAR-ELMAHDI/",
  },
  {
    id: 2,
    title: "GameHub",
    des: "Explore a library of games, filter and sort by various criteria, including genre, platform, and release date...",
    img: "/GameHubDesktop.png",
    iconLists: ["/re.svg", "/ts.svg", "/Chakra.png"],
    link: "https://game-hub-tawny-kappa.vercel.app/",
  },
  {
    id: 3,
    title: "Aora",
    des: "Mobile Application made with react native, Create an account, publish ai videos, and discover what others shared.",
    img: "/Signup.jpg",
    iconLists: ["/ReactNative.png", "/tail.svg", "/ts.svg"],
    link: "https://github.com/AMGHAR-ELMAHDI/React-Native-Aora",
  },
  {
    id: 4,
    title: "WebServ",
    des: "Implementing a Web server from scratch using low-level socket programming techniques in C++98.",
    img: "/WebServ.png",
    iconLists: ["/c++.png", "/nginx.png"],
    link: "https://github.com/AMGHAR-ELMAHDI/WebServ",
  },
  {
    id: 4,
    title: "Inception",
    des: "Infrastructure setup of Nginx, MariaDB, and WordPress in separate docker containers along with an FTP server, Adminer, Portainer, and Redis for caching.",
    img: "/docker-logo-blue.svg",
    iconLists: [
      "/docker.png",
      "/nginx.png",
      "/mariaDB.png",
      "/wordpress.png",
      "/adminer.png",
      "/ftp.png",
      "/redis.png",
      "/portainer.svg",
    ],
    link: "https://github.com/AMGHAR-ELMAHDI/Inception",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer (Freelance)",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Mobile Developer (Freelance)",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/AMGHAR-ELMAHDI",
    img: "/git.svg",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/elmahdi-amghar-148124177",
    img: "/link.svg",
  },
];
