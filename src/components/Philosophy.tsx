import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { content } from '@/data/content';
import { Card } from '@/components/ui/card';
import philosophyImage from '@/assets/philosophy-bg.jpg';

export const Philosophy = () => {
  const { language } = useLanguage();
  const t = content[language];
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${philosophyImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="container-custom relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-cinematic mb-6 text-center">{t.philosophy.title}</h2>
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
              <p className="text-lg italic text-accent font-display">"{t.philosophy.microcopy}"</p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto space-y-6 mb-16">
            {t.philosophy.intro.map((paragraph, index) => (
              <p key={index} className="text-lg text-body leading-relaxed text-foreground/90">{paragraph}</p>
            ))}
          </div>
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">{language === 'pt' ? 'Princípios' : 'Principles'}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.philosophy.principles.map((principle, index) => (
                <Card key={index} className="p-6 hover-lift bg-card/80 backdrop-blur-sm border-border" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="text-4xl font-display font-bold text-accent mb-4">{String(index + 1).padStart(2, '0')}</div>
                  <h4 className="text-lg font-display font-bold mb-3">{principle.title}</h4>
                  <p className="text-sm text-body text-foreground/80 leading-relaxed">{principle.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
