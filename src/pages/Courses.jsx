import "../styles/Courses.css";
import { FaClock, FaSignal } from "react-icons/fa";

function Courses() {
  const courses = [
    {
      title: "MERN Stack Development",
      description: "Learn MongoDB, Express, React, and Node.js with real-world projects.",
      duration: "6 Months",
      level: "Intermediate"
    },
    {
      title: "Python & AI",
      description: "Master Python programming, machine learning, and AI fundamentals.",
      duration: "5 Months",
      level: "Beginner to Advanced"
    },
    {
      title: "DevOps Engineering",
      description: "Learn CI/CD, Docker, Kubernetes, and cloud deployment strategies.",
      duration: "4 Months",
      level: "Advanced"
    },
    {
      title: "Full Stack Java",
      description: "Build enterprise applications using Java, Spring Boot, and React.",
      duration: "6 Months",
      level: "Intermediate"
    }
  ];

  return (
    <section className="courses-section">
      <div className="container">

        {/* Header */}
        <div className="courses-header">
          <h1>Our Courses</h1>
          <p>Explore industry-ready programs designed to boost your career.</p>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <h3>{course.title}</h3>
              <p className="course-desc">{course.description}</p>

              <div className="course-info">
                <p><FaClock className="info-icon" /> {course.duration}</p>
                <p><FaSignal className="info-icon" /> {course.level}</p>
              </div>

              <button className="btn-primary">Enroll Now</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Courses;
