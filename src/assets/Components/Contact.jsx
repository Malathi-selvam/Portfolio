import React, { useRef } from "react";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";

function Contact() {
  const form = useRef();

  // Initialize AOS (for animation)
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h8ixktk", // your EmailJS service ID
        "template_9yxkz7h", // your template ID
        form.current,
        "iwM98b603Au7jBLpT" // your public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <Element name="Contact" className="contact-section">
      <h2 className="contact-title" data-aos="fade-up">
        Let’s Connect 🤝
      </h2>
      <p className="contact-subtitle" data-aos="fade-up">
        Feel free to reach out — I’d love to collaborate !
      </p>

      <div className="contact-container">
        {/* Left: Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          data-aos="fade-right"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>

        {/* Right: Info Section */}
        <div className="contact-info" data-aos="fade-left">
          <h3 className="contact-title">Get in Touch 📬</h3>
          <p className="contact-sub">
            Whether it’s about a new project, an opportunity, or just tech talk
            — I’d love to hear from you!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>malathiselvam283@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Kovilpatti, Tamil Nadu</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-briefcase"></i>
              <span>Open to work — Full Stack / Java Developer</span>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Malathi-selvam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/malathi-selvam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
