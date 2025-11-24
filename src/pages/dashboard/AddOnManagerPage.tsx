import { MoreVertical, Plus } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

const installedAddons = [
  { id: 1, name: 'Accounting', version: 'V3.9', icon: '📊', color: 'bg-gray-800' },
  { id: 2, name: 'Custom Field', version: 'V3.5', icon: '📝', color: 'bg-gray-800' },
  { id: 3, name: 'Hospital Management', version: 'V3.5', icon: '🏥', color: 'bg-gray-800' },
  { id: 4, name: 'HRM', version: 'V4.3', icon: '👥', color: 'bg-gray-800' },
  { id: 5, name: 'CRM', version: 'V3.7', icon: '📞', color: 'bg-gray-800' },
  { id: 6, name: 'PayPal', version: 'V3.8', icon: '💳', color: 'bg-blue-600' },
  { id: 7, name: 'POS', version: 'V3.7', icon: '🏪', color: 'bg-gray-800' },
  { id: 8, name: 'Stripe', version: 'V3.8', icon: 'S', color: 'bg-purple-600' },
  { id: 9, name: 'Project', version: 'V3.5', icon: '📋', color: 'bg-gray-800' },
];

const exploreAddons = [
  { id: 10, name: 'Sales', version: 'V3.5', icon: '💰', color: 'bg-green-600' },
  { id: 11, name: 'Marketing', version: 'V2.8', icon: '📢', color: 'bg-orange-600' },
  { id: 12, name: 'Support Ticket', version: 'V4.1', icon: '🎫', color: 'bg-red-600' },
  { id: 13, name: 'Inventory', version: 'V3.2', icon: '📦', color: 'bg-indigo-600' },
  { id: 14, name: 'Analytics', version: 'V2.9', icon: '📈', color: 'bg-cyan-600' },
  { id: 15, name: 'Invoicing', version: 'V3.6', icon: '🧾', color: 'bg-yellow-600' },
];

function AddonCard({ addon }: { addon: any }) {
  return (
    <Card className="group hover:shadow-lg transition-all border-2 border-primary-200 dark:border-primary-800/50 hover:border-primary-400 dark:hover:border-primary-600">
      <CardContent className="p-5">
        {/* Header with icon and menu */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-14 h-14 rounded-xl ${addon.color} flex items-center justify-center text-2xl`}>
            {addon.icon}
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-primary-600 text-white text-xs font-semibold rounded">
              Enable
            </span>
            <button className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <MoreVertical className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Name and Version */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {addon.name}
          </h3>
          <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
            {addon.version}
          </p>
        </div>

        {/* Action Button */}
        <Button 
          variant="outline" 
          className="w-full border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default function AddOnManagerPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Add-on Manager</h1>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
            <a href="/dashboard" className="text-primary-600 dark:text-primary-400 hover:underline">Dashboard</a>
            <span>/</span>
            <span>Add-on Manager</span>
          </div>
        </div>

        {/* Action Button */}
        <Button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white">
          <Plus className="h-4 w-4" />
          <span>Add New</span>
        </Button>
      </div>

      {/* Buy More Add-On Banner */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            {/* Left Side - Illustration */}
            <div className="flex items-center gap-8">
              <div className="text-6xl">
                🛒👥
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 dark:bg-gray-900 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Click Here</span>
              </div>
            </div>

            {/* Center - Text */}
            <div className="text-center flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Buy More Add-On
              </h2>
              <div className="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400">
                <span className="text-4xl font-bold">+348</span>
                <div className="text-left text-sm">
                  <div className="font-semibold">Premium</div>
                  <div>Add-On</div>
                </div>
              </div>
            </div>

            {/* Right Side - Buttons */}
            <div className="flex gap-3">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Buy Add-on Bundles
              </Button>
              <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                Buy More Add-on
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Installed Add-on Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Installed Add-on</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
          {installedAddons.map((addon) => (
            <AddonCard key={addon.id} addon={addon} />
          ))}
        </div>
      </div>

      {/* Explore Add-on Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Explore Add-on</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
          {exploreAddons.map((addon) => (
            <AddonCard key={addon.id} addon={addon} />
          ))}
        </div>
      </div>
    </div>
  );
}
