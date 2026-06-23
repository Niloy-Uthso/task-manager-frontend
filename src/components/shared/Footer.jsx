// src/components/shared/Footer.jsx
import React from 'react';
import { Link } from 'react-router';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaHeart } from 'react-icons/fa';
import { MdTask } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 border-t border-base-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold">
              <MdTask className="text-2xl text-primary" />
              <span>TaskManager</span>
            </Link>
            <p className="text-sm text-base-content/60 max-w-xs">
              Organize your tasks, track your progress, and boost your productivity with our simple task management tool.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="btn btn-ghost btn-sm btn-circle hover:bg-primary/10 hover:text-primary">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="btn btn-ghost btn-sm btn-circle hover:bg-primary/10 hover:text-primary">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="btn btn-ghost btn-sm btn-circle hover:bg-primary/10 hover:text-primary">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="btn btn-ghost btn-sm btn-circle hover:bg-primary/10 hover:text-primary">
                <FaGithub />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                 className="btn btn-ghost btn-sm btn-circle hover:bg-primary/10 hover:text-primary">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-base-content/60 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-base-content/60 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-base-content/60 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base-content/60 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-base-content/60 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard/add-task" className="text-base-content/60 hover:text-primary transition-colors">
                  Add Tasks
                </Link>
              </li>
              <li>
                <Link to="/dashboard/all-tasks" className="text-base-content/60 hover:text-primary transition-colors">
                  View All Tasks
                </Link>
              </li>
              <li>
                <Link to="/dashboard/update-task" className="text-base-content/60 hover:text-primary transition-colors">
                  Update Status
                </Link>
              </li>
              <li>
                <Link to="/dashboard/delete-task" className="text-base-content/60 hover:text-primary transition-colors">
                  Delete Tasks
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-base-content/60 mb-3">
              Subscribe to our newsletter for tips and updates.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered input-sm w-full"
                required
              />
              <button type="submit" className="btn btn-primary btn-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-base-content/50">
            <div className="flex items-center gap-1">
              © {currentYear} TaskManager. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-primary transition-colors">
                Cookies
              </Link>
              <span className="flex items-center gap-1">
                Made with <FaHeart className="text-error text-xs" /> by AWTOMATIG
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;