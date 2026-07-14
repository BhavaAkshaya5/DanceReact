import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function StudentDashboard() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="dashboard-hero">
        <div className="dashboard-overlay">
          <div className="dashboard-content">
            <h1>Student Dashboard</h1>
            <p>
              Welcome back! Manage your classes, attendance, fees,
              certificates and announcements in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="dashboard-welcome">
        <div className="container">
          <h2>Welcome, Student 👋</h2>
          <p>
            We're happy to see you again. Here's a quick overview of your
            progress at Aksh DanceHub.
          </p>
        </div>
      </section>

      {/* Dashboard Cards */}
      <section className="dashboard-cards">

        <div className="dashboard-grid">

          <div className="dashboard-card">
            <h2>📅 Attendance</h2>
            <h1>92%</h1>
            <p>Excellent Attendance</p>
          </div>

          <div className="dashboard-card">
            <h2>💰 Fees</h2>
            <h1>Paid</h1>
            <p>Next Due : 15 Aug 2026</p>
          </div>

          <div className="dashboard-card">
            <h2>🏆 Certificates</h2>
            <h1>5</h1>
            <p>Certificates Earned</p>
          </div>

          <div className="dashboard-card">
            <h2>🎭 Performances</h2>
            <h1>18</h1>
            <p>Completed Shows</p>
          </div>

          <div className="dashboard-card">
            <h2>💃 Current Class</h2>
            <h1>Hip Hop</h1>
            <p>Monday - Friday</p>
          </div>

          <div className="dashboard-card">
            <h2>⭐ Progress</h2>
            <h1>85%</h1>
            <p>Keep Practicing!</p>
          </div>

        </div>

      </section>

      {/* Today's Schedule */}

      <section className="schedule">

        <div className="section-title">
          <h5>TODAY'S SCHEDULE</h5>
          <h2>Your Classes</h2>
        </div>

        <table className="schedule-table">

          <thead>

            <tr>
              <th>Time</th>
              <th>Class</th>
              <th>Trainer</th>
              <th>Room</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>09:00 AM</td>
              <td>Warm Up</td>
              <td>Priya Sharma</td>
              <td>Studio A</td>
            </tr>

            <tr>
              <td>10:00 AM</td>
              <td>Hip Hop</td>
              <td>Rahul Kumar</td>
              <td>Studio B</td>
            </tr>

            <tr>
              <td>03:00 PM</td>
              <td>Contemporary</td>
              <td>Ananya Iyer</td>
              <td>Studio C</td>
            </tr>

          </tbody>

        </table>

      </section>

      {/* Announcements */}

      <section className="announcements">

        <div className="section-title">
          <h5>ANNOUNCEMENTS</h5>
          <h2>Latest Updates</h2>
        </div>

        <div className="announcement-box">

          <div className="announcement">
            📢 Annual Dance Competition registrations are now open.
          </div>

          <div className="announcement">
            🎉 Independence Day Performance rehearsal starts next week.
          </div>

          <div className="announcement">
            🏆 Certificate distribution on 30th August.
          </div>

        </div>

      </section>

      {/* Quick Actions */}

      <section className="quick-actions">

        <div className="section-title">
          <h5>QUICK ACTIONS</h5>
          <h2>Student Services</h2>
        </div>

        <div className="action-grid">

          <button className="primary-btn">
            Download Certificate
          </button>

          <button className="primary-btn">
            Pay Fees
          </button>

          <button className="primary-btn">
            View Attendance
          </button>

          <button className="primary-btn">
            Update Profile
          </button>

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>Keep Dancing. Keep Growing.</h2>

        <p>
          Practice every day and become the best version of yourself with
          Aksh DanceHub.
        </p>

        <button className="primary-btn">
          Explore More
        </button>

      </section>

      <Footer />
    </>
  );
}

export default StudentDashboard;