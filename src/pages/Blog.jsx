// src/pages/Blog.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { FaSearch, FaCalendar, FaUser, FaClock } from 'react-icons/fa';
import axios from 'axios';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
      if (response.data.success) {
        setBlogs(response.data.data);
      }
    } catch (err) {
      console.error('Fetch blogs error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Get unique categories
  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-base-content/60">
            Tips, insights, and best practices for better task management
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="input input-bordered w-full pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40" />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`btn btn-sm ${
                  activeCategory === category ? 'btn-primary' : 'btn-ghost'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-base-content/60">Try adjusting your search or filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <div key={blog._id} className="card bg-base-100 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                <figure className="h-48 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge badge-primary badge-sm">{blog.category}</span>
                    <span className="text-xs text-base-content/40 flex items-center gap-1">
                      <FaClock className="text-xs" />
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="card-title text-lg font-semibold hover:text-primary">
                    <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                  </h3>
                  <p className="text-sm text-base-content/60 line-clamp-2">{blog.excerpt}</p>
                  <div className="flex items-center gap-3 mt-3 pt-3 border-t border-base-200">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                        {blog.author.charAt(0)}
                      </div>
                      <span className="text-xs font-medium">{blog.author}</span>
                    </div>
                    <span className="text-xs text-base-content/40 flex items-center gap-1">
                      <FaCalendar className="text-xs" />
                      {blog.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;