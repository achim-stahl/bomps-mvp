import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Large Text */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200 select-none">404</h1>
          <div className="-mt-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-brand-100 rounded-full mb-6">
              <Search className="h-12 w-12 text-brand-600" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL or the page has been moved.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Additional Links */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">Popular pages:</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              to="/pricing" 
              className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
            >
              Pricing
            </Link>
            <span className="text-gray-300">•</span>
            <Link 
              to="/about" 
              className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
            >
              About
            </Link>
            <span className="text-gray-300">•</span>
            <Link 
              to="/add-on" 
              className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
            >
              Add-ons
            </Link>
            <span className="text-gray-300">•</span>
            <Link 
              to="/login" 
              className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
