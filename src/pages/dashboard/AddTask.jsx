// src/pages/dashboard/AddTask.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { MdAdd, MdClose } from 'react-icons/md';
 import axios from 'axios';
import useAuth from '../../hooks/userAuth';
import Swal from 'sweetalert2';

const AddTask = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
 useEffect(() => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth'
    });
  }, []);
  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const taskData = {
        title: data.title,
        description: data.description,
        status: data.status,
        userId: user.uid,
        userEmail: user.email,
        createdAt: new Date().toISOString()
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/tasks/create-task`,
        taskData
      );

      if (response.data.success) {
        setSuccess('Task added successfully!');
         Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: 'Task added successfully!',
    timer: 1500,
    showConfirmButton: false,
  });
  
  
        reset();
        setTimeout(() => {
          navigate('/dashboard');
            setTimeout(() => {
      window.location.reload(); 
    }, 100);
        }, 1500);
      }
    } catch (err) {
      console.error('Add task error:', err);
      setError(err.response?.data?.message || 'Failed to add task. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-primary/10 p-3 rounded-full">
          <MdAdd className="text-2xl text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Add New Task</h2>
          <p className="text-sm text-base-content/60">Create a new task to get started</p>
        </div>
      </div>

       {success && (
        <div className="alert alert-success mb-6">
          <span>{success}</span>
        </div>
      )}

       {error && (
        <div className="alert alert-error mb-6">
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="card bg-base-100 shadow-lg p-6">
         <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-medium">Task Title <span className="text-error">*</span></span>
          </label>
          <input
            type="text"
            placeholder="Enter task title"
            className={`input input-bordered w-full ${errors.title ? 'input-error' : ''}`}
            {...register('title', {
              required: 'Task title is required',
              minLength: {
                value: 3,
                message: 'Title must be at least 3 characters'
              },
              maxLength: {
                value: 100,
                message: 'Title cannot exceed 100 characters'
              }
            })}
          />
          {errors.title && (
            <span className="text-error text-sm mt-1">{errors.title.message}</span>
          )}
        </div>

         <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-medium">Description <span className="text-error">*</span></span>
          </label>
          <textarea
            placeholder="Enter task description"
            className={`textarea textarea-bordered w-full h-32 ${errors.description ? 'textarea-error' : ''}`}
            {...register('description', {
              required: 'Task description is required',
              minLength: {
                value: 10,
                message: 'Description must be at least 10 characters'
              },
              maxLength: {
                value: 500,
                message: 'Description cannot exceed 500 characters'
              }
            })}
          />
          {errors.description && (
            <span className="text-error text-sm mt-1">{errors.description.message}</span>
          )}
        </div>

         <div className="form-control mb-6">
          <label className="label">
            <span className="label-text font-medium">Status <span className="text-error">*</span></span>
          </label>
          <select
            className={`select select-bordered w-full ${errors.status ? 'select-error' : ''}`}
            {...register('status', {
              required: 'Please select a status'
            })}
          >
            <option value="">Select Status</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          {errors.status && (
            <span className="text-error text-sm mt-1">{errors.status.message}</span>
          )}
        </div>

         <div className="flex gap-3">
          <button
            type="submit"
            className={`btn btn-primary flex-1 ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? 'Adding Task...' : 'Add Task'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/dashboard/all-tasks')}
            className="btn btn-ghost"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;