import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Grid3x3,
  Headphones,
  FileText,
  Mail,
  Bell,
  Settings,
  ChevronRight,
  Search
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', active: true },
  { icon: Users, label: 'Customers', path: '/dashboard/customers', active: true },
  { icon: CreditCard, label: 'Subscription', path: '/dashboard/subscription', hasSubmenu: true },
  { icon: Grid3x3, label: 'Add-on Manager', path: '/dashboard/add-on-manager' },
  { icon: Headphones, label: 'Helpdesk', path: '/dashboard/helpdesk', hasSubmenu: true },
  { icon: FileText, label: 'CMS', path: '/dashboard/cms', hasSubmenu: true },
  { icon: Mail, label: 'Email Template', path: '/dashboard/email-template' },
  { icon: Bell, label: 'Notification Template', path: '/dashboard/notification-template' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
];

export default function DashboardSidebar() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter menu items based on search query
  const filteredMenuItems = menuItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-screen sticky top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <Link to="/dashboard" className="flex items-center">
          <img 
            src="/media/logo/bomps_dark_logo.png" 
            alt="Bomps Logo" 
            className="h-8 w-auto"
          />
        </Link>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {filteredMenuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </div>
              {item.hasSubmenu && (
                <ChevronRight className={`h-4 w-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
              )}
            </Link>
          );
        })}
        
        {/* No results message */}
        {filteredMenuItems.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
            No menu items found
          </div>
        )}
      </nav>
    </aside>
  );
}
