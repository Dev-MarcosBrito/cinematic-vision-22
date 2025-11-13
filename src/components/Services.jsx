import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { content } from '@/data/content';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Services = () => {
  const { language } = useLanguage();
  const t = content[language];
  const [ref, isVisible] = useScrollReveal();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
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

          <p className="text-center text-lg italic text-accent mb-16 font-display max-w-3xl mx-auto">
            "{t.services.microcopy}"
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {t.services.items.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover-lift bg-card border-border group transition-all"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Service Number */}
                <div className="text-6xl font-display font-bold text-accent/20 mb-4 group-hover:text-accent/40 transition-colors">
                  {service.number}
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-body text-foreground/80 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg transition-all hover:scale-105 hover:shadow-lg"
            >
              {t.services.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
