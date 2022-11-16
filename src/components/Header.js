import { useNavigate} from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    const navigate = useNavigate();
    return ( 
        <div className='link'>
            <div className="links">
                <a onClick={()=> {navigate('/')}}>HOME</a>
                <a onClick={()=> {navigate('/about')}}>ABOUT</a>
                <a onClick={()=> {navigate('/projects')}}>PROJECTS</a>
                <a onClick={()=> {navigate('/contact')}}>CONTACT</a>
            </div>
        </div>
        );
}
 
export default Header;