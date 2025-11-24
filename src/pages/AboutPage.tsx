import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Target } from 'lucide-react';

const AboutPage = () => {
  const offerings = [
    {
      title: 'All-in-One Management',
      description: 'From accounting to HR, sales to inventory, manage every aspect of your business in one secure platform.',
    },
    {
      title: 'Modular Flexibility',
      description: 'Activate only the features you need, expand at your pace.',
    },
    {
      title: 'Multi-Region & Multilingual',
      description: 'Designed for global operations with full support for EU, UK, and Middle East markets.',
    },
    {
      title: 'AI-Ready Architecture',
      description: 'Built to integrate machine learning and intelligent automation from day one.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Bomps.app
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Bomps offers comprehensive web solutions to businesses. We aim to provide products that are beautifully designed, user friendly and a delight to use.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* About Bomps */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Bomps
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bomps is a next-generation, AI-ready ERP platform designed to help businesses of all sizes work smarter, faster, and more securely. Developed by <span className="font-semibold text-gray-900">XSAVY GmbH</span> in Munich, Germany, Bomps combines powerful business management tools with modern, intuitive design — enabling you to focus on growth instead of juggling disconnected systems.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-brand-50 to-gray-50 rounded-2xl p-8 md:p-12 border border-brand-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To make advanced business software accessible, adaptable, and affordable — giving companies the power to operate like industry leaders without the complexity or cost.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Offer */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">What We Offer</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {offerings.map((item, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Bomps */}
            <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Why Choose Bomps?</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Because modern businesses need more than software — they need a partner that evolves with them. Bomps is constantly updated to meet new regulatory, market, and technological demands, so you can stay ahead without the stress.
              </p>
              <p className="text-xl font-semibold text-brand-400">
                Bomps – Business. Organized. Managed. Powered. Smart.
              </p>
            </div>

            {/* Company Info */}
            <div className="text-center pt-8">
              <p className="text-gray-600">
                Developed by <span className="font-semibold text-gray-900">XSAVY GmbH</span>
              </p>
              <p className="text-gray-600">Munich, Germany</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
