import '../styles/header.css';
import main from '../assets/2.png'

const Header = () => {
    
    return ( 
        <div className='header'>
            <div className='logo'>
                <img src={main} className="image-logo" alt='logo'/>
            </div>
            <div className="links">
                <a href="#home">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#projects">PROJECTS</a>
                <a href="#contact">CONTACT</a>
            </div>
        </div>
        );
}
 
export default Header;