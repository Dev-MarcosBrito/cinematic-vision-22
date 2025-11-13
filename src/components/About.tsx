import { Target, Eye, Sparkles } from 'lucide-react';
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
    { 
      label: t.about.mission.label, 
      text: t.about.mission.text,
      icon: Target
    },
    { 
      label: t.about.vision.label, 
      text: t.about.vision.text,
      icon: Eye
    },
    { 
      label: t.about.differential.label, 
      text: t.about.differential.text,
      icon: Sparkles
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
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

          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
              <p className="text-lg italic text-accent font-display">
                "{t.about.microcopy}"
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image with Frame Effect */}
            <div className="order-2 md:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-gold/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Professional cinema camera"
                  className="w-full h-auto rounded-lg shadow-2xl hover-lift relative z-10"
                />
                {/* Film Strip Frame */}
                <div className="absolute -top-2 -left-2 -right-2 h-4 bg-accent/20 rounded-t-lg flex items-center justify-center gap-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-1 h-2 bg-accent rounded-full" />
                  ))}
                </div>
                <div className="absolute -bottom-2 -left-2 -right-2 h-4 bg-accent/20 rounded-b-lg flex items-center justify-center gap-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-1 h-2 bg-accent rounded-full" />
                  ))}
                </div>
              </div>
            </div>

            {/* Mission, Vision, Differential Cards */}
            <div className="order-1 md:order-2 space-y-6">
              {items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 hover-lift bg-card/80 backdrop-blur-sm border-border transition-all group hover:border-accent/50"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-accent mb-3">
                          {item.label}
                        </h3>
                        <p className="text-body text-foreground/80 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
