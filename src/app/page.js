import HeroSection from '@/components/HeroSection'
import Dishes from '@/components/Dishes'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Menu from '@/components/Menu'

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <Dishes />
        <Testimonials />
        <FAQ />
         <Menu />
        <CTA />
      </main>
    </div>
  );
}
