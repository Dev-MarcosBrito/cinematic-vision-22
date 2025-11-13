import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { content } from '@/data/content';
import { Card } from '@/components/ui/card';

export const Testimonials = () => {
  const { language } = useLanguage();
  const t = content[language];
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-cinematic mb-6 text-center">{t.testimonials.title}</h2>
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
              <p className="text-lg italic text-accent font-display">"{t.testimonials.microcopy}"</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="p-8 hover-lift bg-card border-border transition-all" style={{ transitionDelay: `${index * 100}ms` }}>
                <Quote className="h-10 w-10 text-accent mb-6" />
                <p className="text-body text-foreground/90 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-display font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground font-body">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
