import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Story } from '@/components/Story';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { Partners } from '@/components/Partners';
import { Testimonials } from '@/components/Testimonials';
import { Philosophy } from '@/components/Philosophy';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Story />
        <About />
        <Services />
        <Portfolio />
        <Partners />
        <Testimonials />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
