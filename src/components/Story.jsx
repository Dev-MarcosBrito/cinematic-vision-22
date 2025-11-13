import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { content } from '@/data/content';

export const Story = () => {
  const { language } = useLanguage();
  const t = content[language];
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="story" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-5xl font-display font-bold text-cinematic mb-12 text-center">
            {t.story.title}
          </h2>

          {/* Story Content */}
          <div className="space-y-8">
            {t.story.text.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-body leading-relaxed text-foreground/90"
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Microcopy */}
          <div className="mt-12 text-center">
            <p className="text-lg italic text-accent font-display">
              "{t.story.microcopy}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
