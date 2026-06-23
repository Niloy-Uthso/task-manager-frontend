// src/components/shared/Navbar.jsx
import React, { useState } from 'react';
  import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdDashboard, MdTask } from 'react-icons/md';
import useAuth from '../../hooks/userAuth';
import { Link, NavLink, useNavigate } from 'react-router';

const Navbar = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navigation links
  const navLinks = (
    <>
      <li>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `px-4 py-2 rounded-lg transition duration-200 ${
              isActive ? 'bg-primary text-primary-content' : 'hover:bg-base-200'
            }`
          }
          onClick={closeMenu}
        >
          Home
        </NavLink>
      </li>
      
      {user && (
        <li>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg transition duration-200 flex items-center gap-2 ${
                isActive ? 'bg-primary text-primary-content' : 'hover:bg-base-200'
              }`
            }
            onClick={closeMenu}
          >
            <MdDashboard className="text-lg" />
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          {/* Mobile Menu Button */}
          <button 
            className="btn btn-ghost btn-circle lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>

          {/* Mobile Dropdown Menu */}
          <ul className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}>
            {navLinks}
            
            {/* Mobile Auth Buttons */}
            <li className="mt-2">
              {!loading && (
                user ? (
                  <button 
                    onClick={handleLogout}
                    className="btn btn-error btn-sm w-full text-white"
                  >
                    Logout
                  </button>
                ) : (
                  <div className="flex flex-col gap-2 w-full">
                    <Link 
                      to="/login" 
                      className="btn btn-primary btn-sm w-full"
                      onClick={closeMenu}
                    >
                      Login
                    </Link>
                    <Link 
                      to="register" 
                      className="btn btn-outline btn-primary btn-sm w-full"
                      onClick={closeMenu}
                    >
                      Register
                    </Link>
                  </div>
                )
              )}
            </li>
          </ul>
        </div>

        {/* Brand/Logo */}
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <MdTask className="text-2xl text-primary mr-2" />
          <span className="font-bold">TaskManager</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navLinks}
        </ul>
      </div>

      {/* Desktop Auth Buttons */}
      <div className="navbar-end gap-2">
        {!loading && (
          user ? (
            <div className="flex items-center gap-3">
              {/* User Avatar */}
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                  <img 
                    src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName || user.email}&background=random&size=40`} 
                    alt={user.displayName || 'User'} 
                  />
                </div>
              </div>
              
              {/* User Info - Hidden on small screens */}
              <div className="hidden sm:block">
                <p className="text-sm font-medium">{user.displayName || user.email?.split('@')[0]}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>

              <button 
                onClick={handleLogout}
                className="btn btn-error btn-sm text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login" className="btn btn-primary btn-sm">
                Login
              </Link>
              <Link to="/register" className="btn btn-outline btn-primary btn-sm hidden sm:inline-flex">
                Register
              </Link>
            </div>
          )
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex items-center gap-2">
            <span className="loading loading-spinner loading-sm"></span>
            <span className="text-sm hidden sm:inline">Loading...</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;