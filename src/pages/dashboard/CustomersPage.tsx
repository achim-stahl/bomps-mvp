import { Users, MoreVertical, Download, Filter, Plus, Grid3x3, List, X, Edit, Trash2, Shield, FileText, Mail, Eye } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const customers = [
  {
    id: 1,
    name: 'WorkDo',
    email: 'company@example.com',
    plan: 'Basic Plan',
    planExpired: '07-09-2025',
    avatar: null,
    type: 'Company'
  },
  {
    id: 2,
    name: 'Dragon Animal Care Center',
    email: 'dragonqat@gmail.com',
    plan: 'Animal Care Business',
    planExpired: '11-08-2026',
    logo: '/media/images/dragon-logo.jpg',
    type: 'Company'
  },
  {
    id: 3,
    name: 'Vigorious Technologies Ltd, Pakistan',
    email: 'vigteam62@gmail.com',
    plan: 'Basic',
    planExpired: '12-09-2025',
    avatar: null,
    type: 'Company'
  },
  {
    id: 4,
    name: 'subscriber123',
    email: 'subscriber123@achimstahl.de',
    plan: 'Animal Care Business',
    planExpired: '24-12-2025',
    avatar: null,
    type: 'Company'
  }
];

export default function CustomersPage() {
  const navigate = useNavigate();

  const handleListView = () => {
    navigate('/dashboard/customers/list');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Customers</h1>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
            <a href="/dashboard" className="text-primary-600 dark:text-primary-400 hover:underline">Dashboard</a>
            <span>/</span>
            <span>Customers</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 lg:gap-3">
          <Button 
            onClick={handleListView}
            variant="outline" 
            className="flex items-center gap-2 bg-primary-600 text-white hover:bg-primary-700 border-primary-600"
          >
            <List className="h-4 w-4" />
            <span className="hidden sm:inline">List View</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">Import</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filter</span>
          </Button>
          <Button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white">
            <Plus className="h-4 w-4" />
            <span>Create</span>
          </Button>
        </div>
      </div>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {customers.map((customer) => (
          <Card key={customer.id} className="relative group hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              {/* Three Dots Menu */}
              <div className="absolute top-4 right-4">
                <button className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <MoreVertical className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              {/* Company Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                  {customer.type}
                </span>
              </div>

              {/* Avatar */}
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-20 h-20 rounded-full border-4 border-primary-200 dark:border-primary-800 flex items-center justify-center mb-3 bg-gray-100 dark:bg-gray-800">
                  {customer.logo ? (
                    <img src={customer.logo} alt={customer.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <Users className="h-10 w-10 text-gray-400" />
                  )}
                </div>

                {/* Name & Email */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {customer.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {customer.email}
                </p>

                {/* Plan Info */}
                <div className="flex items-center justify-between w-full mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {customer.plan}
                  </span>
                  <Button 
                    variant="outline" 
                    className="text-xs px-3 py-1 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30"
                  >
                    AdminHub
                  </Button>
                </div>

                {/* Plan Expired */}
                <div className="text-center w-full">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Plan Expired</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {customer.planExpired}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* New Customer Card */}
        <Card className="border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-600 transition-colors cursor-pointer group">
          <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary-600 group-hover:bg-primary-700 flex items-center justify-center mb-4 transition-colors">
              <Plus className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              New Customer
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Click here to Create New Customer
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
