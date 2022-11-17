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
                    <span></span>    
                    <a href='https://www.instagram.com/chintan0513/' rel="noreferrer" target="_blank"><BsInstagram /></a>
                </div>   
                <div className='link-group'>
                    <span></span>
                    <a href='https://www.facebook.com/' rel="noreferrer"  target="_blank"><BsFacebook /></a>
                </div> 
                <div className='link-group'>
                    <span></span> 
                    <a href='https://github.com/chintan0513' rel="noreferrer"  target="_blank"><BsGithub /></a>
                </div> 
                <div className='link-group'>
                    <span></span>
                    <a href='https://www.linkedin.com/in/chintan13/' rel="noreferrer"  target="_blank"><BsLinkedin /></a>
                </div>                      
            </div>
        </div>

     );
}
 
export default Footer;