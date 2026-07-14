import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Classes() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="classes-hero">

        <div className="classes-overlay">

          <div className="classes-content">

            <h1>Our Dance Classes</h1>

            <p>
              Discover a variety of dance styles taught by experienced
              instructors. Whether you are a beginner or an advanced dancer,
              we have the perfect class for you.
            </p>

          </div>

        </div>

      </section>

      {/* Introduction */}

      <section className="classes-intro">

        <div className="section-title">

          <h5>EXPLORE</h5>

          <h2>Choose Your Dance Style</h2>

          <p>
            Learn different dance forms through structured courses,
            professional guidance, and exciting performances.
          </p>

        </div>

      </section>

      {/* Dance Cards */}

      <section className="dance-cards">

        <div className="card-grid">

          <div className="dance-card">

            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
              alt="Bharatanatyam"
            />

            <div className="card-content">

              <h2>Bharatanatyam</h2>

              <p>
                Learn one of India's oldest classical dance forms with proper
                expressions, rhythm, and traditional movements.
              </p>

              <ul>
                <li>Duration : 6 Months</li>
                <li>Age : 8+ Years</li>
                <li>Fees : ₹2500 / Month</li>
                <li>Trainer : Priya Sharma</li>
              </ul>

              <button className="primary-btn">
                Enroll Now
              </button>

            </div>

          </div>

          <div className="dance-card">

            <img
              src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=900&q=80"
              alt="Hip Hop"
            />

            <div className="card-content">

              <h2>Hip Hop</h2>

              <p>
                Master energetic freestyle movements and improve confidence
                with exciting urban choreography.
              </p>

              <ul>
                <li>Duration : 4 Months</li>
                <li>Age : 10+ Years</li>
                <li>Fees : ₹2200 / Month</li>
                <li>Trainer : Rahul Kumar</li>
              </ul>

              <button className="primary-btn">
                Enroll Now
              </button>

            </div>

          </div>

          <div className="dance-card">

            <img
              src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=900&q=80"
              alt="Contemporary"
            />

            <div className="card-content">

              <h2>Contemporary</h2>

              <p>
                Express your emotions through graceful movements,
                flexibility, and modern choreography.
              </p>

              <ul>
                <li>Duration : 5 Months</li>
                <li>Age : 12+ Years</li>
                <li>Fees : ₹2400 / Month</li>
                <li>Trainer : Ananya Iyer</li>
              </ul>

              <button className="primary-btn">
                Enroll Now
              </button>

            </div>

          </div>

          <div className="dance-card">

            <img
              src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=900&q=80"
              alt="Western"
            />

            <div className="card-content">

              <h2>Western Dance</h2>

              <p>
                Learn jazz, freestyle and stage performance techniques
                from expert choreographers.
              </p>

              <ul>
                <li>Duration : 4 Months</li>
                <li>Age : 10+ Years</li>
                <li>Fees : ₹2200 / Month</li>
                <li>Trainer : Sneha Joseph</li>
              </ul>

              <button className="primary-btn">
                Enroll Now
              </button>

            </div>

          </div>

          <div className="dance-card">

            <img
              src="https://images.unsplash.com/photo-1524594154908-eddba9ac8a4d?auto=format&fit=crop&w=900&q=80"
              alt="Folk Dance"
            />

            <div className="card-content">

              <h2>Folk Dance</h2>

              <p>
                Celebrate India's rich traditions through colorful and
                energetic folk dance performances.
              </p>

              <ul>
                <li>Duration : 3 Months</li>
                <li>Age : All Ages</li>
                <li>Fees : ₹1800 / Month</li>
                <li>Trainer : Meena Devi</li>
              </ul>

              <button className="primary-btn">
                Enroll Now
              </button>

            </div>

          </div>

          <div className="dance-card">

            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80"
              alt="Kids Dance"
            />

            <div className="card-content">

              <h2>Kids Dance</h2>

              <p>
                Fun-filled dance classes specially designed to improve
                children's coordination, rhythm, and confidence.
              </p>

              <ul>
                <li>Duration : 3 Months</li>
                <li>Age : 4–10 Years</li>
                <li>Fees : ₹1500 / Month</li>
                <li>Trainer : Divya Rani</li>
              </ul>

              <button className="primary-btn">
                Enroll Now
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* Benefits */}

      <section className="why-about">

        <div className="section-title">

          <h5>BENEFITS</h5>

          <h2>Why Join Our Classes?</h2>

        </div>

        <div className="about-features">

          <div className="about-feature">
            <h3>Certified Trainers</h3>
            <p>Learn from experienced professionals.</p>
          </div>

          <div className="about-feature">
            <h3>Flexible Timings</h3>
            <p>Morning, evening and weekend batches.</p>
          </div>

          <div className="about-feature">
            <h3>Stage Performances</h3>
            <p>Participate in annual cultural events.</p>
          </div>

          <div className="about-feature">
            <h3>Certificates</h3>
            <p>Receive certificates after course completion.</p>
          </div>

          <div className="about-feature">
            <h3>Affordable Fees</h3>
            <p>Quality training at reasonable prices.</p>
          </div>

          <div className="about-feature">
            <h3>Friendly Environment</h3>
            <p>Positive learning atmosphere for everyone.</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>Ready to Begin Your Dance Journey?</h2>

        <p>
          Join Aksh DanceHub today and learn from the best dance professionals.
        </p>

        <button className="primary-btn">
          Register Today
        </button>

      </section>

      <Footer />

    </>
  );
}

export default Classes;