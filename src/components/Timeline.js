import React from "react";
import "../styles/timeline.css";

const experiences = [
  {
    role: "Data Analyst Co-op",
    company: "RBC",
    location: "Toronto, Canada",
    date: "Sep 2024 - Apr 2025",
    description: [
      "Developed and automated data quality checks using cron jobs.",
      "Led Tableau-Trino integration for live analytics.",
      "Built REST API automations and explored LDAP auth for Zeppelin.",
      "Enhanced pipelines with Trino, Python, DBeaver for advanced querying.",
      "Explored AWS, Snowflake, Databricks for cost-effective scaling.",
    ],
    link: "https://www.linkedin.com/in/chintan13/details/experience/",
  },
  {
    role: "Software Developer",
    company: "Evrig Solutions",
    location: "Ahmedabad, India",
    date: "Nov 2022 - Jun 2023",
    description: [
      "Developed MERN-based home appliances app, optimizing backend by 20%.",
      "Created responsive interfaces using React, Vue.js, Tailwind CSS.",
      "Implemented JWT auth, reducing unauthorized access by 30%.",
      "Translated business requirements to technical specifications and tests.",
      "Collaborated in Agile teams, tracked and resolved bugs in JIRA.",
    ],
    link: "https://www.linkedin.com/in/chintan13/details/experience/",
  },
  {
    role: "Developer Virtual Internship Program",
    company: "Accenture",
    location: "Ahmedabad, India",
    date: "Mar 2023 - Apr 2023",
    description: [
      "Designed cloud migration plans for on-premises systems.",
      "Performed security maturity assessments and IAM policy creation.",
      "Debugged microservices and reviewed code for quality.",
      "Collaborated with cross-functional teams to align business goals.",
    ],
    link: "https://www.linkedin.com/in/chintan13/details/experience/",
  },
  {
    role: "Full Stack Developer",
    company: "DevTown",
    location: "Bengaluru, India",
    date: "Nov 2021 - Jul 2022",
    description: [
      "Completed 7+ full-stack projects including chatbots and e-learning.",
      "Used RESTful APIs and Express.js for efficient communication.",
      "Developed automated testing scripts for various environments.",
      "Optimized MongoDB queries improving performance by 25%.",
    ],
    link: "https://www.linkedin.com/in/chintan13/details/experience/",
  },
  {
    role: "Google Cloud Facilitator",
    company: "Google Cloud Community India",
    location: "Ahmedabad, India",
    date: "Aug 2018 - Oct 2021",
    description: [
      "Facilitated hands-on labs and workshops on Google Cloud services.",
      "Enabled student and developer communities to build scalable projects.",
    ],
    link: "https://www.linkedin.com/in/chintan13/details/experience/",
  },
  {
    role: "Data Analyst Intern",
    company: "Trainity",
    location: "Ahmedabad, India",
    date: "May 2020 - Jan 2021",
    description: [
      "Created 5+ Python and SQL data analysis projects (loan, IMDB).",
      "Improved data quality by 20% through cleaning and collaboration.",
      "Built Tableau and Power BI dashboards for effective reporting.",
    ],
    link: "https://www.linkedin.com/in/chintan13/details/experience/",
  },
];

const Timeline = () => {
  return (
    <div className="timeline" id="experience">
      <h1 className="h1">Experience</h1>
      <div className="timeline-container">
        {experiences.map((item, index) => (
          <div
            key={index}
            className={`timeline-item clickable`}
            onClick={() => window.open(item.link, "_blank")}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>
                {item.role} - {item.company}
              </h3>
              <span className="timeline-location">{item.location}</span> |
              <span className="timeline-date"> {item.date}</span>
              <ul>
                {item.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
