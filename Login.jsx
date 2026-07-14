import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="login-hero">

        <div className="login-overlay">

          <div className="login-heading">

            <h1>Welcome Back</h1>

            <p>
              Login to access your student dashboard, attendance,
              certificates and class schedules.
            </p>

          </div>

        </div>

      </section>

      {/* Login Section */}

      <section className="login-section">

        <div className="login-container">

          {/* Left Side */}

          <div className="login-left">

            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
              alt="Dance"
            />

          </div>

          {/* Right Side */}

          <div className="login-right">

            <h2>Student Login</h2>

            <p>
              Sign in to continue your dance journey.
            </p>

            <form>

              <input
                type="email"
                placeholder="Email Address"
                required
              />

              <input
                type="password"
                placeholder="Password"
                required
              />

              <div className="login-options">

                <label>

                  <input type="checkbox" />

                  Remember Me

                </label>

                <Link to="/forgot-password">

                  Forgot Password?

                </Link>

              </div>

              <button
                type="submit"
                className="primary-btn"
              >
                Login
              </button>

            </form>

            <div className="divider">

              <span>OR</span>

            </div>

            <button className="google-btn">

              Continue with Google

            </button>

            <p className="signup-text">

              Don't have an account?

              <Link to="/signup">

                Sign Up

              </Link>

            </p>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="login-features">

        <div className="section-title">

          <h5>WHY LOGIN?</h5>

          <h2>Student Portal Benefits</h2>

        </div>

        <div className="features-grid">

          <div className="feature-box">

            <h3>📅 Attendance</h3>

            <p>

              View your attendance anytime.

            </p>

          </div>

          <div className="feature-box">

            <h3>🏆 Certificates</h3>

            <p>

              Download your course certificates.

            </p>

          </div>

          <div className="feature-box">

            <h3>💰 Fee Details</h3>

            <p>

              Track payment history and due dates.

            </p>

          </div>

          <div className="feature-box">

            <h3>📢 Announcements</h3>

            <p>

              Stay updated with academy events.

            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>Join Aksh DanceHub Today</h2>

        <p>

          Learn from professional trainers and perform on amazing stages.

        </p>

        <button className="primary-btn">

          Register Now

        </button>

      </section>

      <Footer />

    </>
  );
}

export default Login;