import HeroSection from '@/components/HeroSection'
import Dishes from '@/components/Dishes'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <Dishes />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
