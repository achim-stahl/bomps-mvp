import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Code2, Database, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const TechnologySection = () => {
  const technologies = [
    {
      icon: Code2,
      title: 'High-Performing, Secure PHP Framework',
      description: 'Unlike many frameworks that come and go, the framework stood the test of time. Over the years, it grew to become one of the fastest and most secure frameworks in the market.',
    },
    {
      icon: Database,
      title: 'Stable Codebase',
      description: 'Some frameworks come and go - but Laravel is here to stay. Laravel\'s active developer community helps keep its codebase up-to-date and stable. This, in turn, helps ensure the stability of your eCommerce website.',
    },
    {
      icon: Lock,
      title: 'Secure Integrations',
      description: 'As you grow, you may want to expand your store with new functionalities or payment methods. Thanks to Laravel\'s flexibility, it\'s easy to add new integrations and customize the store even once it\'s already developed.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-500/20 rounded-full text-primary-300 font-semibold text-sm mb-4">
            SOLID FOUNDATION
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Built with Technology You Can Trust
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our backend is built with Laravel - one of the most popular and highest-rated web development frameworks. Find out why we chose it - and how it benefits your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-primary-500 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <tech.icon className="h-6 w-6 text-primary-400" />
                </div>
                <CardTitle className="text-white">{tech.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base mb-4">
                  {tech.description}
                </CardDescription>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary-400 hover:text-primary-300">
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
