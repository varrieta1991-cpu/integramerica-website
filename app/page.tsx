import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import ReviewTicker from '@/components/ReviewTicker';
import ReviewsGrid from '@/components/ReviewsGrid';
import ServiceAreas from '@/components/ServiceAreas';
import UrgentCTA from '@/components/UrgentCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <WhyChooseUs />
        <Services />
        <HowItWorks />
        <ReviewTicker />
        <ReviewsGrid />
        <ServiceAreas />
        <UrgentCTA />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
