import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <h2 className="logo">EduTech</h2>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/courses">Courses</Link>
          </li>

          {/* ================= Tech Learning Hub Dropdown ================= */}
          <li className="dropdown">
            <span>Tech Learning Hub</span>
            <ul className="dropdown-menu">
              <li><Link to="/computer/k12">Student Tech Path</Link></li>
              <li><Link to="/computer/after-college">Advanced Tech Skills</Link></li>
              <li><Link to="/computer/professional">Career-Ready Tech</Link></li>
            </ul>
          </li>

          {/* ================= Future Pathways Dropdown ================= */}
          <li className="dropdown">
            <span>Future Pathways</span>
            <ul className="dropdown-menu">
              <li><Link to="/career/k12">Early Career Prep</Link></li>
              <li><Link to="/career/after-college">College-to-Career</Link></li>
              <li><Link to="/career/professional">Aptitude & Growth</Link></li>
            </ul>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
