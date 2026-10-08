import React from "react"

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thanks! Your message has been submitted.");
  };


  return (
    <div className="page-container">

      <div className="page-header">
        <h1>Contact Me</h1>
        <p>
          Have a project or opportunity? I'd love to hear from you.
        </p>
      </div>

      <div className="contact-layout">

        {/* Contact Information */}
        <div className="card contact-info">
          <h2>Let's Connect</h2>

          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas,
            or opportunities to be part of your team.
          </p>

          <div className="contact-item">
            <span><img src="./images/mail-icon.jpg" className="email-icon" alt="email" ></img></span>
            
            <a href="mailto:farkalit.usman76@gmail.com">
              farkalit.usman76@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span><img src="./images/phone-icon-01.png" className="email-icon" alt="phone" ></img></span>
            <a href="tel:+919876543210">
              +91 9540 567403
            </a>
          </div>

          <div className="contact-item">
            <h3>Location</h3>
            <p>New Delhi, India</p>
          </div>

          <div className="social-links">
            <a href="https://github.com/farkalit76/" target="_blank" rel="noreferrer" >
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/farkalit/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="card contact-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name">Your Name</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>

            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="What is this about?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          {/* <button type="submit" className="btn btn-primary">
            Send Message
          </button> */}
           <a className="btn btn-primary" href="mailto:farkalit.usman76@gmail.com">Send Email</a>

        </form>

      </div>

    </div>
  );
}


