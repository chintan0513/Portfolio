import '../styles/contact.css';
import Footer from './Footer'
import { send } from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
      'service_axra8ha',
      'template_qr9s3wc',
      toSend,
      'BEzHUk12PVKwoyiwf'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
      };

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return ( 
        <div className="contact" id="contact">
            <h1 className="h1" style={{color:'white'}}>Contact Me</h1>
            <p>Have a question? Ping me..</p>
            <div className="form">
                <form className="form-group" onSubmit={onSubmit}>
                    <input type="text" placeholder="From Name" value={toSend.from_name} onChange={handleChange} name="Name" className="Name"/>
                    <input type="text" placeholder="To Name" value={toSend.to_name} onChange={handleChange} name="Name" className="Name"/>
                    <input type="email" placeholder="Enter Email" value={toSend.reply_to} onChange={handleChange} name="Email" className="Email" />
                    <textarea placeholder="Your Message" name="Message" value={toSend.message} onChange={handleChange} className="Message"></textarea>
                    <button type="submit" className="btn">Send</button>
                </form>
            </div>
            <Footer />
        </div>
     );
}
 
export default Contact;