import '../styles/contact.css';

const Contact = () => {
    return ( 
        <div className="contact" id="contact">
            <h1 className="h1" style={{color:'white'}}>Contact Me</h1>
            <div className="form">
                <form className="form-group">
                    <input type="text" placeholder="Name" name="Name" class="Name"/>
                    <input type="email" placeholder="Email" name="Email" class="Email" />
                    <textarea placeholder="Message" name="Message" class="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;