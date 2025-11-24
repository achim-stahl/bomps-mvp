import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Reset password for:', email);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-2xl">B</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">Bomps</span>
        </Link>

        <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">
          Forgot Password
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We will send a link to reset your password
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-2xl sm:px-10 border border-gray-200">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
                placeholder="you@example.com"
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Send Password Reset Link
            </Button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Or{' '}
              <Link 
                to="/login" 
                className="font-medium text-brand-600 hover:text-brand-700 transition-colors"
              >
                Login
              </Link>{' '}
              With
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Copyright © Bomps 2025
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
