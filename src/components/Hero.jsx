import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import heroImage from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const { language } = useLanguage();
  const t = content[language];

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-6 py-32">
        <div className="max-w-5xl mx-auto animate-fade-up">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-cinematic mb-6 leading-tight">
            {t.hero.headline}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-body mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              onClick={scrollToPortfolio}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg transition-all hover:scale-105 hover:shadow-lg"
            >
              {t.hero.ctaPrimary}
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>

          {/* Microcopy with Arrow */}
          <div className="flex flex-col items-center gap-4 animate-fade-in">
            <p className="text-sm text-muted-foreground font-body">
              {t.hero.microcopy}
            </p>
            <ArrowDown className="h-6 w-6 text-accent animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
