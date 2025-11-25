import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Download, 
  Filter, 
  Plus, 
  Grid3x3,
  X,
  Edit,
  Trash2,
  Shield,
  FileText,
  Mail,
  Eye,
  Search
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card, CardContent } from '../../components/ui/Card';

const customers = [
  {
    id: 1,
    no: 1,
    name: 'subscriber123',
    email: 'subscriber123@achimstahl.de',
    role: 'company',
    avatar: null
  },
  {
    id: 2,
    no: 2,
    name: 'Vigorious Technologies Ltd, Pakistan',
    email: 'vigteam62@gmail.com',
    role: 'company',
    avatar: null
  },
  {
    id: 3,
    no: 3,
    name: 'Dragon Animal Care Center',
    email: 'dragonqat@gmail.com',
    role: 'company',
    avatar: '/media/images/dragon-logo.jpg'
  },
  {
    id: 4,
    no: 4,
    name: 'WorkDo',
    email: 'company@example.com',
    role: 'company',
    avatar: null
  }
];

export default function CustomersListPage() {
  const navigate = useNavigate();
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  const handleGridView = () => {
    navigate('/dashboard/customers');
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
        <div className="flex items-center gap-2 lg:gap-3">
          <Button 
            onClick={handleGridView}
            variant="outline" 
            className="flex items-center gap-2 bg-primary-600 text-white hover:bg-primary-700 border-primary-600"
          >
            <Grid3x3 className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-primary-600 text-white hover:bg-primary-700 border-primary-600">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-primary-600 text-white hover:bg-primary-700 border-primary-600">
            <FileText className="h-4 w-4" />
          </Button>
          <Button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Table Card */}
      <Card>
        <CardContent className="p-6">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            {/* Entries Per Page */}
            <div className="flex items-center gap-2">
              <select
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <span className="text-sm text-gray-600 dark:text-gray-400">Entries Per Page</span>
            </div>

            {/* Action Buttons and Search */}
            <div className="flex flex-wrap items-center gap-2 lg:gap-3">
              <Button variant="outline" className="bg-cyan-500 hover:bg-cyan-600 text-white border-cyan-500">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="bg-pink-500 hover:bg-pink-600 text-white border-pink-500">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="bg-orange-500 hover:bg-orange-600 text-white border-orange-500">
                <X className="h-4 w-4" />
              </Button>
              
              {/* Search */}
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full sm:w-auto border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">NO</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">AVATAR</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">NAME</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">EMAIL</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">ROLE</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900 dark:text-white">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-4 px-4 text-sm text-gray-900 dark:text-white">{customer.no}</td>
                    <td className="py-4 px-4">
                      <div className="w-10 h-10 rounded-full border-2 border-primary-200 dark:border-primary-800 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                        {customer.avatar ? (
                          <img src={customer.avatar} alt={customer.name} className="w-full h-full rounded-full object-cover" />
                        ) : (
                          <Users className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900 dark:text-white">{customer.name}</td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">{customer.email}</td>
                    <td className="py-4 px-4">
                      <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded">
                        {customer.role}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors">
                          <X className="h-4 w-4" />
                        </button>
                        <button className="p-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white transition-colors">
                          <FileText className="h-4 w-4" />
                        </button>
                        <button className="p-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors">
                          <Shield className="h-4 w-4" />
                        </button>
                        <button className="p-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition-colors">
                          <Mail className="h-4 w-4" />
                        </button>
                        <button className="p-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Showing 1 to 4 of 4 entries
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400">
                &lt;
              </button>
              <button className="px-3 py-1 bg-primary-600 text-white rounded">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400">
                &gt;
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
