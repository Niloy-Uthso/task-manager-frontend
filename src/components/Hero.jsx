 import React from 'react';
import { Link } from 'react-router';
import { MdTask, MdArrowForward, MdCheckCircle, MdTrendingUp, MdSecurity } from 'react-icons/md';
import useAuth from '../hooks/userAuth';
 
const Hero = () => {
  const { user } = useAuth();

  return (
    <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        
         <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-primary/10 flex items-center justify-center">
              <MdTask className="text-8xl lg:text-9xl text-primary" />
            </div>
             <div className="absolute -top-4 -right-4 bg-success text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
              ✨ Free
            </div>
            <div className="absolute -bottom-4 -left-4 bg-warning text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              🚀 Fast
            </div>
          </div>
        </div>

         <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Manage Your Tasks
            <span className="text-primary block mt-2">Effortlessly</span>
          </h1>
          
          <p className="py-6 text-lg text-base-content/70 max-w-lg mx-auto lg:mx-0">
            Stay organized, track your progress, and get things done with our simple and powerful task management tool.
          </p>

           <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
            <div className="flex items-center gap-2">
              <MdCheckCircle className="text-success" />
              <span className="text-sm">Add Tasks</span>
            </div>
            <div className="flex items-center gap-2">
              <MdTrendingUp className="text-primary" />
              <span className="text-sm">Track Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <MdSecurity className="text-secondary" />
              <span className="text-sm">Secure</span>
            </div>
          </div>

           <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {user ? (
              <Link to="/dashboard" className="btn btn-primary btn-lg gap-2">
                Go to Dashboard
                <MdArrowForward />
              </Link>
            ) : (
              <>
                <Link to="/register" className="btn btn-primary btn-lg gap-2">
                  Get Started
                  <MdArrowForward />
                </Link>
                <Link to="/login" className="btn btn-outline btn-lg">
                  Login
                </Link>
              </>
            )}
          </div>

           <div className="flex flex-wrap gap-8 mt-8 justify-center lg:justify-start">
            <div>
              <p className="text-2xl font-bold text-primary">10K+</p>
              <p className="text-sm text-base-content/60">Active Users</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">50K+</p>
              <p className="text-sm text-base-content/60">Tasks Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">4.9⭐</p>
              <p className="text-sm text-base-content/60">User Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;