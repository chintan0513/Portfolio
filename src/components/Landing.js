import React from 'react';
import Typewriter from "typewriter-effect";
import '../styles/landing.css';
import main from '../assets/main.jpg'

const Landing = () => {
    return ( 
        <div className="landing">
            <div className="typewrite">
                <Typewriter onInit={(typewriter)=> {
                    typewriter.typeString("Chintan Tripathi")
                    .pauseFor(500).deleteAll()
                    .typeString("React Developer").start();
                }}
                />
            </div>
            <div className="svg">
                
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='svg'>
                    <path fill="#5ECAEC" d="M58,-40.7C72,-28.8,77.9,-4.8,73.9,18.4C69.8,41.7,55.8,64.2,35.9,73.3C16,82.4,-9.8,78.2,-30.2,66.8C-50.5,55.4,-65.5,36.9,-72.4,14.3C-79.2,-8.2,-78.1,-34.8,-64.7,-46.6C-51.3,-58.4,-25.6,-55.4,-1.8,-54C22,-52.6,44.1,-52.6,58,-40.7Z"  transform="translate(100 100)" />
                </svg>
           
            </div>
        </div>
     );
}
 
export default Landing;