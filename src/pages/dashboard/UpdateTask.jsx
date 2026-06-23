// src/pages/dashboard/UpdateTask.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { FaEdit } from 'react-icons/fa';
 import axios from 'axios';
import useAuth from '../../hooks/userAuth';

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // Fetch task data
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/tasks/get-task-by-id/${id}`,
          {
            params: { userId: user.uid }
          }
        );

        if (response.data.success) {
          const task = response.data.data;
          setValue('title', task.title);
          setValue('description', task.description);
          setValue('status', task.status);
        }
      } catch (err) {
        console.error('Fetch task error:', err);
        setError('Failed to load task');
      } finally {
        setFetching(false);
      }
    };

    fetchTask();
  }, [id, user.uid, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/tasks/update-task-by-id/${id}`,
        {
          ...data,
          userId: user.uid
        }
      );

      if (response.data.success) {
        setSuccess('Task updated successfully!');
        setTimeout(() => {
          navigate('/dashboard/all-tasks');
        }, 1500);
      }
    } catch (err) {
      console.error('Update task error:', err);
      setError(err.response?.data?.message || 'Failed to update task');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-primary/10 p-3 rounded-full">
          <FaEdit className="text-2xl text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Update Task</h2>
          <p className="text-sm text-base-content/60">Edit your task details</p>
        </div>
      </div>

      {/* Success Message */}
      {success && (
        <div className="alert alert-success mb-6">
          <span>{success}</span>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="alert alert-error mb-6">
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="card bg-base-100 shadow-lg p-6">
        {/* Title Field */}
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

        {/* Description Field */}
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

        {/* Status Field */}
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

        {/* Submit Button */}
        <div className="flex gap-3">
          <button
            type="submit"
            className={`btn btn-primary flex-1 ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? 'Updating Task...' : 'Update Task'}
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

export default UpdateTask;