import { 
  Users, 
  ShoppingCart, 
  Trophy, 
  ExternalLink,
  Share2,
  QrCode
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';

// Statistik-Karte Komponente
function StatCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  color 
}: { 
  title: string;
  value: string | number;
  subtitle: string;
  icon: any;
  color: 'pink' | 'green' | 'orange';
}) {
  const colorClasses = {
    pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
  };

  const bgGradients = {
    pink: 'from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20',
    green: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
    orange: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
  };

  return (
    <Card className={`relative overflow-hidden bg-gradient-to-br ${bgGradients[color]} border-${color}-200 dark:border-${color}-800`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{value}</h3>
            <p className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{title}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
          </div>
          <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-20 bg-white dark:bg-gray-800"></div>
      </CardContent>
    </Card>
  );
}

export default function DashboardHomePage() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {/* Welcome Card */}
        <Card className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black border-gray-700 dark:border-gray-800 col-span-1 md:col-span-2 lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              {/* QR Code */}
              <div className="w-32 h-32 bg-white rounded-xl p-3 flex items-center justify-center">
                <QrCode className="w-full h-full text-gray-900" />
              </div>
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-black rounded-full">
                <ExternalLink className="h-4 w-4 text-white" />
                <span className="text-sm font-semibold text-white">Landingpage</span>
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-bold text-white mb-2">Super Admin</h3>
                <p className="text-sm text-gray-300 mb-4">
                  The keys to the kingdom are in your hands – welcome to your Super Admin Dashboard!
                </p>
                <div className="flex gap-2 justify-center">
                  <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors">
                    Landing Page
                  </button>
                  <button className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Total Customers */}
        <StatCard
          title="Total Customers"
          value="4"
          subtitle="Paid Customers: 3"
          icon={Users}
          color="pink"
        />

        {/* Total Orders */}
        <StatCard
          title="Total Orders"
          value="2"
          subtitle="Order Amount: €0.00"
          icon={ShoppingCart}
          color="green"
        />

        {/* Total Plans */}
        <StatCard
          title="Total Plans"
          value="2"
          subtitle="Animal Care Business"
          icon={Trophy}
          color="orange"
        />
      </div>

      {/* Recent Order Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Order</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 flex items-end justify-between gap-2 pb-4">
            {/* Simple Line Chart Visualization */}
            <div className="flex-1 h-full flex items-end">
              <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                {/* Area under line */}
                <path
                  d="M 0 300 L 0 250 Q 250 240 500 200 T 1000 20 L 1000 300 Z"
                  fill="url(#chartGradient)"
                />
                {/* Line */}
                <path
                  d="M 0 250 Q 250 240 500 200 T 1000 20"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
          
          {/* X-Axis Labels */}
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2 border-t border-gray-200 dark:border-gray-800 pt-2">
            <span>11-Nov</span>
            <span>13-Nov</span>
            <span>15-Nov</span>
            <span>17-Nov</span>
            <span>19-Nov</span>
            <span>21-Nov</span>
            <span>23-Nov</span>
            <span>24-Nov</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
