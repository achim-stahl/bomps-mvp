import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { TrendingUp, Zap, Shield, Package } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Sell More Than Your Competitors',
      description: 'Your online store has one goal - to sell your products. Thanks to years of experience in the industry, we know the ins and outs of online sales. And we put that knowledge into every package that we offer. With the Style eCommerce package, you get a store that\'s optimized for helping you sell more in the fashion niche.',
    },
    {
      icon: Zap,
      title: 'Get a Headstart over Your Competitors',
      description: 'In business, you have to act fast. By choosing our Style theme package, you can get everything you need to start selling right away. Hit the market with your product sooner, attract early sales, and build an audience from day one.',
    },
    {
      icon: Shield,
      title: 'Avoid Design Mistakes',
      description: 'When you get a ready-made package, you avoid common design mistakes that could cost your business a fortune. Not only that. Thanks to a higher conversion rate, you can achieve better ROI on your marketing expenses.',
    },
    {
      icon: Package,
      title: 'Build a Long-Term Asset',
      description: 'The key to success in eCommerce is to scale your store and build an audience of loyal, recurring customers. With our package, you get more than just a store. You get an asset that\'s ready for you to take care of it and grow it for years to come.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-gray-200">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  {benefit.description}
                </CardDescription>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary-600 hover:text-primary-700">
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
