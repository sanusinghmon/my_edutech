import "../styles/About.css"
import { FaUserGraduate, FaBullseye, FaCheckCircle, FaLaptopCode, FaChalkboardTeacher, FaLightbulb } from "react-icons/fa"

function About() {
  return (
    <section className="about-section">
      <div className="container">

        {/* Page Title */}
        <div className="about-header">
          <h1>About Us</h1>
          <p>
            Empowering students through high-quality online education and modern learning solutions.
          </p>
        </div>

        {/* About Content */}
        <div className="about-content">

          {/* Left Text */}
          <div className="about-text">

            {/* Who We Are */}
            <h2>
              <FaUserGraduate className="icon" /> Who We Are
            </h2>
            <p>
              We are a passionate team dedicated to providing accessible and
              affordable online education. Our goal is to help students build
              strong skills and succeed in their careers.
            </p>

            {/* Our Mission */}
            <h2>
              <FaBullseye className="icon" /> Our Mission
            </h2>
            <p>
              To make high-quality learning available to everyone, everywhere.
              We focus on practical knowledge, real-world projects, and career growth.
            </p>

            {/* Why Choose Us */}
            <h2>
              <FaCheckCircle className="icon" /> Why Choose Us?
            </h2>
            <ul className="features-list">
              <li><FaCheckCircle className="list-icon" /> Expert instructors</li>
              <li><FaCheckCircle className="list-icon" /> Industry-focused curriculum</li>
              <li><FaCheckCircle className="list-icon" /> Hands-on projects</li>
              <li><FaCheckCircle className="list-icon" /> Affordable pricing</li>
              <li><FaCheckCircle className="list-icon" /> Career support</li>
            </ul>

          </div>

          {/* Right Vector */}
          <div className="about-image">
            <svg
              width="100%"
              height="350"
              viewBox="0 0 600 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="50" y="100" width="500" height="250" rx="25" fill="#e0e7ff" />
              <rect x="100" y="130" width="400" height="180" rx="20" fill="white" />
              <rect x="150" y="150" width="300" height="120" rx="12" fill="#4f46e5" />
              <rect x="170" y="170" width="260" height="80" rx="6" fill="#eef2ff" />
              <rect x="180" y="270" width="240" height="15" rx="3" fill="#c7d2fe" />
              <polygon points="300,90 340,110 300,130 260,110" fill="#7c3aed" />
              <line x1="300" y1="90" x2="300" y2="130" stroke="#4f46e5" strokeWidth="4" />
              <circle cx="500" cy="50" r="30" fill="#facc15" opacity="0.5" />
              <text x="300" y="200" textAnchor="middle" fill="#4f46e5" fontSize="22" fontWeight="bold">EDU</text>
            </svg>
          </div>

        </div>

        {/* ================= TEAM SECTION ================= */}
        <div className="team-section">
          <h2>Our Team</h2>
          <p>Meet the amazing people behind our mission</p>

          <div className="team-grid">
            <div className="team-card">
              <FaLaptopCode className="team-icon" />
              <h3>Sanu Singh</h3>
              <p>Full Stack Developer</p>
            </div>
            <div className="team-card">
              <FaChalkboardTeacher className="team-icon" />
              <h3>Jane Doe</h3>
              <p>Lead Instructor</p>
            </div>
            <div className="team-card">
              <FaLightbulb className="team-icon" />
              <h3>John Smith</h3>
              <p>Course Designer</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
