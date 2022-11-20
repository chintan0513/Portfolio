import '../styles/contact.css';
import Footer from './Footer'
import { send } from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        reply_to: '',
        message: ''
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
                    <input type='text'name='from_name'placeholder='Name'value={toSend.from_name} onChange={handleChange} required className="Name"/>
                    <input type='email' name='reply_to' placeholder='Your Email' value={toSend.reply_to} onChange={handleChange} required />
                    <textarea type='text' name='message' placeholder='Your Message' value={toSend.message} onChange={handleChange} required/>
                    <button type="submit" className="btn">Send</button>
                </form>
            </div>
            <Footer />
        </div>
     );
}
 
export default Contact;