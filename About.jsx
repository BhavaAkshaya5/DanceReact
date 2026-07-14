import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">

        <div className="about-overlay">

          <div className="about-hero-content">

            <h1>About Aksh DanceHub</h1>

            <p>
              Inspiring every dancer to express, perform and achieve excellence
              through creativity, discipline and passion.
            </p>

          </div>

        </div>

      </section>

      {/* Our Story */}

      <section className="our-story">

        <div className="container">

          <div className="story-image">

            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
              alt="Dance Studio"
            />

          </div>

          <div className="story-content">

            <h5>OUR STORY</h5>

            <h2>Building Confident Dancers Since 2015</h2>

            <p>

              Aksh DanceHub was founded with a vision of creating a space where
              students of every age can learn, perform and grow through dance.
              Our academy combines professional training with creativity to help
              students develop confidence, discipline and teamwork.

            </p>

            <p>

              Over the years, we have trained hundreds of students who have
              successfully performed in cultural festivals, competitions,
              television shows and national-level events.

            </p>

            <button className="primary-btn">
              Explore Classes
            </button>

          </div>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="mission-vision">

        <div className="container">

          <div className="mission-card">

            <h2>Our Mission</h2>

            <p>

              To provide world-class dance education by encouraging creativity,
              discipline, teamwork and self-confidence while preserving the art
              and culture of dance.

            </p>

          </div>

          <div className="vision-card">

            <h2>Our Vision</h2>

            <p>

              To become one of India's leading dance academies by empowering
              every student to achieve artistic excellence and personal growth.

            </p>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="why-about">

        <div className="section-title">

          <h5>WHY CHOOSE US</h5>

          <h2>Experience the Difference</h2>

          <p>

            We focus on creating confident performers while providing a safe,
            friendly and inspiring learning environment.

          </p>

        </div>

        <div className="about-features">

          <div className="about-feature">

            <h3>Professional Faculty</h3>

            <p>

              Experienced choreographers with national and international
              performance backgrounds.

            </p>

          </div>

          <div className="about-feature">

            <h3>Modern Dance Studio</h3>

            <p>

              Spacious halls equipped with premium lighting, mirrors and sound
              systems.

            </p>

          </div>

          <div className="about-feature">

            <h3>Performance Opportunities</h3>

            <p>

              Students participate in competitions, annual shows and cultural
              festivals throughout the year.

            </p>

          </div>

          <div className="about-feature">

            <h3>Flexible Schedule</h3>

            <p>

              Morning, evening and weekend batches suitable for students and
              working professionals.

            </p>

          </div>

          <div className="about-feature">

            <h3>Certificate Courses</h3>

            <p>

              Receive recognized completion certificates after successfully
              finishing each level.

            </p>

          </div>

          <div className="about-feature">

            <h3>Friendly Environment</h3>

            <p>

              A motivating atmosphere that encourages learning, teamwork and
              lifelong friendships.

            </p>

          </div>

        </div>

      </section>
            {/* Core Values */}

      <section className="core-values">

        <div className="section-title">

          <h5>OUR VALUES</h5>

          <h2>What We Believe</h2>

        </div>

        <div className="values-grid">

          <div className="value-card">
            <h3>💙 Passion</h3>
            <p>
              We encourage every student to dance with confidence, dedication,
              and enthusiasm.
            </p>
          </div>

          <div className="value-card">
            <h3>🤝 Respect</h3>
            <p>
              We promote teamwork, discipline, and mutual respect in every
              class.
            </p>
          </div>

          <div className="value-card">
            <h3>✨ Creativity</h3>
            <p>
              Students are encouraged to express themselves through innovative
              choreography and performance.
            </p>
          </div>

          <div className="value-card">
            <h3>🏆 Excellence</h3>
            <p>
              Our goal is to help every student achieve their highest potential.
            </p>
          </div>

        </div>

      </section>

      {/* Achievements */}

      <section className="academy-achievements">

        <div className="section-title">

          <h5>ACHIEVEMENTS</h5>

          <h2>Our Success Journey</h2>

        </div>

        <div className="achievement-grid">

          <div className="achievement-card">
            <h1>1000+</h1>
            <p>Students Trained</p>
          </div>

          <div className="achievement-card">
            <h1>50+</h1>
            <p>Dance Awards</p>
          </div>

          <div className="achievement-card">
            <h1>20+</h1>
            <p>Professional Trainers</p>
          </div>

          <div className="achievement-card">
            <h1>150+</h1>
            <p>Stage Performances</p>
          </div>

        </div>

      </section>

      {/* Trainer Preview */}

      <section className="trainer-preview">

        <div className="section-title">

          <h5>OUR FACULTY</h5>

          <h2>Meet Our Expert Trainers</h2>

        </div>

        <div className="trainer-grid">

          <div className="trainer-card">

            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Trainer"
            />

            <h3>Priya Sharma</h3>

            <p>Classical Dance Instructor</p>

          </div>

          <div className="trainer-card">

            <img
              src="https://randomuser.me/api/portraits/men/35.jpg"
              alt="Trainer"
            />

            <h3>Rahul Kumar</h3>

            <p>Hip Hop Choreographer</p>

          </div>

          <div className="trainer-card">

            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Trainer"
            />

            <h3>Ananya Iyer</h3>

            <p>Contemporary Dance Coach</p>

          </div>

        </div>

      </section>

      {/* Call To Action */}

      <section className="cta">

        <h2>Become a Part of Aksh DanceHub</h2>

        <p>

          Whether you're taking your first dance steps or preparing for
          professional performances, we're here to support your journey.

        </p>

        <button className="primary-btn">

          Join Today

        </button>

      </section>

      <Footer />
    </>
  );
}

export default About;