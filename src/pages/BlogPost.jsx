// src/pages/BlogPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { FaCalendar, FaUser, FaTag, FaClock, FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`);
        if (response.data.success) {
          setBlog(response.data.data);
        }
      } catch (err) {
        console.error('Fetch blog error:', err);
        setError('Blog not found');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📄</div>
          <h2 className="text-2xl font-bold mb-2">Blog Not Found</h2>
          <p className="text-base-content/60 mb-4">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] py-12 px-4">
      <div className="max-w-4xl mx-auto">
         <Link to="/blogs" className="btn btn-ghost btn-sm gap-2 mb-6">
          <FaArrowLeft />
          Back to Blog
        </Link>

         <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge badge-primary badge-lg">{blog.category}</span>
            <span className="text-sm text-base-content/40 flex items-center gap-1">
              <FaClock />
              {blog.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{blog.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-base-content/60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                {blog.author.charAt(0)}
              </div>
              <span className="font-medium">{blog.author}</span>
            </div>
            <span className="flex items-center gap-1">
              <FaCalendar />
              {blog.date}
            </span>
          </div>
        </div>

         <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />

         <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

         {blog.tags && blog.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-base-200">
            <h3 className="text-sm font-semibold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span key={index} className="badge badge-ghost">
                  <FaTag className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

         {blog.authorBio && (
          <div className="mt-8 p-6 bg-base-200 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold flex-shrink-0">
                {blog.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold">{blog.author}</h4>
                <p className="text-sm text-base-content/60">{blog.authorBio}</p>
              </div>
            </div>
          </div>
        )}

         <div className="mt-8 text-center">
          <Link to="/blogs" className="btn btn-primary gap-2">
            Read More Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;