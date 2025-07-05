import React from "react";
import Typewriter from "typewriter-effect";
import "../styles/landing.css";

const Landing = () => {
  return (
    <div className="landing" id="home">
      <div className="intro">
        <div className="name">
          <span>
            Hi<div className="hand">👋🏻</div>
          </span>
          <span className="my-name">I'm Chintan Tripathi</span>
        </div>
        <div className="typewrite">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Full Stack Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Data Engineer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Cloud Enthusiast")
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
