import fullstack from "../images/articles/full-stack.jpg";
import cloud from "../images/articles/aws-azure-googlecloud.jpg";
import webSecurity from "../images/articles/web-secuirty.jpg";
import uxDesign from "../images/articles/ux-design.jpg";
import devops from "../images/articles/devops.jpg";
import microServices from "../images/articles/microservices.jpg";
import dataScience from "../images/articles/data-science.jpg";
import openSource from "../images/articles/open-source.png";
import ai from "../images/articles/ai.jpg";
import js from "../images/articles/javascript.png";

export const articles = [
  {
    id: 1,
    domain: "development",
    date: "Mar 17, 2023",
    title: "The Road to Full-Stack Mastery: A Step-by-Step Guide",
    description:
      "Discover the essential skills and technologies you need to become a proficient full-stack developer. This comprehensive guide will help you navigate the world of both frontend and backend development.",
    image: `${fullstack}`,
    link: "https://abhishekthatguy.medium.com/2023-full-stack-development-roadmap-the-journey-to-mastery-3371d7d539f",
  },
  {
    id: 2,
    domain: "cloud",
    date: "Oct 10, 2023",
    title: "Mastering Cloud Computing: AWS vs. Azure vs. Google Cloud",
    description:
      "Dive into the world of cloud computing with a comparative analysis of three major cloud platforms. Learn which one suits your needs and career aspirations.",
    image: `${cloud}`,
    link: "https://intellipaat.com/blog/aws-vs-azure-vs-google-cloud/",
  },
  {
    id: 3,
    domain: "cybersecurity",
    date: "Sept 15, 2023",
    title: "Building a Secure Online Presence: A Guide to Web Security",
    description:
      "Cybersecurity is more critical than ever. Explore best practices and tools to protect your websites and applications from potential threats and attacks.",
    image: `${webSecurity}`,
    link: "https://www.ileafsolutions.com/mastering-web-security-a-comprehensive-guide-to-safeguarding-your-online-presence",
  },
  {
    id: 4,
    domain: "development",
    date: "Sept 19, 2023",
    title: "The Art of User Experience (UX) Design",
    description:
      "Learn the principles of UX design and how to create digital products that provide exceptional user experiences. Delve into user research, wireframing, and usability testing.",
    image: `${uxDesign}`,
    link: "https://medium.com/@jwilliamj223/the-art-of-ui-ux-design-crafting-exceptional-user-experiences-d5f90634b157",
  },
  {
    id: 5,
    domain: "devops",
    date: "",
    title: "DevOps for Continuous Integration and Deployment",
    description:
      "Discover how DevOps practices can streamline your development and deployment processes. Learn about tools like Jenkins, Docker, and Kubernetes to automate your workflow.",
    image: `${devops}`,
    link: "https://aws.amazon.com/devops/what-is-devops/#:~:text=DevOps%20is%20the%20combination%20of,development%20and%20infrastructure%20management%20processes.",
  },
  {
    id: 6,
    domain: "devops",
    date: "",
    title: "Exploring the World of Microservices Architecture",
    description:
      "Unravel the complexities of microservices and their role in modern software architecture. Explore the benefits, challenges, and for implementing microservices.",
    image: `${microServices}`,
    link: "https://cloud.google.com/learn/what-is-microservices-architecture",
  },
  {
    id: 7,
    domain: "artificial intelligence & data science",
    date: "Jun 20, 2023",
    title: "Becoming a Data Scientist: Skills and Tools You Need to Succeed",
    description:
      "Data science is a booming field. Get insights into the skills, programming languages, and tools that will set you on the path to a successful career in data analysis.",
    image: `${dataScience}`,
    link: "https://www.coursera.org/articles/data-scientist-skills",
  },
  {
    id: 8,
    domain: "development",
    date: "Jun 6, 2016",
    title: "Open Source Software: The Heart of Tech Innovation",
    description:
      "Delve into the world of open-source software and its impact on the tech industry. Learn how to contribute to open-source projects and be part of a thriving community.",
    image: `${openSource}`,
    link: "https://www.linkedin.com/pulse/open-source-heart-innovation-kamal-brar/",
  },
  {
    id: 9,
    domain: "artificial intelligence & data science",
    date: "Jun 14, 2023",
    title: "The Future of Artificial Intelligence: Trends and Applications",
    description:
      "Stay updated on the latest AI trends and explore how artificial intelligence is transforming industries such as healthcare, finance, and autonomous vehicles.",
    image: `${ai}`,
    link: "https://www.educative.io/blog/future-of-artificial-intelligence",
  },
  {
    id: 10,
    domain: "development",
    date: "",
    title: "Mastering JavaScript: Tips, Tricks, and Advanced Concepts",
    description:
      "Take your JavaScript skills to the next level. This article offers advanced techniques, libraries, and best practices to become a proficient JavaScript developer.",
    image: `${js}`,
    link: "https://modernweb.com/45-javascript-tips-tricks-practices/",
  },
];
