import "../styles/skills.css";

const Skills = () => {
  const skillsData = [
    {
      category: "Full Stack & Web Development",
      skills: [
        "React.js",
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Bootstrap",
        "Vue.js",
      ],
    },
    {
      category: "Data Engineering & Analytics",
      skills: [
        "Python",
        "SQL",
        "Trino",
        "DBeaver",
        "Apache Spark",
        "Hive",
        "Hadoop (HDFS)",
        "Tableau",
        "Power BI",
        "REST APIs",
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS (EC2, Lambda, S3, SageMaker)",
        "Git & GitHub",
        "GitHub Actions",
        "Docker",
        "LDAP Authentication",
        "Snowflake",
        "Databricks",
      ],
    },
    {
      category: "Project & Collaboration Tools",
      skills: [
        "JIRA",
        "SCRUM / Agile",
        "UAT Testing",
        "Project Management Foundations",
      ],
    },
  ];

  return (
    <div className="skills">
      <h1 className="h1">Skill Set</h1>
      <div className="skills-set">
        {skillsData.map((section, idx) => (
          <div key={idx} className="skill-section">
            <h2 className="skill-category">{section.category}</h2>
            <div className="skill-badges">
              {section.skills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
