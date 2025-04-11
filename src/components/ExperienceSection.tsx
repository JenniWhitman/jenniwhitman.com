import { Job } from "./WorkSection"
import WorkSection from "./WorkSection"

const jobs: Job[] = [
  {
    title: "Software Engineer II",
    company: "Help Scout",
    range: "Nov 2024 – April 2025",
    summary:
      "Integrated Eppo’s SDK and Mixpanel into the Marionette/Backbone/React app to track user behavior and optimize the new user experience.",
    details: [
      "Developed reusable components, hooks, and utilities to streamline A/B testing and experiment integration.",
      "Implemented Mabl tests to replace flaky Cypress tests, improving CI/CD efficiency.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "MIT Open Learning",
    range: "Feb 2023 – Nov 2024",
    summary:
      "Developed and maintained learning resources using Django, Python, React, PostgreSQL, Redis, Docker, and Heroku.",
    details: [
      "Implemented PostHog for feature flag management, refining processes and integration strategies.",
      "Led a major redesign of the MITx Online application, including API overhauls, backend improvements, and frontend enhancements.",
    ],
  },
  {
    title: "Software Engineer",
    company: "WorkStep",
    range: "Feb 2022 – Jan 2023",
    summary:
      "Built scalable applications for frontline worker hiring and retention using Python, React, Redux, MySQL, and Redis.",
    details: [
      "Integrated logging and monitoring tools (LaunchDarkly, Rollbar, Heap.io, New Relic) to improve observability.",
      "Developed the company’s first external API endpoints and documentation.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Bbot",
    range: "Jan 2021 – Dec 2021",
    summary:
      "Developed an external API, documentation, and integration standards using Django REST framework and OpenAPI.",
    details: [
      "Contributed to a large-scale ordering platform built with Django, AngularJS, React, and vanilla JavaScript.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Third Rock Enterprises",
    range: "Jan 2019 – Jan 2021, 2024",
    summary:
      "Designed cost-effective, scalable solutions to increase revenue through white-labeling and other strategic enhancements.",
    details: [
      "Built and maintained applications using Python, Django, JavaScript, and React.",
      "Collaborated with offshore teams and transitioned long-term support to them.",
    ],
  },
  {
    title: "Software Engineer",
    company: "XPO Logistics",
    range: "April 2018 – Jan 2019",
    summary:
      "Developed a custom CMS integrating multiple services into a centralized .com platform using Django and JavaScript.",
    details: [
      "Managed API integrations across various homegrown and acquired business unit systems.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Akamai",
    range: "Jan 2018 – Mar 2018",
    summary: "Worked on AngularJS components of the customer dashboard.",
    details: [
      "Left to pursue a role better aligned with long-term career goals.",
    ],
  },
  {
    title: "Online Course Developer",
    company: "InterSystems Corporation",
    range: "July 2016 – Dec 2017",
    summary:
      "Developed online courses teaching application development with InterSystems products.",
    details: [
      "Used edX, Totara, and Docker to create interactive learning experiences.",
      "Designed content integrating InterSystems technology with Angular and other frameworks.",
    ],
  },
]

const ExperienceSection = () => {
  return <WorkSection key="experience" title={"Experience"} jobs={jobs} />
}

export default ExperienceSection
