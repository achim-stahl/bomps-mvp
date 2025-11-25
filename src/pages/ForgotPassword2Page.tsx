import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

const ForgotPassword2Page = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send a reset email
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-brand-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <Link to="/" className="inline-block">
              <img 
                src="/media/logo/bomps_dark_logo.png" 
                alt="Bomps Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Design System</p>
          </div>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Reset Password
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Enter your email address and we'll send you a reset link.
                </p>
              </div>

              {/* Form */}
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold"
                >
                  Send Reset Link
                </Button>
              </form>

              {/* Back to Login Link */}
              <div className="mt-6">
                <Link 
                  to="/login2" 
                  className="flex items-center justify-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Sign In
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Success Message */}
              <div className="text-center">
                {/* Success Icon */}
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Check Your Email
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  We've sent a password reset link to <strong>{email}</strong>. 
                  Please check your inbox and follow the instructions.
                </p>

                {/* Actions */}
                <div className="space-y-3">
                  <Link to="/login2">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold"
                    >
                      Back to Sign In
                    </Button>
                  </Link>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Didn't receive the email? Try again
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Right Side - Image/Gradient */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-primary-600 via-brand-600 to-primary-700 items-center justify-center p-12">
        <div className="max-w-lg text-center">
          <div className="w-32 h-32 mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
            <img 
              src="/media/logo/bomps_dark_logo.png" 
              alt="Bomps" 
              className="w-20 h-20 object-contain brightness-0 invert"
            />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            We've Got You Covered
          </h2>
          <p className="text-lg text-primary-100">
            Reset your password securely and get back to building amazing products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword2Page;
