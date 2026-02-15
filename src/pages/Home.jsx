import "../styles/Home.css";
import { FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container hero-container">
          {/* LEFT CONTENT */}
          <div className="hero-left">
            <h1>
              Learn Skills That <span>Shape Your Future</span>
            </h1>

            <p>
              Industry-ready courses taught by experts. Learn, build projects,
              and get job-ready with real-world skills.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">Browse Courses</button>
              <button className="btn-secondary">Become an Instructor</button>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <h3>50K+</h3>
                <p>Students</p>
              </div>

              <div className="stat">
                <h3>120+</h3>
                <p>Courses</p>
              </div>

              <div className="stat">
                <h3>95%</h3>
                <p>Success Rate</p>
              </div>
            </div>
          </div>

          {/* RIGHT ICON */}
          <div className="hero-right">
            <FaLaptopCode className="main-icon" />
          </div>
        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Popular Courses</h2>
          <p className="section-subtitle">
            Learn from trending and high-demand skills
          </p>

          <div className="grid">
            <div className="course-card">
              <h3>Full Stack Development</h3>
              <p>HTML, CSS, React, Node, Laravel</p>
              <span className="tag">Beginner to Advanced</span>
            </div>

            <div className="course-card">
              <h3>Data Science</h3>
              <p>Python, ML, Data Analysis</p>
              <span className="tag">Career Focused</span>
            </div>

            <div className="course-card">
              <h3>UI / UX Design</h3>
              <p>Figma, Design Systems, UX Research</p>
              <span className="tag">Creative</span>
            </div>

            <div className="course-card">
              <h3>Backend with Laravel</h3>
              <p>APIs, Auth, Queues, Projects</p>
              <span className="tag">Job Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>

          <div className="grid">
            <div className="feature-card">
              <h3>Expert Mentors</h3>
              <p>Learn from industry professionals with real experience.</p>
            </div>

            <div className="feature-card">
              <h3>Hands-On Projects</h3>
              <p>Build real projects to showcase in your portfolio.</p>
            </div>

            <div className="feature-card">
              <h3>Career Support</h3>
              <p>Resume guidance, mock interviews & job prep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CAREER GUIDANCE ================= */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Career Guidance</h2>
          <p className="section-subtitle">
            Personalized guidance for every stage of your learning journey
          </p>

          <div className="grid">
            <div className="feature-card">
              <h3>K-12 Students</h3>
              <p>
                Guidance for early academic planning, skill development, and
                career exploration.
              </p>
              <ul>
                <li>Understanding STEM & tech fields</li>
                <li>Project-based learning</li>
                <li>Mentorship & school guidance</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3>After College</h3>
              <p>
                Career-oriented advice for higher studies, internships, and
                first job opportunities.
              </p>
              <ul>
                <li>Resume & interview preparation</li>
                <li>Skill assessment & certifications</li>
                <li>Career pathway planning</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3>Professional Growth</h3>
              <p>
                Upskill to transition into high-demand tech roles with expert
                guidance.
              </p>
              <ul>
                <li>Mentorship & coaching</li>
                <li>Advanced skill training</li>
                <li>Networking & job placement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPUTER EDUCATION ================= */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Computer Education</h2>
          <p className="section-subtitle">
            Stage-wise computer education to build skills from basics to
            advanced
          </p>

          <div className="grid">
            <div className="feature-card">
              <h3>K-12 Students</h3>
              <p>
                Introducing foundational computer skills and basic programming
                concepts.
              </p>
              <ul>
                <li>Computer Fundamentals</li>
                <li>Scratch & block-based coding</li>
                <li>Interactive projects & games</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3>After College</h3>
              <p>
                Focused on professional programming, web, and data skills for
                career readiness.
              </p>
              <ul>
                <li>Web & App Development (HTML, CSS, JS, React)</li>
                <li>Backend & Databases (Node, Laravel, SQL)</li>
                <li>Data Science & Machine Learning</li>
              </ul>
            </div>

            <div className="feature-card">
              <h3>Professional Growth</h3>
              <p>
                Upskill in advanced technologies and certifications to
                accelerate your career.
              </p>
              <ul>
                <li>Cloud Computing & DevOps</li>
                <li>AI/ML & Data Analytics</li>
                <li>Industry Certifications & Projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INSTRUCTOR ================= */}
      <section className="section">
        <div className="container instructor-container">
          <div className="instructor-left">
            <FaChalkboardTeacher className="main-icon" />
          </div>

          <div className="instructor-right">
            <h2>Learn From The Best Instructors</h2>
            <p>
              Our instructors are senior developers, designers, and data
              scientists working in top companies.
            </p>
            <button className="btn-primary">Meet Our Instructors</button>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta">
        <div className="container">
          <h2>Start Learning Today</h2>
          <p>Join thousands of learners and upgrade your career.</p>
          <button className="btn-primary">Get Started</button>
        </div>
      </section>
    </>
  );
}

export default Home;
