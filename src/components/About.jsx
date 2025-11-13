import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { content } from '@/data/content';
import aboutImage from '@/assets/about-camera.jpg';
import { Card } from '@/components/ui/card';

export const About = () => {
  const { language } = useLanguage();
  const t = content[language];
  const [ref, isVisible] = useScrollReveal();

  const items = [
    { label: t.about.mission.label, text: t.about.mission.text },
    { label: t.about.vision.label, text: t.about.vision.text },
    { label: t.about.differential.label, text: t.about.differential.text }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-5xl font-display font-bold text-cinematic mb-6 text-center">
            {t.about.title}
          </h2>

          <p className="text-center text-lg italic text-accent mb-16 font-display">
            "{t.about.microcopy}"
          </p>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img
                src={aboutImage}
                alt="Professional cinema camera"
                className="w-full h-auto rounded-lg shadow-2xl hover-lift"
              />
            </div>

            {/* Mission, Vision, Differential Cards */}
            <div className="order-1 md:order-2 space-y-6">
              {items.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover-lift bg-card border-border transition-all"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-display font-bold text-accent mb-3">
                    {item.label}
                  </h3>
                  <p className="text-body text-foreground/80 leading-relaxed">
                    {item.text}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
