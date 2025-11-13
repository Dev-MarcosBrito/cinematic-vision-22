import { Camera, Film, Music, Megaphone, Share2, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { content } from '@/data/content';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const serviceIcons = [Camera, Film, Music, Megaphone, Share2, BookOpen];

export const Services = () => {
  const { language } = useLanguage();
  const t = content[language];
  const [ref, isVisible] = useScrollReveal();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--accent)) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container-custom relative z-10">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-5xl font-display font-bold text-cinematic mb-6 text-center">
            {t.services.title}
          </h2>

          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
              <p className="text-lg italic text-accent font-display max-w-3xl">
                "{t.services.microcopy}"
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {t.services.items.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <Card
                  key={index}
                  className="p-8 hover-lift bg-card/80 backdrop-blur-sm border-border group transition-all hover:border-accent/50 relative overflow-hidden"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Animated Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      {/* Service Number */}
                      <div className="text-6xl font-display font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                        {service.number}
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-body text-foreground/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              variant="cinematic"
              onClick={scrollToContact}
              className="px-8 py-6 text-lg"
            >
              {t.services.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
