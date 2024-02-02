import { frontendRoadmap } from "./data-frontend";
import { devopsRoadmap } from "./data-devops";
import { uiuxDesigningRoadmap } from "./data-uiuxDesigning";

export const progress = [
  {
    roadmap: "frontend-development",
    totalLength: frontendRoadmap.length,
    completedTopics: [
      {
        heading: "Internet",
        content: "Internet Content lorem",
      },
      {
        heading: "HTML",
        content: "HTML Content lorem",
      },
    ],
    numCompletedTopics: 2,
    completionPercentage: ((2 / frontendRoadmap.length) * 100).toFixed(2),
  },

  {
    roadmap: "devops",
    totalLength: devopsRoadmap.length,
    completedTopics: [
      {
        heading: "Operating Systems",
        content: "Operating Systems Content lorem",
      },
      {
        heading: "Server Management",
        content: "Server Management Content lorem",
      },
      {
        heading: "Infrastructure as Code (IaC)",
        content: "Infrastructure as Code (IaC) Content lorem",
      },
      {
        heading:
          "CI/CD (Continuous Integration and Continuous Delivery/Deployment)",
        content:
          "CI/CD (Continuous Integration and Continuous Delivery/Deployment) Content lorem",
      },
      {
        heading: "Devops Monitoring",
        content: "Devops Monitoring Content lorem",
      },
    ],
    numCompletedTopics: 5,
    completionPercentage: ((5 / devopsRoadmap.length) * 100).toFixed(2),
  },

  {
    roadmap: "ui-ux-designing",
    totalLength: uiuxDesigningRoadmap.length,
    completedTopics: [
      {
        heading: "Frameworks",
        content: "Frameworks Content lorem",
      },
      {
        heading: "Behaviour Change Strategies",
        content: "Behaviour Change Strategies Content lorem",
      },
      {
        heading: "UI Best Practices",
        content: "UI Best Practices Content lorem",
      },
    ],
    numCompletedTopics: 3,
    completionPercentage: ((3 / devopsRoadmap.length) * 100).toFixed(2),
  },
];
