import '../styles/contact.css';
import Footer from './Footer'

const Contact = () => {
    return ( 
        <div className="contact" id="contact">
            <h1 className="h1" style={{color:'white'}}>Contact Me</h1>
            <div className="form">
                <form className="form-group">
                    <input type="text" placeholder="Name" name="Name" className="Name"/>
                    <input type="email" placeholder="Enter Email" name="Email" className="Email" />
                    <textarea placeholder="Your Message" name="Message" className="Message"></textarea>
                    <button type="submit" className="btn">Send</button>
                </form>
            </div>
            <Footer />
        </div>
     );
}
 
export default Contact;