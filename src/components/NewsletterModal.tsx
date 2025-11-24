import { useState, useEffect } from 'react';
import { X, Mail, Gift } from 'lucide-react';
import { Button } from './ui/Button';

export const NewsletterModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Check if user has already seen the modal
    const hasSeenModal = localStorage.getItem('hasSeenNewsletterModal');
    
    if (!hasSeenModal) {
      // Show modal after 10 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenNewsletterModal', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 animate-in fade-in duration-300"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md p-4 animate-in zoom-in-95 duration-300">
        <div className="bg-white rounded-2xl shadow-2xl p-8 relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center">
              <Gift className="h-8 w-8 text-brand-600" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Stay Updated!
            </h3>
            <p className="text-gray-600">
              Subscribe to our newsletter and get exclusive updates, tips, and special offers for your business.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <div className="w-5 h-5 rounded-full bg-success-100 flex items-center justify-center flex-shrink-0">
                <Mail className="h-3 w-3 text-success-600" />
              </div>
              <span>Weekly business insights</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <div className="w-5 h-5 rounded-full bg-success-100 flex items-center justify-center flex-shrink-0">
                <Mail className="h-3 w-3 text-success-600" />
              </div>
              <span>Exclusive early access to new features</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <div className="w-5 h-5 rounded-full bg-success-100 flex items-center justify-center flex-shrink-0">
                <Mail className="h-3 w-3 text-success-600" />
              </div>
              <span>Special discounts on add-ons</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all"
              />
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Subscribe Now
            </Button>
          </form>

          {/* Privacy Note */}
          <p className="text-xs text-gray-500 text-center mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </>
  );
};
