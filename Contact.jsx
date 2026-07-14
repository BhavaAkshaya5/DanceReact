import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="contact-hero">
        <div className="contact-overlay">
          <div className="contact-content">
            <h1>Contact Us</h1>
            <p>
              We'd love to hear from you. Get in touch with Aksh DanceHub for
              admissions, classes, events, or any enquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}

      <section className="contact-section">

        <div className="container">

          <div className="contact-grid">

            {/* Contact Details */}

            <div className="contact-card">

              <h2>Get In Touch</h2>

              <p>
                Feel free to contact us anytime. Our team is always ready to
                assist you.
              </p>

              <div className="contact-info">

                <p><strong>📍 Address:</strong><br/>
                Aksh DanceHub,<br/>
                Virudhunagar, Tamil Nadu</p>

                <p><strong>📞 Phone:</strong><br/>
                +91 98765 43210</p>

                <p><strong>📧 Email:</strong><br/>
                info@akshdancehub.com</p>

                <p><strong>🕒 Working Hours:</strong><br/>
                Monday - Saturday<br/>
                8:00 AM - 8:00 PM</p>

              </div>

            </div>

            {/* Contact Form */}

            <div className="contact-form">

              <h2>Send Us a Message</h2>

              <form>

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                />

                <input
                  type="text"
                  placeholder="Subject"
                />

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                ></textarea>

                <button
                  type="submit"
                  className="primary-btn"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* Google Map */}

      <section className="map-section">

        <div className="section-title">

          <h5>LOCATION</h5>

          <h2>Visit Our Academy</h2>

        </div>

        <div className="map-container">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Virudhunagar,Tamil%20Nadu&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </section>

      {/* Why Contact Us */}

      <section className="why-contact">

        <div className="section-title">

          <h5>WHY CONTACT US</h5>

          <h2>We're Here To Help</h2>

        </div>

        <div className="features-grid">

          <div className="feature-box">
            <h3>💃 Admission Guidance</h3>
            <p>
              Get complete details about our dance courses and admission process.
            </p>
          </div>

          <div className="feature-box">
            <h3>🎭 Event Enquiries</h3>
            <p>
              Contact us regarding performances, workshops and competitions.
            </p>
          </div>

          <div className="feature-box">
            <h3>👨‍🏫 Expert Trainers</h3>
            <p>
              Meet our experienced instructors and choose your preferred class.
            </p>
          </div>

          <div className="feature-box">
            <h3>📅 Class Schedule</h3>
            <p>
              Learn about our flexible weekday and weekend batches.
            </p>
          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="faq">

        <div className="section-title">

          <h5>FAQ</h5>

          <h2>Frequently Asked Questions</h2>

        </div>

        <div className="faq-box">

          <div className="faq-item">
            <h3>Who can join Aksh DanceHub?</h3>
            <p>Anyone aged 4 years and above can enroll in our dance programs.</p>
          </div>

          <div className="faq-item">
            <h3>Do you provide certificates?</h3>
            <p>Yes. Students receive certificates after successfully completing each course level.</p>
          </div>

          <div className="faq-item">
            <h3>Do you conduct stage performances?</h3>
            <p>Yes. Students participate in annual shows, cultural programs and competitions.</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>Ready To Dance With Us?</h2>

        <p>
          Join Aksh DanceHub today and begin your exciting dance journey with
          expert guidance.
        </p>

        <button className="primary-btn">
          Join Today
        </button>

      </section>

      <Footer />

    </>
  );
}

export default Contact;