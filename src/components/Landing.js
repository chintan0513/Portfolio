import React from "react";
import Typewriter from "typewriter-effect";
import '../styles/landing.css';
import main from '../assets/pic.png'

const Landing = () => {
    return ( 
        <div className='landing'>
            <div className="intro">
                <div className="typewrite">
                    <Typewriter onInit={(typewriter)=> {
                    typewriter.typeString(" I'm Chintan Tripathi.").pauseFor(1000).start()
                }}/>
                </div>
                <div className="image">
                    <img src={main} alt="pic"/>
                </div>
            </div>

            <div className="projects">
                <div>
                    <h1>Projects</h1>    
                </div>
                <div className="project">
                    <div className="card">
                       
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Landing;