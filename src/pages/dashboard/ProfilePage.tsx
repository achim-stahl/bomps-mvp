import { useState } from 'react';
import { ChevronRight, Upload } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'personal' | 'password'>('personal');
  const [fullName, setFullName] = useState('Super Admin');
  const [email, setEmail] = useState('superadmin@example.com');
  const [mobile, setMobile] = useState('');

  // Password form
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSaveChanges = () => {
    // Handle save logic
    console.log('Saving changes...');
  };

  const handlePasswordChange = () => {
    // Handle password change
    console.log('Changing password...');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
          <a href="/dashboard" className="text-primary-600 dark:text-primary-400 hover:underline">Dashboard</a>
          <span>/</span>
          <span>Profile</span>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Tabs */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-4 space-y-2">
              <button
                onClick={() => setActiveTab('personal')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'personal'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <span>Personal Info</span>
                <ChevronRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => setActiveTab('password')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'password'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <span>Change Password</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-8">
              {activeTab === 'personal' ? (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      Personal Information
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Details about your personal information
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left - Avatar Upload */}
                    <div className="space-y-4">
                      <div className="w-40 h-40 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                        <img 
                          src="/media/logo/bomps_dark_logo.png" 
                          alt="Profile" 
                          className="w-24 h-24 object-contain"
                        />
                      </div>
                      <Button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white">
                        <Upload className="h-4 w-4" />
                        Choose file here
                      </Button>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Please upload a valid image file. Size of image should not be more than 2MB.
                      </p>
                    </div>

                    {/* Right - Form Fields */}
                    <div className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>

                      {/* Mobile No */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Mobile No
                        </label>
                        <input
                          type="tel"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="Enter Your Mobile No"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <p className="text-xs text-red-500 mt-1">
                          Please add mobile number with country code. (ex. +91)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-end pt-4">
                    <Button 
                      onClick={handleSaveChanges}
                      className="bg-primary-600 hover:bg-primary-700 text-white px-8"
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Header */}
                  <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      Change Password
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Details about your account password change
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Current Password */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder="Enter Current Password"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    {/* New Password */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter New Password"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    {/* New Confirm Password */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        New Confirm Password
                      </label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Enter Confirm Password"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-end pt-4">
                    <Button 
                      onClick={handlePasswordChange}
                      className="bg-primary-600 hover:bg-primary-700 text-white px-8"
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
