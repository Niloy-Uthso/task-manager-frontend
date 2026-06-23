// src/components/layout/DashboardLayout.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router';
import { FaPlus, FaList, FaBars, FaTimes, FaHome } from 'react-icons/fa';
import { MdDashboard, MdPeople, MdTask, MdArticle } from 'react-icons/md';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useAuth from '../hooks/userAuth';
import axios from 'axios';

const DashboardLayout = () => {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalTasks: 0,
    totalBlogs: 0,
    taskStatus: {
      todo: 0,
      inProgress: 0,
      done: 0
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchStats();
    }
  }, [user]);

  const fetchStats = async () => {
    try {
       const usersRes = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/users/get-all-users`
      );

       
       const tasksRes = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/tasks/get-all-tasks`,
        { params: { userId: user.uid } }
      );

       const blogsRes = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/blogs`
      );

      const users = usersRes.data.data || [];
      const tasks = tasksRes.data.data || [];
      const blogs = blogsRes.data.data || [];

      const todo = tasks.filter(t => t.status === 'To Do').length;
      const inProgress = tasks.filter(t => t.status === 'In Progress').length;
      const done = tasks.filter(t => t.status === 'Done').length;

      setStats({
        totalUsers: users.length,
        totalTasks: tasks.length,
        totalBlogs: blogs.length,
        taskStatus: { todo, inProgress, done }
      });
    } catch (err) {
      console.error('Fetch stats error:', err);
    } finally {
      setLoading(false);
    }
  };

   const pieData = [
    { name: 'To Do', value: stats.taskStatus.todo },
    { name: 'In Progress', value: stats.taskStatus.inProgress },
    { name: 'Done', value: stats.taskStatus.done }
  ];

  const COLORS = ['#F59E0B', '#3B82F6', '#10B981'];

   const barData = [
    { name: 'Users', count: stats.totalUsers },
    { name: 'Tasks', count: stats.totalTasks },
    { name: 'Blogs', count: stats.totalBlogs }
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

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
      
       <button
        className="lg:hidden fixed top-20 left-4 z-50 btn btn-ghost btn-sm"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
      </button>

       <div className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-72 bg-base-100 shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        pt-16 lg:pt-0
      `}>
        
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

       {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}

       <div className="flex-1 p-4 lg:p-8">
        <div className="bg-base-100 rounded-lg shadow-lg p-4 lg:p-6 min-h-[calc(100vh-120px)]">
          
           <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
            
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <span className="loading loading-spinner loading-lg text-primary"></span>
              </div>
            ) : (
              <>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="stats shadow bg-primary text-primary-content">
                    <div className="stat">
                      <div className="stat-figure text-primary-content/80">
                        <MdPeople className="text-4xl" />
                      </div>
                      <div className="stat-title text-primary-content/80">Total Users</div>
                      <div className="stat-value">{stats.totalUsers}</div>
                    </div>
                  </div>
                  
                  <div className="stats shadow bg-secondary text-secondary-content">
                    <div className="stat">
                      <div className="stat-figure text-secondary-content/80">
                        <MdTask className="text-4xl" />
                      </div>
                      <div className="stat-title text-secondary-content/80">Total Tasks</div>
                      <div className="stat-value">{stats.totalTasks}</div>
                    </div>
                  </div>
                  
                  <div className="stats shadow bg-accent text-accent-content">
                    <div className="stat">
                      <div className="stat-figure text-accent-content/80">
                        <MdArticle className="text-4xl" />
                      </div>
                      <div className="stat-title text-accent-content/80">Total Blogs</div>
                      <div className="stat-value">{stats.totalBlogs}</div>
                    </div>
                  </div>
                </div>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                   <div className="card bg-base-200 p-6">
                    <h3 className="text-lg font-semibold mb-4 text-center">Task Status Distribution</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                   <div className="card bg-base-200 p-6">
                    <h3 className="text-lg font-semibold mb-4 text-center">Platform Overview</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={barData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#4F46E5" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </>
            )}
          </div>

           <div className="divider"></div>

           <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;