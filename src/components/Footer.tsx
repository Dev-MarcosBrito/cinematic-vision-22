import { Instagram, Youtube, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';

export const Footer = () => {
  const { language } = useLanguage();
  const t = content[language];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/videomaker', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@videomaker', label: 'YouTube' },
    { icon: Mail, href: 'mailto:contato@videomaker.com', label: 'Email' }
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container-custom">
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}
                className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110">
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
        <div className="text-center space-y-2">
          <p className="text-sm font-body text-muted-foreground">{t.footer.copyright}</p>
          <p className="text-xs font-body text-muted-foreground">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};
