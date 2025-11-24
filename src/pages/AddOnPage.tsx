import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Calculator, 
  Users, 
  UserCheck, 
  CreditCard, 
  ShoppingCart, 
  Banknote,
  FolderKanban,
  Settings,
  Building2
} from 'lucide-react';

const AddOnPage = () => {
  const addons = [
    {
      id: 'accounting',
      name: 'Accounting',
      icon: Calculator,
      badge: 'STATISTICS',
      priceMonthly: 10.00,
      priceYearly: 100.00,
    },
    {
      id: 'hrm',
      name: 'HRM',
      icon: Users,
      badge: 'STATISTICS',
      priceMonthly: 0.00,
      priceYearly: 0.00,
    },
    {
      id: 'crm',
      name: 'CRM',
      icon: UserCheck,
      badge: 'STATISTICS',
      priceMonthly: 0.00,
      priceYearly: 0.00,
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: CreditCard,
      badge: 'STATISTICS',
      priceMonthly: 0.00,
      priceYearly: 0.00,
    },
    {
      id: 'pos',
      name: 'POS',
      icon: ShoppingCart,
      badge: 'STATISTICS',
      priceMonthly: 0.00,
      priceYearly: 0.00,
    },
    {
      id: 'stripe',
      name: 'Stripe',
      icon: Banknote,
      badge: 'STATISTICS',
      priceMonthly: 0.00,
      priceYearly: 0.00,
    },
    {
      id: 'project',
      name: 'Project',
      icon: FolderKanban,
      badge: 'STATISTICS',
      priceMonthly: 0.00,
      priceYearly: 0.00,
    },
    {
      id: 'custom-field',
      name: 'Custom Field',
      icon: Settings,
      badge: 'STATISTICS',
      priceMonthly: 0.00,
      priceYearly: 0.00,
    },
    {
      id: 'hospital',
      name: 'Hospital Management',
      icon: Building2,
      badge: 'STATISTICS',
      priceMonthly: 0.00,
      priceYearly: 0.00,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80" 
                alt="Business extensions" 
                className="w-full max-w-5xl mx-auto h-64 object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              All Add-on
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Lay a solid foundation for your fashion brand. Grab a high-converting fashion theme powered by a secure backend coupled with an intuitive eCommerce mobile app.
            </p>
          </div>
        </section>

        {/* Add-ons Grid */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {addons.map((addon) => {
                const Icon = addon.icon;
                return (
                  <Card 
                    key={addon.id} 
                    className="bg-white border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 group"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gray-50 group-hover:bg-primary-50 border-2 border-gray-100 group-hover:border-primary-200 flex items-center justify-center transition-all duration-300">
                          <Icon className="h-7 w-7 text-gray-600 group-hover:text-primary-600 transition-colors duration-300" />
                        </div>
                        <span className="px-3 py-1.5 bg-gray-100 group-hover:bg-primary-100 text-gray-700 group-hover:text-primary-700 text-xs font-semibold rounded-full transition-all duration-300 uppercase tracking-wide">
                          {addon.badge}
                        </span>
                      </div>
                      <CardTitle className="text-2xl text-gray-900">{addon.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-gray-900">
                            €{addon.priceMonthly.toFixed(2)}
                          </span>
                          <span className="text-sm text-gray-500 font-medium">/Month</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-semibold text-gray-700">
                            €{addon.priceYearly.toFixed(2)}
                          </span>
                          <span className="text-sm text-gray-500 font-medium">/Year</span>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary-50 group-hover:text-primary-700 group-hover:border-primary-300 transition-all duration-300"
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom Description */}
        <section className="px-4 sm:px-6 lg:px-8 mt-20">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-600">
              An effective fashion theme should be visually appealing and easy to navigate. A good theme makes it easy for customers to find and buy the items they're interested in. The theme should also be responsive so that it looks good on all devices.
            </p>
            <p className="text-gray-600">
              With the Style theme, you get all of the above - and more. The theme gives you everything you need to sell your products and keep your audience coming back for more. Easily customize the theme and adjust its design to your branding needs. Add products, polish product pages, and start growing your online business.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AddOnPage;
