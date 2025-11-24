import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection, FeaturesSection } from '@/components/sections/Hero';
import { ModulesSection } from '@/components/sections/Modules';
import { TechnologySection } from '@/components/sections/Technology';
import { BenefitsSection } from '@/components/sections/Benefits';
import { CTASection, FinalCTA } from '@/components/sections/CTA';
import { NewsletterModal } from '@/components/NewsletterModal';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ModulesSection />
        <TechnologySection />
        <BenefitsSection />
        <CTASection />
        <FinalCTA />
      </main>
      <Footer />
      <NewsletterModal />
    </div>
  );
};

export default HomePage;
