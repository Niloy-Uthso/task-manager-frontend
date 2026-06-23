// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router';
import { MdTask, MdPeople, MdSecurity, MdSupport, MdCheckCircle, MdTrendingUp } from 'react-icons/md';
import { FaRocket, FaHeart } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <MdCheckCircle className="text-4xl text-primary" />,
      title: 'Simplicity',
      description: 'Clean and intuitive interface that makes task management effortless'
    },
    {
      icon: <MdPeople className="text-4xl text-primary" />,
      title: 'User-Centric',
      description: 'Designed with users in mind to solve real productivity challenges'
    },
    {
      icon: <MdSecurity className="text-4xl text-primary" />,
      title: 'Security First',
      description: 'Your data is protected with industry-standard security measures'
    },
    {
      icon: <FaRocket className="text-4xl text-primary" />,
      title: 'Innovation',
      description: 'Continuously improving to bring you the best task management experience'
    }
  ];

  return (
    <div className="min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <section className="bg-primary text-primary-content py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About TaskManager</h1>
          <p className="text-xl opacity-90">
            We help people and teams stay organized, productive, and focused on what matters most.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-base-content/70 mb-4">
                TaskManager was born from a simple idea: task management should be simple, not complicated. 
                We noticed that most productivity tools were either too complex or lacked essential features.
              </p>
              <p className="text-base-content/70">
                So we built TaskManager - a clean, intuitive platform that helps you organize tasks, 
                track progress, and get things done. Whether you're an individual or a team, 
                TaskManager adapts to your workflow.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-primary/10 p-12 rounded-full">
                <MdTask className="text-8xl text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-base-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            To empower individuals and teams to achieve more by providing a simple, 
            reliable, and intuitive task management solution.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
                <div className="card-body items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    {value.icon}
                  </div>
                  <h3 className="card-title text-lg">{value.title}</h3>
                  <p className="text-base-content/60 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">10K+</p>
              <p className="text-sm text-base-content/60">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">50K+</p>
              <p className="text-sm text-base-content/60">Tasks Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">4.9⭐</p>
              <p className="text-sm text-base-content/60">User Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">100+</p>
              <p className="text-sm text-base-content/60">Happy Teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join TaskManager Today</h2>
          <p className="text-lg text-base-content/70 mb-6">
            Start organizing your tasks and boosting your productivity.
          </p>
          <Link to="/register" className="btn btn-primary btn-lg gap-2">
            Get Started Free
            <MdTask />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;