import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedWorkshops from '@/components/FeaturedWorkshops';
import HowItWorks from '@/components/HowItWorks';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <FeaturedWorkshops />
      <HowItWorks />
    </div>
  );
}
