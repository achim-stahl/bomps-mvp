import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from './ui/Button';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/rejected cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center">
                <Cookie className="h-6 w-6 text-brand-600" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Wir verwenden Cookies
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Wir verwenden Cookies und ähnliche Technologien, um Ihre Erfahrung zu verbessern, 
                unseren Datenverkehr zu analysieren und Inhalte zu personalisieren. Durch die weitere 
                Nutzung dieser Website stimmen Sie unserer{' '}
                <a href="/privacy" className="text-brand-600 hover:text-brand-700 underline">
                  Datenschutzerklärung
                </a>{' '}
                zu.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleReject}
                className="whitespace-nowrap"
              >
                Ablehnen
              </Button>
              <Button 
                variant="primary" 
                size="sm"
                onClick={handleAccept}
                className="whitespace-nowrap"
              >
                Akzeptieren
              </Button>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Banner schließen"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
