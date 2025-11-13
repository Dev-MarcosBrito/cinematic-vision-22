import { Film } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { content } from '@/data/content';

export const Story = () => {
  const { language } = useLanguage();
  const t = content[language];
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="story" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-accent/5 blur-3xl" />

      <div className="container-custom relative z-10">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Title with Icon */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent" />
            <Film className="h-8 w-8 text-accent" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-cinematic text-center">
              {t.story.title}
            </h2>
            <Film className="h-8 w-8 text-accent" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent" />
          </div>

          {/* Story Content */}
          <div className="space-y-8">
            {t.story.text.map((paragraph, index) => (
              <div
                key={index}
                className="relative pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors duration-300"
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="absolute -left-2 top-2 w-3 h-3 rounded-full bg-accent" />
                <p className="text-lg md:text-xl text-body leading-relaxed text-foreground/90">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>

          {/* Microcopy */}
          <div className="mt-16 text-center">
            <div className="inline-block px-8 py-4 bg-accent/10 rounded-full border border-accent/20">
              <p className="text-lg italic text-accent font-display">
                "{t.story.microcopy}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
