import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import ServiceCards from '@/components/ServiceCards';
import BestProducts from '@/components/BestProducts';
import BrandSections from '@/components/BrandSections';
import PickupSection from '@/components/PickupSection';
import TopServicer from '@/components/TopServicer';
import MostBookedServices from '@/components/MostBookedServices';
import SubscriptionNewsletter from '@/components/SubscriptionNewsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* <Navigation /> */}
      <HeroSlider />
      <ServiceCards />
      <BestProducts />
      <BrandSections />
      <PickupSection />
      <TopServicer />
      <MostBookedServices />
      <SubscriptionNewsletter />
      <Footer />
    </div>
  );
}
