import { Play, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { content } from '@/data/content';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';

export const Portfolio = () => {
  const { language } = useLanguage();
  const t = content[language];
  const [ref, isVisible] = useScrollReveal();

  const projectImages = [portfolio1, portfolio2, portfolio3, portfolio1, portfolio2, portfolio3];

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Title */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Play className="h-8 w-8 text-accent" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-cinematic text-center">
              {t.portfolio.title}
            </h2>
            <Play className="h-8 w-8 text-accent" />
          </div>

          <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
            {t.portfolio.intro}
          </p>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {t.portfolio.projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-lift bg-card border-border group transition-all cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={projectImages[index]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center">
                        <Play className="h-8 w-8 text-accent-foreground" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Type Badge */}
                  <Badge className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-accent-foreground border-0 font-semibold">
                    {project.type}
                  </Badge>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-accent transition-colors flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-body text-foreground/80 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg"
            >
              {t.portfolio.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
