import pic from "../assets/Portfolio.jpg";
import "../styles/about.css";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FiCode } from "react-icons/fi";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Timeline from "./Timeline";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="h1">About Me</h1>
      <div className="card">
        <div className="image">
          <img src={pic} alt="Chintan Tripathi" className="my-pic" />
        </div>
        <hr className="divider" />
        <div className="content">
          <div className="info">
            <p>
              Hi, I'm <strong>Chintan Tripathi</strong> — a Full Stack Engineer
              and AWS-certified developer with experience in data analytics,
              cloud engineering, and software development. I’ve worked on
              scalable solutions at <strong>RBC</strong>, contributed to dynamic
              frontend/backend systems at <strong>Evrig</strong>, and led data
              projects using tools like
              <strong> Python, Trino, Tableau, MongoDB, and Kafka</strong>.
            </p>
            <p>
              With a solid foundation in the MERN stack and AWS services, I
              thrive in building cloud-native applications, automating
              pipelines, and working across data and web technologies. I'm
              currently pursuing my MAC at the University of Windsor, and I’m
              open to full-time roles in full-stack or data engineering.
            </p>
            <p>Let’s connect and collaborate on innovative projects!</p>
          </div>
          <div className="social-media">
            <div className="link-group">
              <a
                href="https://www.instagram.com/chintan__2022/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </div>
            <div className="link-group">
              <a
                href="https://www.codechef.com/users/chintan13"
                target="_blank"
                rel="noreferrer"
              >
                <FiCode />
              </a>
            </div>
            <div className="link-group">
              <a
                href="https://github.com/chintan0513"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </div>
            <div className="link-group">
              <a
                href="https://www.linkedin.com/in/chintan13/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Timeline />
      <Skills />
      <Certifications />
    </div>
  );
};

export default About;
