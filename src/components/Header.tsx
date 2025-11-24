import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Bomps</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#modules" className="text-gray-600 hover:text-gray-900 transition-colors">Modules</a>
            <Link to="/add-on" className="text-gray-600 hover:text-gray-900 transition-colors">Add-ons</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Button variant="primary" size="sm">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a href="#features" className="block text-gray-600 hover:text-gray-900 py-2">Features</a>
            <a href="#modules" className="block text-gray-600 hover:text-gray-900 py-2">Modules</a>
            <Link to="/add-on" className="block text-gray-600 hover:text-gray-900 py-2">Add-ons</Link>
            <Link to="/pricing" className="block text-gray-600 hover:text-gray-900 py-2">Pricing</Link>
            <Link to="/about" className="block text-gray-600 hover:text-gray-900 py-2">About</Link>
            <div className="pt-4 space-y-2">
              <Link to="/login" className="block">
                <Button variant="ghost" size="sm" className="w-full">Login</Button>
              </Link>
              <Button variant="primary" size="sm" className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
