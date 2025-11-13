import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { content } from '@/data/content';

export const Partners = () => {
  const { language } = useLanguage();
  const t = content[language];
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-cinematic mb-6 text-center">
            {t.partners.title}
          </h2>
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
              <p className="text-lg italic text-accent font-display max-w-3xl">
                "{t.partners.intro}"
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {t.partners.brands.map((brand, index) => (
              <div key={index} className="text-center group" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="h-24 flex items-center justify-center mb-4 bg-card rounded-lg border border-border hover-lift transition-all hover:border-accent/50">
                  <span className="text-2xl font-display font-bold group-hover:text-accent transition-colors">
                    {brand.name}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  {brand.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
