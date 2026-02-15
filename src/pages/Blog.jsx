function Blog() {

  const blogs = [
    {
      title: "Latest Tech Trends in 2026",
      description: "Explore the most in-demand technologies shaping the future of software development.",
      date: "January 10, 2026",
      author: "Admin",
      image: "/images/blog1.jpg"
    },
    {
      title: "How to Become a Full Stack Developer",
      description: "Step-by-step roadmap to becoming a successful full stack developer.",
      date: "January 5, 2026",
      author: "Sanu Singh",
      image: "/images/blog2.jpg"
    },
    {
      title: "Why Learn DevOps in 2026?",
      description: "Understand the importance of DevOps and how it boosts your career growth.",
      date: "December 28, 2025",
      author: "Admin",
      image: "/images/blog3.jpg"
    }
  ];

  return (
    <section className="section">
      <div className="container">

        {/* Header */}
        <div className="blog-header">
          <h1 className="page-title">Our Blog</h1>
          <p className="blog-subtitle">
            Insights, tutorials, and career advice from our experts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid">
          {blogs.map((blog, index) => (
            <div className="card blog-card" key={index}>
              <img src={blog.image} alt={blog.title} />
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p className="blog-meta">
                  {blog.date} • {blog.author}
                </p>
                <p>{blog.description}</p>
                <button className="btn-primary">Read More</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Blog;
