import { Hero } from '../components/Hero';
import { ClientsSection } from '../components/ClientsSection';
import { ProductsSection } from '../components/ProductsSection';
import { DifferentialsSection } from '../components/DifferentialsSection';
import { CustomizationSection } from '../components/CustomizationSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { ClientFeedbackVideosSection } from '../components/ClientFeedbackVideosSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { AboutSection } from '../components/AboutSection';
import { VideoProductionSection } from '../components/VideoProductionSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <ClientsSection />
      <ProductsSection />
      <PortfolioSection />
      <DifferentialsSection />
      <CustomizationSection />
      <ClientFeedbackVideosSection />
      <TestimonialsSection />
      <AboutSection />
      <VideoProductionSection />
      <HowItWorksSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}