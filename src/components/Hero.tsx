import { ArrowDown, Play } from 'lucide-react';
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
      {/* Background Image with Parallax & Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background animate-fade-in" />
        
        {/* Subtle Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(212,175,55,0.1),_transparent_50%)]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/5 blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-6 py-32">
        <div className="max-w-5xl mx-auto">
          {/* Film Strip Decorative Element */}
          <div className="flex justify-center mb-8 opacity-30">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-12 bg-accent rounded-full animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
          </div>

          {/* Main Headline with Gradient */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-cinematic mb-6 leading-tight animate-fade-up">
            <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
              {t.hero.headline}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-body mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up animation-delay-400">
            <Button
              size="lg"
              variant="cinematic"
              onClick={scrollToPortfolio}
              className="px-8 py-6 text-lg group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              {t.hero.ctaPrimary}
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>

          {/* Microcopy with Animated Arrow */}
          <div className="flex flex-col items-center gap-4 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground font-body tracking-wider uppercase">
              {t.hero.microcopy}
            </p>
            <div className="relative">
              <ArrowDown className="h-6 w-6 text-accent animate-bounce" />
              <div className="absolute inset-0 h-6 w-6 text-accent animate-ping opacity-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
