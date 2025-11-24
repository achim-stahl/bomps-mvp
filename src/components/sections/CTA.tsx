import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          A style theme, together with a dedicated Laravel backend and an intuitive mobile app
        </h2>
        <p className="text-xl text-primary-100 mb-8">
          gives your business an unfair advantage. The package doesn't just provide you with everything you need to start selling online. It gives you a solid foundation for an eCommerce business for years to come.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
            Get the Package
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10">
            VIEW LIVE DEMO
          </Button>
        </div>
      </div>
    </section>
  );
};

export const FinalCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 text-center border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start an Online Fashion Business with a Complete eCommerce Package
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a fashion-themed eCommerce store with a secure backend and convenient mobile app. Build a brand, manage your store wherever you are, and grow an online business.
          </p>
          <Button variant="primary" size="lg" className="shadow-lg">
            Get the Package
          </Button>
        </div>

        <div className="mt-16 prose prose-lg max-w-3xl mx-auto text-gray-600">
          <p>
            An effective fashion theme should be visually appealing and easy to navigate. A good theme makes it easy for customers to find and buy the items they're interested in. The theme should also be responsive so that it looks good on all devices.
          </p>
          <p>
            With the Style theme, you get all of the above - and more. The theme gives you everything you need to sell your products and keep your audience coming back for more. Easily customize the theme and adjust its design to your branding needs. Add products, polish product pages, and start growing your online business.
          </p>
        </div>
      </div>
    </section>
  );
};
