import "../styles/Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">
      <div className="container">

        {/* Header */}
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you. Reach out and let's connect!</p>
        </div>

        <div className="contact-content">

          {/* Contact Info */}
          <div className="contact-info card">
            <h2>Get In Touch</h2>

            <p><FaEnvelope className="icon" /> support@edutech.com</p>
            <p><FaPhoneAlt className="icon" /> +91 98765 43210</p>
            <p><FaMapMarkerAlt className="icon" /> New Delhi, India</p>

            <div className="social-links">
              <a href="#" className="social-btn fb"><FaFacebookF /></a>
              <a href="#" className="social-btn li"><FaLinkedinIn /></a>
              <a href="#" className="social-btn ig"><FaInstagram /></a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form card">
            <h2>Send a Message</h2>

            <form>
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input type="text" placeholder="Your Name" required />
              </div>

              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input type="email" placeholder="Your Email" required />
              </div>

              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input type="text" placeholder="Subject" required />
              </div>

              <div className="input-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>

              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
