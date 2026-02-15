import "../styles/Career.css";
import { FaGraduationCap, FaLaptopCode, FaLightbulb } from "react-icons/fa";

function Career() {
  return (
    <section className="career-section">
      <div className="container">

        {/* Page Header */}
        <div className="career-header">
          <h1>Career Opportunities</h1>
          <p>Join our team and help shape the future of online education.</p>
        </div>

        {/* Why Join Us */}
        <div className="section">
          <h2 className="section-title">Why Work With Us?</h2>
          <div className="career-grid">
            <div className="card">
              <FaGraduationCap className="card-icon" />
              <h3>Growth & Learning</h3>
              <p>Continuous learning environment with skill development programs.</p>
            </div>
            <div className="card">
              <FaLaptopCode className="card-icon" />
              <h3>Flexible Work</h3>
              <p>Remote-friendly culture with work-life balance.</p>
            </div>
            <div className="card">
              <FaLightbulb className="card-icon" />
              <h3>Innovative Team</h3>
              <p>Work with passionate professionals building impactful solutions.</p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="section">
          <h2 className="section-title">Open Positions</h2>
          <div className="career-grid">
            <div className="card position-card">
              <h3>Frontend Developer</h3>
              <p>Experience with React, modern UI design, and responsive development.</p>
              <button className="btn-primary">Apply Now</button>
            </div>

            <div className="card position-card">
              <h3>Backend Developer</h3>
              <p>Strong knowledge of Node.js / Laravel and database management.</p>
              <button className="btn-primary">Apply Now</button>
            </div>

            <div className="card position-card">
              <h3>Digital Marketing Executive</h3>
              <p>Experience in SEO, social media strategy, and paid campaigns.</p>
              <button className="btn-primary">Apply Now</button>
            </div>
          </div>
        </div>

        {/* Call To Action */}
        <div className="career-cta">
          <h2>Don’t See a Suitable Role?</h2>
          <p>Send us your resume and we’ll reach out when something matches your profile.</p>
          <button className="btn-primary">Send Resume</button>
        </div>

      </div>
    </section>
  );
}

export default Career;
