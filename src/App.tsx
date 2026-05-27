import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initScrollDepth } from '@/utils/analytics';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BenefitsSection from '@/components/BenefitsSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import DiferenciaisSection from '@/components/DiferenciaisSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import OfferSection from '@/components/OfferSection';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ThankYou from '@/components/ThankYou';

function LandingPage() {
  useEffect(() => {
    // Init scroll depth tracking
    const cleanup = initScrollDepth();

    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      cleanup();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <BenefitsSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <DiferenciaisSection />
        <TestimonialsSection />
        <OfferSection />
        <ContactForm />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/curso-ingles-limeira" element={<LandingPage />} />
        <Route path="/obrigado" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}
