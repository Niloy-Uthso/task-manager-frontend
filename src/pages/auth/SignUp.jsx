// src/pages/SignUp.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { updateProfile } from 'firebase/auth';
 import { MdEmail, MdLock, MdPerson, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import axios from 'axios';
import useAuth from '../../hooks/userAuth';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();
  const { signUpUser, loading } = useAuth(); // Using loading from AuthProvider
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const password = watch('password');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError('');

    try {
      // 1. Register user with Firebase using signUpUser from AuthProvider
      const userCredential = await signUpUser(data.email, data.password);
      const firebaseUser = userCredential.user;

      // 2. Update Firebase profile with display name
      await updateProfile(firebaseUser, {
        displayName: data.name
      });

      // 3. Save user to MongoDB
      const userData = {
        uid: firebaseUser.uid,
        name: data.name,
        email: data.email,
        photoURL: firebaseUser.photoURL || null,
        createdAt: new Date().toISOString()
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/register`,
        userData
      );

      if (response.data.success) {
        // Redirect to dashboard
        navigate('/dashboard');
      }

    } catch (err) {
      console.error('Registration error:', err);
      
      if (err.code === 'auth/email-already-in-use') {
        setError('This email is already registered. Please login instead.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Registration failed. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12 bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body p-8">
          <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
          <p className="text-center text-base-content/60 mb-6">
            Join TaskManager and start organizing your tasks
          </p>

          {/* Error Message */}
          {error && (
            <div className="alert alert-error mb-4">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40">
                  <MdPerson className="text-xl" />
                </span>
                <input
                  type="text"
                  placeholder="John Doe"
                  className={`input input-bordered w-full pl-10 ${
                    errors.name ? 'input-error' : ''
                  }`}
                  {...register('name', {
                    required: 'Full name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters'
                    }
                  })}
                />
              </div>
              {errors.name && (
                <span className="text-error text-sm mt-1">{errors.name.message}</span>
              )}
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40">
                  <MdEmail className="text-xl" />
                </span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={`input input-bordered w-full pl-10 ${
                    errors.email ? 'input-error' : ''
                  }`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
              </div>
              {errors.email && (
                <span className="text-error text-sm mt-1">{errors.email.message}</span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40">
                  <MdLock className="text-xl" />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className={`input input-bordered w-full pl-10 pr-10 ${
                    errors.password ? 'input-error' : ''
                  }`}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    }
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/40 hover:text-base-content"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <MdVisibilityOff className="text-xl" /> : <MdVisibility className="text-xl" />}
                </button>
              </div>
              {errors.password && (
                <span className="text-error text-sm mt-1">{errors.password.message}</span>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Confirm Password</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40">
                  <MdLock className="text-xl" />
                </span>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className={`input input-bordered w-full pl-10 pr-10 ${
                    errors.confirmPassword ? 'input-error' : ''
                  }`}
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: value => value === password || 'Passwords do not match'
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/40 hover:text-base-content"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <MdVisibilityOff className="text-xl" /> : <MdVisibility className="text-xl" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="text-error text-sm mt-1">{errors.confirmPassword.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className={`btn btn-primary w-full ${(loading || isSubmitting) ? 'loading' : ''}`}
                disabled={loading || isSubmitting}
              >
                {(loading || isSubmitting) ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center mt-4">
              <p className="text-sm text-base-content/60">
                Already have an account?{' '}
                <Link to="/login" className="link link-primary font-medium">
                  Login here
                </Link>
              </p>
            </div>
          </form>

          {/* Divider */}
          <div className="divider text-xs text-base-content/40">OR</div>

          {/* Terms */}
          <p className="text-xs text-center text-base-content/40">
            By creating an account, you agree to our{' '}
            <Link to="/terms" className="link link-primary">Terms of Service</Link>
            {' '}and{' '}
            <Link to="/privacy" className="link link-primary">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;