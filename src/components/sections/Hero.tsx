import { ArrowRight, Layers, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-gray-50 -z-10" />
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80" 
          alt="Team collaboration" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Announcement Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-200 rounded-full text-sm text-primary-700">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Your Organization Has Been Invited To Our Software's Pre-Launch Mode
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            With Bomps, you can take care of{' '}
            <span className="text-primary-600">each need</span> of your business functions{' '}
            <span className="text-primary-600">in one place</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Lay a solid foundation for your brand. Grab a high-converting web powered by a 
            secure backend coupled with an intuitive eCommerce.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" className="group">
              Get the Package
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Live Demo
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary-600" />
            <span>Enterprise-grade security</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary-600" />
            <span>Lightning fast</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeaturesSection = () => {
  const features = [
    {
      icon: Layers,
      title: 'Smart Multi-Workspace Management',
      description: 'Manage multiple companies, branches, or departments from a single account. BOMPS lets you switch workspaces instantly, giving you a clear view of all operations without juggling logins.',
    },
    {
      icon: Zap,
      title: 'Modular ERP for Every Business',
      description: 'From Accounting to HRM, CRM to POS — activate only the modules you need. BOMPS adapts to your workflow, whether you\'re running a small startup or managing multiple enterprises.',
    },
    {
      icon: Shield,
      title: 'Secure, Cloud-Based Access Anywhere',
      description: 'Work from the office, home, or on the move. BOMPS is accessible from any device with enterprise-grade security, ensuring your data is always protected.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            We are building businesses with you
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
                <Button variant="ghost" size="sm" className="mt-4 p-0 h-auto">
                  Find Out More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
