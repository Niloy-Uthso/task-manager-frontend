// src/pages/dashboard/AllTasks.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { FaList, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { MdCheckCircle, MdPending, MdPendingActions } from 'react-icons/md';
 import axios from 'axios';
import useAuth from '../../hooks/userAuth';
import Swal from 'sweetalert2';

const AllTasks = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/tasks/get-all-tasks`,
          {
            params: { userId: user?.uid }
          }
        );

        if (response.data.success) {
          setTasks(response.data.data);
        }
      } catch (err) {
        console.error('Fetch tasks error:', err);
        setError('Failed to load tasks');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [user?.uid]);

    useEffect(() => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth'
    });
  }, []);

   const filteredTasks = filter === 'All' 
    ? tasks 
    : tasks.filter(task => task.status === filter);

   const getStatusBadge = (status) => {
    const statusMap = {
      'To Do': { color: 'badge-warning', icon: <MdPending /> },
      'In Progress': { color: 'badge-info', icon: < MdPendingActions /> },
      'Done': { color: 'badge-success', icon: <MdCheckCircle /> }
    };
    const { color, icon } = statusMap[status] || { color: 'badge-ghost', icon: null };
    return (
      <span className={`badge ${color} gap-1 px-3 py-2`}>
        {icon}
        {status}
      </span>
    );
  };
   const handleDelete = async (taskId) => {
     const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    });

    if (!result.isConfirmed) {
      return;
    }

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/tasks/delete-task-by-id/${taskId}`,
        {
          params: { userId: user.uid }
        }
      );

      if (response.data.success) {
         setTasks(tasks.filter(task => task._id !== taskId));
        
         Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Task has been deleted successfully.',
          timer: 1500,
          showConfirmButton: false,
        });
          setTimeout(() => {
      window.location.reload(); 
    }, 100);
      }
    } catch (err) {
      console.error('Delete task error:', err);
      
       Swal.fire({
        icon: 'error',
        title: 'Failed to Delete',
        text: err.response?.data?.message || 'Failed to delete task. Please try again.',
        confirmButtonColor: '#4F46E5',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error max-w-2xl mx-auto">
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-3 rounded-full">
            <FaList className="text-2xl text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">All Tasks</h2>
            <p className="text-sm text-base-content/60">
              Total: {tasks.length} tasks
            </p>
          </div>
        </div>
        <Link to="/dashboard/add-task" className="btn btn-primary btn-sm gap-2">
          <FaPlus />
          Add New Task
        </Link>
      </div>

       <div className="flex flex-wrap gap-2 mb-6">
        {['All', 'To Do', 'In Progress', 'Done'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`btn btn-sm ${filter === status ? 'btn-primary' : 'btn-ghost'}`}
          >
            {status}
            {status !== 'All' && (
              <span className="badge badge-sm ml-1">
                {tasks.filter(t => t.status === status).length}
              </span>
            )}
          </button>
        ))}
      </div>

       {filteredTasks.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📋</div>
          <h3 className="text-xl font-semibold mb-2">No tasks found</h3>
          <p className="text-base-content/60 mb-4">
            {filter === 'All' ? 'You haven\'t created any tasks yet.' : `No tasks with status "${filter}"`}
          </p>
          <Link to="/dashboard/add-task" className="btn btn-primary">
            Create Your First Task
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTasks.map((task) => (
            <div key={task._id} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body p-5">
                <div className="flex justify-between items-start gap-3">
                  <h3 className="card-title text-base font-semibold flex-1 line-clamp-1">
                    {task.title}
                  </h3>
                  {getStatusBadge(task.status)}
                </div>
                
                <p className="text-sm text-base-content/70 line-clamp-2 mt-1">
                  {task.description}
                </p>
                
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-base-200">
                  <span className="text-xs text-base-content/40">
                    {new Date(task.createdAt).toLocaleDateString()}
                  </span>
                  <div className="flex gap-2">
                    <Link
                      to={`/dashboard/update-task/${task._id}`}
                      className="btn btn-ghost btn-xs gap-1"
                    >
                      <FaEdit />
                      Edit
                    </Link>
                     <button
    onClick={() => handleDelete(task._id)}
    className="btn btn-ghost btn-xs gap-1 text-error"
  >
    <FaTrash />
    Delete
  </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTasks;