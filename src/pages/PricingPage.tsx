import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Check, Users, Building2, Clock, Plus, Minus } from 'lucide-react';
import { CTASection } from '@/components/sections/CTA';

const PricingPage = () => {
  const [pricingMode, setPricingMode] = useState<'prepackaged' | 'usage'>('prepackaged');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [workspaces, setWorkspaces] = useState(0);
  const [users, setUsers] = useState(0);
  const [selectedExtensions, setSelectedExtensions] = useState<string[]>([]);

  const plans = [
    {
      name: 'Basic',
      price: 0,
      features: {
        maxUsers: '5',
        maxWorkspaces: '5',
        trialDays: '0',
      },
      addons: [
        'Accounting',
        'HRM',
        'CRM',
        'PayPal',
        'POS',
        'Stripe',
        'Project',
        'Custom Field',
        'Hospital Management',
      ],
    },
    {
      name: 'Animal Care Business',
      price: 0,
      features: {
        maxUsers: 'Unlimited',
        maxWorkspaces: 'Unlimited',
        trialDays: '0',
      },
      popular: true,
      addons: [
        'Accounting',
        'HRM',
        'CRM',
        'PayPal',
        'POS',
        'Stripe',
        'Project',
        'Custom Field',
        'Hospital Management',
      ],
    },
  ];

  const extensions = [
    { name: 'Accounting', price: 10.0 },
    { name: 'HRM', price: 0.0 },
    { name: 'CRM', price: 0.0 },
    { name: 'PayPal', price: 0.0 },
    { name: 'POS', price: 0.0 },
    { name: 'Stripe', price: 0.0 },
    { name: 'Project', price: 0.0 },
    { name: 'Custom Field', price: 0.0 },
    { name: 'Hospital Management', price: 0.0 },
  ];

  const workspacePrice = 0.0;
  const userPrice = 0.0;

  const calculateTotal = () => {
    const workspaceCost = workspaces * workspacePrice;
    const userCost = users * userPrice;
    const extensionCost = selectedExtensions.reduce((sum, ext) => {
      const extension = extensions.find(e => e.name === ext);
      return sum + (extension?.price || 0);
    }, 0);
    return workspaceCost + userCost + extensionCost;
  };

  const toggleExtension = (extensionName: string) => {
    setSelectedExtensions(prev =>
      prev.includes(extensionName)
        ? prev.filter(e => e !== extensionName)
        : [...prev, extensionName]
    );
  };

  const handleReset = () => {
    setWorkspaces(0);
    setUsers(0);
    setSelectedExtensions([]);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80" 
                alt="Pricing and planning" 
                className="w-full max-w-4xl mx-auto h-64 object-cover rounded-3xl shadow-xl"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Simple Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Choose extensions that best match your business needs
            </p>
            
            {/* Pricing Mode Toggle */}
            <div className="inline-flex items-center gap-3 p-1 bg-gray-100 rounded-lg mb-6">
              <button
                onClick={() => setPricingMode('prepackaged')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  pricingMode === 'prepackaged'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Pre-Packaged Subscription
              </button>
              <button
                onClick={() => setPricingMode('usage')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  pricingMode === 'usage'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Usage Subscription
              </button>
            </div>

            {pricingMode === 'prepackaged' && (
              <div className="inline-flex items-center gap-3 p-1 bg-gray-100 rounded-lg">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    billingCycle === 'monthly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    billingCycle === 'yearly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Yearly
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Pre-Packaged Pricing Cards */}
        {pricingMode === 'prepackaged' && (
          <section className="px-4 sm:px-6 lg:px-8 mb-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative ${
                    plan.popular 
                      ? 'border-brand-300 dark:border-brand-600 shadow-xl ring-2 ring-brand-200 dark:ring-brand-700' 
                      : 'border-gray-200 dark:border-gray-800'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 bg-brand-600 text-white text-sm font-semibold rounded-full">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8 pt-8">
                    <CardTitle className="text-2xl mb-6">{plan.name}</CardTitle>
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gray-900 dark:text-white">
                        €{plan.price.toFixed(2)}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">/Per Month</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                          <Users className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Max User: </span>
                          <span className="font-semibold">{plan.features.maxUsers}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Max Workspace: </span>
                          <span className="font-semibold">{plan.features.maxWorkspaces}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Free Trial Days: </span>
                          <span className="font-semibold">{plan.features.trialDays}</span>
                        </div>
                      </div>
                    </div>

                    {/* Addons Section */}
                    <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Compare our plans</h4>
                      <div className="space-y-2">
                        {plan.addons.map((addon, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <Check className="h-4 w-4 text-success-600 flex-shrink-0" />
                            <span>{addon}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      variant={plan.popular ? 'primary' : 'outline'} 
                      className="w-full"
                      size="lg"
                    >
                      Subscription
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            </div>
          </section>
        )}

        {/* Usage Subscription */}
        {pricingMode === 'usage' && (
          <section className="px-4 sm:px-6 lg:px-8 mb-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Extension Selection */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Extensions</h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {extensions.map((extension, index) => (
                      <div
                        key={index}
                        className={`cursor-pointer transition-all rounded-2xl border-2 ${
                          selectedExtensions.includes(extension.name)
                            ? 'border-brand-500 ring-2 ring-brand-200 bg-brand-50'
                            : 'border-gray-200 hover:border-brand-300 bg-white'
                        }`}
                        onClick={() => toggleExtension(extension.name)}
                      >
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900">{extension.name}</h3>
                            <input
                              type="checkbox"
                              checked={selectedExtensions.includes(extension.name)}
                              onChange={() => toggleExtension(extension.name)}
                              className="w-5 h-5 text-brand-600 rounded border-gray-300 focus:ring-brand-500"
                            />
                          </div>
                          <p className="text-lg font-bold text-gray-900">
                            €{extension.price.toFixed(2)}
                            <span className="text-sm text-gray-600 font-normal">/Month</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Calculator */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-24 border-brand-200">
                    <CardHeader>
                      <CardTitle>Basic Package</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Workspace Counter */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Building2 className="h-5 w-5 text-gray-600" />
                          <label className="font-medium text-gray-900">workspace:</label>
                          <span className="ml-auto font-bold text-gray-900">{workspaces}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setWorkspaces(Math.max(0, workspaces - 1))}
                            className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-brand-500 hover:bg-brand-50 transition-all flex items-center justify-center"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <input
                            type="number"
                            value={workspaces}
                            onChange={(e) => setWorkspaces(Math.max(0, parseInt(e.target.value) || 0))}
                            className="flex-1 text-center px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none"
                          />
                          <button
                            onClick={() => setWorkspaces(workspaces + 1)}
                            className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-brand-500 hover:bg-brand-50 transition-all flex items-center justify-center"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Users Counter */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Users className="h-5 w-5 text-gray-600" />
                          <label className="font-medium text-gray-900">Users:</label>
                          <span className="ml-auto font-bold text-gray-900">{users}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setUsers(Math.max(0, users - 1))}
                            className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-brand-500 hover:bg-brand-50 transition-all flex items-center justify-center"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <input
                            type="number"
                            value={users}
                            onChange={(e) => setUsers(Math.max(0, parseInt(e.target.value) || 0))}
                            className="flex-1 text-center px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none"
                          />
                          <button
                            onClick={() => setUsers(users + 1)}
                            className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-brand-500 hover:bg-brand-50 transition-all flex items-center justify-center"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Extension Count */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Extension:</span>
                        <span className="font-semibold text-gray-900">{selectedExtensions.length}</span>
                      </div>

                      <div className="border-t border-gray-200 pt-4 space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Basic Package</span>
                          <span className="font-semibold text-success-600">Free</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">
                            Workspace ( Per Workspace €{workspacePrice.toFixed(2)} )
                          </span>
                          <span className="font-semibold">€{(workspaces * workspacePrice).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">
                            Users ( Per User €{userPrice.toFixed(2)} )
                          </span>
                          <span className="font-semibold">€{(users * userPrice).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Extension:</span>
                          <span className="font-semibold">
                            €{selectedExtensions
                              .reduce((sum, ext) => sum + (extensions.find(e => e.name === ext)?.price || 0), 0)
                              .toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          €{calculateTotal().toFixed(2)}
                          <span className="text-base text-gray-600 font-normal">/Month</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="primary" className="flex-1">
                          Buy Now
                        </Button>
                        <Button variant="outline" onClick={handleReset}>
                          Reset
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Technology Stack Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                A solid foundation for your business
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Built with modern technologies: Django backend, React frontend with TypeScript, and styled with Tailwind CSS
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
                {/* Django Logo */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3">
                    <svg viewBox="0 0 128 128" className="w-full h-full">
                      <path fill="#092e20" d="M59.448 0h20.93v96.88c-10.737 2.04-18.62 2.855-27.181 2.855-25.551 0-38.87-11.551-38.87-33.705 0-21.338 14.135-35.2 36.015-35.2 3.398 0 5.98.272 9.106 1.087zm0 48.765c-2.446-.815-4.485-1.086-7.067-1.086-10.6 0-16.717 6.523-16.717 17.939 0 11.145 5.845 17.26 16.582 17.26 2.309 0 4.212-.136 7.202-.542zM113.672 32.321V80.84c0 16.717-1.224 24.735-4.893 31.666-3.398 6.661-7.883 10.873-17.124 15.494l-19.435-9.241c9.242-4.35 13.726-8.153 16.58-14 2.99-5.979 3.943-12.91 3.943-31.122V32.321zM92.742.111h20.93v21.474h-20.93z"/>
                    </svg>
                  </div>
                  <span className="text-white font-semibold">Django</span>
                </div>

                {/* React Logo */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3">
                    <svg viewBox="0 0 128 128" className="w-full h-full">
                      <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 2.2 56.9 2.2 64.2c0 7.3 5.9 14.2 18.1 19.1 2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.2-4.9 18.1-11.8 18.1-19.1 0-7.3-5.9-14.2-18.1-19.1zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21.1c-1.2-2-2.2-4.1-3.4-6.2-1.2-2.1-2.4-4.1-3.6-6-3.8.5-7.4 1.1-10.8 1.9 1.1 3.3 2.3 6.8 3.8 10.3zM31.7 34c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g>
                    </svg>
                  </div>
                  <span className="text-white font-semibold">React</span>
                </div>

                {/* TypeScript Logo */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3">
                    <svg viewBox="0 0 128 128" className="w-full h-full">
                      <path fill="#007acc" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"/>
                    </svg>
                  </div>
                  <span className="text-white font-semibold">TypeScript</span>
                </div>

                {/* Tailwind CSS Logo */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3">
                    <svg viewBox="0 0 128 128" className="w-full h-full">
                      <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"/>
                    </svg>
                  </div>
                  <span className="text-white font-semibold">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
