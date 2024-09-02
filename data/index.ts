export const navItems = [
  { name: "About", link: "#about" },
  { name: "Work Experience", link: "#experience" },
  { name: "Education", link: "#education" },
  { name: "Testimonials", link: "#testimonials" },
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
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
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
    title: "Currently building a JS Animation library",
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
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote: "Great work as allways! Timely delivery and very client oriented.",
    name: "ozolinso",
    title: "Fiverr Client",
  },
  {
    quote: "Very pleasant experience. He is pro!",
    name: "ozolinso",
    title: "Fiverr Client",
  },
  {
    quote:
      "Thato is a thoughtful and thorough professional who was dedicated to delivering a top notch product for me. We started with an assessment of what I wanted (app dev) and he explained the options and steps I could anticipate in building a finished app, and he was responsive throughout the project. Very happy with the execution and will rebook him! ",
    name: "Maleele Chongo",
    title: "Founder at Sponsher",
  },
  {
    quote: "Great working with Thato, super professional and on time",
    name: "Hodan Mo",
    title: "Fiverr Client",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer",
    company: "Levare Tech",
    duration: "March 2024 - Present",
    desc: "At Levare Tech, I contributed to building and enhancing web and mobile applications using a diverse tech stack, including Next.js, Flutter, and MongoDB. I developed custom features, optimized backend functions, and integrated complex API solutions across various sectors such as travel, aviation, and supply chain management. My role involved collaborating closely with cross-functional teams to deliver high-quality, scalable software solutions, while continuously learning and adapting to new technologies to meet project demands.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    duration: "Jan 2023 - April 2024",
    company: "Fiverr",
    title: "Mobile App Dev - Freelancer",
    desc: "As a freelance mobile developer on Fiverr, I specialize in building cross-platform applications using Flutter and Firebase. My work includes transforming client ideas into high-quality, functional apps that meet specific needs and provide seamless user experiences.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    duration: "May 2021 - Nov 2021",
    company: "Fiverr",
    title: "Python Web Scraper Dev - Freelancer Fiverr",
    desc: "As a freelance data miner on Fiverr, I specialized in writing web scraping scripts using Python and Beautiful Soup to extract valuable data from various websites. I developed custom solutions to collect, clean, and organize data into Excel spreadsheets, making it easy for clients to manage and analyze large datasets. My work involved automating data extraction processes, ensuring accuracy and efficiency, and delivering insights that supported business decisions.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    duration: "Feb 2023 - March 2024",
    company: "Business Connection",
    title: "Database Administrator - BCX",
    desc: "At BCX, I worked as a Database Administrator , where I focused on maintaining and optimizing database environments. My responsibilities included deploying scripts efficiently, managing database backups, and ensuring data security and availability. I played a key role in migrating databases from on-premise to cloud solutions, which improved scalability and reduced infrastructure costs. Additionally, I was involved in upgrading SQL servers to enhance performance and security, and collaborated with development and operations teams to ensure reliable data management aligned with application needs.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
];

export const educationExperience = [
  {
    id: 1,
    title: "NQF 5 Software Engineering",
    company: "_WeThinkCode. ",
    duration: "Sept 2021 - Jan 2023",
    desc: "During my time at WeThinkCode, I completed a rigorous software development program, focusing on both foundational and advanced programming concepts. I gained hands-on experience in various technologies, including Python, Java, Flutter, and Firebase, through practical, real-world projects. My training covered a wide range of topics, such as object-oriented programming, full-stack web and mobile development, automation testing, and design patterns. This immersive program honed my problem-solving skills and equipped me with the technical expertise needed to tackle complex software challenges in collaborative environments.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "NQF 7 Bcom Law",
    company: "University of Pretoria",
    duration: "2013- 2018",
    desc: "Graduated with a BCom in Law, specializing in economics and business. This program provided a strong foundation in commercial law, contract law, and economic principles, equipping me with analytical and problem-solving skills relevant to both legal and business contexts.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    company: "University of Helsinki",
    duration: "Sept 2023 - Present",
    desc: "Currently studying Full-Stack Web Development through the University of Helsinki’s online program. This course covers key aspects of modern web development, including JavaScript, React, Node.js, and RESTful APIs, focusing on building scalable and efficient full-stack applications. The program emphasizes practical skills and hands-on projects, enhancing my ability to design and implement robust web solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
