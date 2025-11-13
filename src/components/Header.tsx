import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { content } from '@/data/content';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const t = content[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: t.nav.story, id: 'story' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.portfolio, id: 'portfolio' },
    { label: t.nav.contact, id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom py-4 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl md:text-2xl font-display font-bold hover-gold transition-all duration-300 hover:scale-105"
        >
          <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            VideoMaker
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-body hover-gold transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Theme & Language Toggles */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-accent/10 hover:text-accent transition-all duration-300 hover:scale-110"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-5 w-5 animate-fade-in" />
            ) : (
              <Moon className="h-5 w-5 animate-fade-in" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="hover:bg-accent/10 hover:text-accent transition-all duration-300 hover:scale-110"
            aria-label="Toggle language"
          >
            <Languages className="h-4 w-4" />
            <span className="ml-1 text-xs font-bold">{language.toUpperCase()}</span>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden hover:bg-accent/10 hover:text-accent transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <div className="container-custom py-6 flex flex-col gap-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-lg font-body hover-gold transition-all duration-300 py-2 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
