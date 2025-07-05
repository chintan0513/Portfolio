import "../styles/contact.css";
import Footer from "./Footer";
import { send } from "emailjs-com";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_axra8ha", "template_qr9s3wc", toSend, "BEzHUk12PVKwoyiwf")
      .then(() => {
        window.location.reload();
        toast.success("Stay Tuned! I will get back to you soon.");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        toast.error("Oops! Something went wrong.");
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact" id="contact">
      <h1 className="h1">Contact Me</h1>
      <p className="subtitle">
        Have a question or want to work together? Let's connect!
      </p>
      <Toaster />
      <div className="form-container">
        <form className="form-group" onSubmit={onSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={toSend.from_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            value={toSend.reply_to}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={toSend.message}
            onChange={handleChange}
            rows="5"
            required
          />
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
