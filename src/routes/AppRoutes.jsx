import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../components/layout/Layout";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Courses = lazy(() => import("../pages/Courses"));
const Career = lazy(() => import("../pages/Career"));
const Blog = lazy(() => import("../pages/Blog"));
const Contact = lazy(() => import("../pages/Contact"));

function AppRoutes() {
  return (
    <Suspense fallback={<div className="loader">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="career" element={<Career />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
