import { useParams } from "react-router-dom";
import courses from "../data/courses";

function CourseDetails() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) return <h2>Course Not Found</h2>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}

export default CourseDetails;
