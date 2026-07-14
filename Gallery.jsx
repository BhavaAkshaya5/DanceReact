import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Gallery() {
  const galleryImages = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
      title: "Classical Performance",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80",
      title: "Hip Hop Practice",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80",
      title: "Contemporary Dance",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=800&q=80",
      title: "Annual Day",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1524594154908-eddba9ac8a4d?auto=format&fit=crop&w=800&q=80",
      title: "Workshop",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
      title: "Kids Dance",
    },
    {
      id: 7,
      image:
        "https://picsum.photos/600/500?random=1",
      title: "Competition",
    },
    {
      id: 8,
      image:
        "https://picsum.photos/600/500?random=2",
      title: "Stage Show",
    },
    {
      id: 9,
      image:
        "https://picsum.photos/600/500?random=3",
      title: "Group Performance",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="gallery-hero">
        <div className="gallery-overlay">
          <div className="gallery-content">
            <h1>Gallery</h1>
            <p>
              Every picture tells a story of passion, dedication, creativity,
              and unforgettable performances.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}

      <section className="gallery-intro">

        <div className="section-title">

          <h5>OUR MEMORIES</h5>

          <h2>Moments That Inspire</h2>

          <p>
            Explore performances, competitions, workshops, rehearsals and
            unforgettable memories from Aksh DanceHub.
          </p>

        </div>

      </section>

      {/* Gallery Grid */}

      <section className="gallery-page">

        <div className="gallery-container">

          {galleryImages.map((item) => (
            <div className="gallery-card" key={item.id}>

              <img src={item.image} alt={item.title} />

              <div className="gallery-card-content">

                <h3>{item.title}</h3>

                <p>
                  Capturing beautiful dance moments and unforgettable
                  performances.
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Highlights */}

      <section className="gallery-highlights">

        <div className="section-title">

          <h5>HIGHLIGHTS</h5>

          <h2>What You'll Find</h2>

        </div>

        <div className="features-grid">

          <div className="feature-box">
            <h3>📸 Annual Day</h3>
            <p>Grand performances by all our talented students.</p>
          </div>

          <div className="feature-box">
            <h3>🏆 Competitions</h3>
            <p>Winning moments from district and state-level events.</p>
          </div>

          <div className="feature-box">
            <h3>🎭 Workshops</h3>
            <p>Learning sessions with guest choreographers.</p>
          </div>

          <div className="feature-box">
            <h3>💃 Practice Sessions</h3>
            <p>Behind-the-scenes rehearsals and teamwork.</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>Create Your Own Dance Memories</h2>

        <p>
          Join Aksh DanceHub today and become part of our inspiring journey.
        </p>

        <button className="primary-btn">
          Join Now
        </button>

      </section>

      <Footer />

    </>
  );
}

export default Gallery;