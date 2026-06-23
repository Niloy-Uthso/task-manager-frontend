// src/components/layout/DashboardLayout.jsx
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import { FaPlus, FaList, FaEdit, FaTrash, FaBars, FaTimes, FaHome, FaUser } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import useAuth from '../hooks/userAuth';
 
const DashboardLayout = () => {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Sidebar navigation links
  const navLinks = [
    {
      path: '/dashboard',
      icon: <MdDashboard />,
      label: 'Dashboard'
    },
    {
      path: '/dashboard/add-task',
      icon: <FaPlus />,
      label: 'Add Task'
    },
    {
      path: '/dashboard/all-tasks',
      icon: <FaList />,
      label: 'View All Tasks'
    },
    
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] flex bg-base-200">
      
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="lg:hidden fixed top-20 left-4 z-50 btn btn-ghost btn-sm"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-72 bg-base-100 shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        pt-16 lg:pt-0
      `}>
        
        {/* Sidebar Header */}
        <div className="p-4 border-b border-base-200">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-2">
                <img 
                  src={user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName || user?.email || 'User'}&background=random&size=40`} 
                  alt={user?.displayName || 'User'} 
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-sm">{user?.displayName || user?.email?.split('@')[0] || 'User'}</p>
              <p className="text-xs text-base-content/60">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="p-4">
          <ul className="menu gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition duration-200 ${
                      isActive
                        ? 'bg-primary text-primary-content font-semibold'
                        : 'hover:bg-base-200'
                    }`
                  }
                  onClick={closeSidebar}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-base-200">
          <NavLink
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-base-200 transition duration-200"
            onClick={closeSidebar}
          >
            <FaHome className="text-lg" />
            <span>Back to Home</span>
          </NavLink>
        </div>
      </div>

      {/* Sidebar Overlay (Mobile) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8">
        <div className="bg-base-100 rounded-lg shadow-lg p-4 lg:p-6 min-h-[calc(100vh-120px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;