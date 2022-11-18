import pic from '../assets/46.jpg'
import '../styles/about.css'
import { BsInstagram, BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const About = () => {
    return ( 
        <div className="about" id="about">
                <h1 className='h1'>About</h1> 
                <div className="card" id="card">
                    <div className="image">
                        <img src={pic} alt="pic" className="my-pic"/>
                    </div>
                    <hr />
                    <div className="content">
                        <div className='info'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                
                            </p>
                        </div>
                        <div className="social-media">
                            <div className='link-group'>
                                <a href='https://www.instagram.com/chintan0513/' rel="noreferrer" target="_blank"><BsInstagram /></a>
                            </div>   
                            <div className='link-group'>
                                <a href='https://www.facebook.com/' rel="noreferrer" target="_blank"><BsFacebook /></a>
                            </div> 
                            <div className='link-group'>
                                <a href='https://github.com/chintan0513' rel="noreferrer"  target="_blank"><BsGithub /></a>
                            </div> 
                            <div className='link-group'>
                                <a href='https://www.linkedin.com/in/chintan13/' rel="noreferrer"  target="_blank"><BsLinkedin /></a>
                            </div>                      
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default About;