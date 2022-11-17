import '../styles/footer.css';
import { BsInstagram, BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                
                </p>
            </div>
            <div className="social-media">
                <div className='link-group'>
                    <span><BsInstagram /></span>    
                    <a href='https://www.instagram.com/chintan0513/' target="_blank">Instagram</a>
                </div>   
                <div className='link-group'>
                    <span><BsFacebook /></span>
                    <a href='https://www.facebook.com/' target="_blank">Facebook</a>
                </div> 
                <div className='link-group'>
                    <span><BsGithub /></span> 
                    <a href='https://github.com/chintan0513' target="_blank">Github</a>
                </div> 
                <div className='link-group'>
                    <span><BsLinkedin /></span>
                    <a href='https://www.linkedin.com/in/chintan13/' target="_blank">LinkedIn</a>
                </div>                      
            </div>
        </div>

     );
}
 
export default Footer;