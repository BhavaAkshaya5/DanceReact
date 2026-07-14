import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Dance Beyond Limits</h1>
            <p>
              Discover your passion for dance at Aksh DanceHub. Learn from
              certified instructors, perform on grand stages, and become the
              best version of yourself.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">Join Now</button>
              <button className="secondary-btn">Explore Classes</button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about-home">
        <div className="container">

          <div className="about-left">
            <img
              src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=900&q=80"
              alt="Dance Studio"
            />
          </div>

          <div className="about-right">
            <h5>ABOUT US</h5>

            <h2>Welcome to Aksh DanceHub</h2>

            <p>
              Aksh DanceHub is one of the leading dance academies dedicated to
              nurturing talent and inspiring creativity. We offer classes for
              children, teenagers, and adults in various dance styles under the
              guidance of professional choreographers.
            </p>

            <p>
              Whether you're preparing for competitions, stage performances, or
              simply dancing for fitness and fun, we provide the perfect
              environment to help you grow.
            </p>

            <button className="primary-btn">
              Learn More
            </button>

          </div>

        </div>
      </section>

      {/* Dance Styles */}

      <section className="dance-styles">

        <div className="section-title">

          <h5>OUR CLASSES</h5>

          <h2>Popular Dance Styles</h2>

          <p>
            Choose your favorite dance style and begin your journey today.
          </p>

        </div>

        <div className="style-grid">

          <div className="style-card">
            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
              alt=""
            />

            <div className="style-content">
              <h3>Bharatanatyam</h3>

              <p>
                Traditional Indian classical dance with graceful expressions.
              </p>

              <button>Read More</button>
            </div>
          </div>

          <div className="style-card">
            <img
              src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=900&q=80"
              alt=""
            />

            <div className="style-content">
              <h3>Hip Hop</h3>

              <p>
                High-energy urban dance with freestyle techniques.
              </p>

              <button>Read More</button>
            </div>
          </div>

          <div className="style-card">
            <img
              src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=900&q=80"
              alt=""
            />

            <div className="style-content">
              <h3>Contemporary</h3>

              <p>
                Express emotions through elegant modern movements.
              </p>

              <button>Read More</button>
            </div>
          </div>

          <div className="style-card">
            <img
              src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=900&q=80"
              alt=""
            />

            <div className="style-content">
              <h3>Western</h3>

              <p>
                Learn jazz, freestyle and energetic western choreography.
              </p>

              <button>Read More</button>
            </div>
          </div>

          <div className="style-card">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80"
              alt=""
            />

            <div className="style-content">
              <h3>Kids Dance</h3>

              <p>
                Fun-filled dance sessions specially designed for children.
              </p>

              <button>Read More</button>
            </div>
          </div>

          <div className="style-card">
            <img
              src="https://images.unsplash.com/photo-1524594154908-eddba9ac8a4d?auto=format&fit=crop&w=900&q=80"
              alt=""
            />

            <div className="style-content">
              <h3>Folk Dance</h3>

              <p>
                Celebrate culture through colorful traditional performances.
              </p>

              <button>Read More</button>
            </div>
          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="why-us">

        <div className="section-title">

          <h5>WHY US</h5>

          <h2>Why Choose Aksh DanceHub?</h2>

        </div>

        <div className="features-grid">

          <div className="feature-box">
            <h3>Professional Trainers</h3>
            <p>
              Learn from experienced choreographers with years of stage
              performance experience.
            </p>
          </div>

          <div className="feature-box">
            <h3>Modern Studio</h3>
            <p>
              Spacious air-conditioned dance halls with premium sound systems.
            </p>
          </div>

          <div className="feature-box">
            <h3>Flexible Timings</h3>
            <p>
              Morning, evening and weekend batches for all age groups.
            </p>
          </div>

          <div className="feature-box">
            <h3>Stage Performances</h3>
            <p>
              Showcase your talent in annual cultural festivals and competitions.
            </p>
          </div>

          <div className="feature-box">
            <h3>Certification</h3>
            <p>
              Receive certificates after successful completion of every level.
            </p>
          </div>

          <div className="feature-box">
            <h3>Affordable Fees</h3>
            <p>
              High-quality dance education at budget-friendly pricing.
            </p>
          </div>

        </div>

      </section>
            {/* Meet Our Trainers */}

      <section className="trainers">

        <div className="section-title">
          <h5>OUR TEAM</h5>
          <h2>Meet Our Expert Trainers</h2>
          <p>
            Our experienced instructors inspire students with creativity,
            discipline, and passion for dance.
          </p>
        </div>

        <div className="trainer-grid">

          <div className="trainer-card">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Trainer"
            />

            <h3>Priya Sharma</h3>

            <span>Bharatanatyam Expert</span>

            <p>
              12+ years of experience in Classical Dance and National Level
              Performer.
            </p>

          </div>

          <div className="trainer-card">

            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Trainer"
            />

            <h3>Rahul Verma</h3>

            <span>Hip Hop Coach</span>

            <p>
              International Hip Hop choreographer with award-winning
              performances.
            </p>

          </div>

          <div className="trainer-card">

            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Trainer"
            />

            <h3>Ananya Iyer</h3>

            <span>Contemporary Coach</span>

            <p>
              Passionate performer specializing in contemporary and lyrical
              dance.
            </p>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="statistics">

        <div className="stat-box">
          <h1>1000+</h1>
          <p>Happy Students</p>
        </div>

        <div className="stat-box">
          <h1>20+</h1>
          <p>Professional Trainers</p>
        </div>

        <div className="stat-box">
          <h1>150+</h1>
          <p>Stage Performances</p>
        </div>

        <div className="stat-box">
          <h1>25+</h1>
          <p>Awards Won</p>
        </div>

      </section>

      {/* Upcoming Events */}

      <section className="events">

        <div className="section-title">

          <h5>EVENTS</h5>

          <h2>Upcoming Events</h2>

        </div>

        <div className="event-grid">

          <div className="event-card">

            <h3>Summer Dance Camp</h3>

            <h4>15 August 2026</h4>

            <p>

              Learn exciting choreography and perform in our annual showcase.

            </p>

          </div>

          <div className="event-card">

            <h3>Talent Hunt</h3>

            <h4>28 September 2026</h4>

            <p>

              Showcase your dancing skills and win exciting prizes.

            </p>

          </div>

          <div className="event-card">

            <h3>Annual Dance Fest</h3>

            <h4>20 December 2026</h4>

            <p>

              Grand stage performances by students and guest artists.

            </p>

          </div>

        </div>

      </section>

      {/* Student Achievements */}

      <section className="achievements">

        <div className="section-title">

          <h5>ACHIEVEMENTS</h5>

          <h2>Student Success Stories</h2>

        </div>

        <div className="achievement-grid">

          <div className="achievement-card">
            🏆 National Dance Championship Winner
          </div>

          <div className="achievement-card">
            🥇 State Level Classical Dance Gold Medal
          </div>

          <div className="achievement-card">
            🎖️ Best Choreography Award 2025
          </div>

          <div className="achievement-card">
            🌟 100+ Stage Performances Completed
          </div>

        </div>

      </section>

      {/* Testimonials */}

      <section className="testimonials">

        <div className="section-title">

          <h5>REVIEWS</h5>

          <h2>What Our Students Say</h2>

        </div>

        <div className="testimonial-grid">

          <div className="testimonial-card">

            ⭐⭐⭐⭐⭐

            <p>

              Aksh DanceHub completely changed my confidence.
              The trainers are incredibly supportive.

            </p>

            <h4>- Meena</h4>

          </div>

          <div className="testimonial-card">

            ⭐⭐⭐⭐⭐

            <p>

              Amazing studio with excellent choreography and
              friendly atmosphere.

            </p>

            <h4>- Arjun</h4>

          </div>

          <div className="testimonial-card">

            ⭐⭐⭐⭐⭐

            <p>

              Every class is energetic and inspiring.
              Highly recommended.

            </p>

            <h4>- Keerthana</h4>

          </div>

        </div>

      </section>

      {/* Gallery */}

      <section className="gallery-preview">

        <div className="section-title">

          <h5>GALLERY</h5>

          <h2>Moments Captured</h2>

        </div>

        <div className="gallery-grid">

          <img src="https://picsum.photos/400/300?1" alt="" />
          <img src="https://picsum.photos/400/300?2" alt="" />
          <img src="https://picsum.photos/400/300?3" alt="" />
          <img src="https://picsum.photos/400/300?4" alt="" />
          <img src="https://picsum.photos/400/300?5" alt="" />
          <img src="https://picsum.photos/400/300?6" alt="" />

        </div>

      </section>

      {/* Call To Action */}

      <section className="cta">

        <h2>Start Your Dance Journey Today</h2>

        <p>

          Join hundreds of passionate dancers and experience
          world-class training with professional instructors.

        </p>

        <button className="primary-btn">

          Enroll Now

        </button>

      </section>
      <Footer />
    </>
  );
}

export default Home;
