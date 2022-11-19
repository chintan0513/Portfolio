import React from "react";
import Typewriter from "typewriter-effect";
import '../styles/landing.css';

const Landing = () => {
    return ( 
        <div className='landing' id="home">
            <div className="intro">
                <div className="name">
                    <span>Hi<div className="hand">👋🏻</div></span>
                    <span className='my-name'>I'm Chintan Tripathi</span>
                </div>
                <div className="typewrite">
                    <Typewriter onInit={(typewriter)=> {
                    typewriter.typeString("CODER").pauseFor(1000).deleteAll()
                    .typeString("TRAVELER").pauseFor(1000).deleteAll()
                    .typeString("FOODIE").pauseFor(1000).start();
                }}/>
                </div>

            </div>
        </div>
     );
}
 
export default Landing;