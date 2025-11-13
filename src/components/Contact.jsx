import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { content } from '@/data/content';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Mail, MessageCircle, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { language } = useLanguage();
  const t = content[language];
  const [ref, isVisible] = useScrollReveal();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: language === 'pt' ? 'Mensagem enviada!' : 'Message sent!',
      description: language === 'pt' 
        ? 'Entraremos em contato em breve.' 
        : 'We will get in touch soon.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      projectType: '',
      message: ''
    });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-5xl font-display font-bold text-cinematic mb-6 text-center">
            {t.contact.title}
          </h2>

          <p className="text-center text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">
            {t.contact.intro}
          </p>

          <p className="text-center text-lg italic text-accent mb-16 font-display">
            "{t.contact.microcopy}"
          </p>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 bg-card border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-sm font-body mb-2 block">
                    {t.contact.form.name}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    className="bg-background border-border"
                  />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-sm font-body mb-2 block">
                    {t.contact.form.email}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    className="bg-background border-border"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <Label htmlFor="projectType" className="text-sm font-body mb-2 block">
                    {t.contact.form.projectType}
                  </Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleChange('projectType', value)}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder={t.contact.form.projectType} />
                    </SelectTrigger>
                    <SelectContent>
                      {t.contact.form.projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-sm font-body mb-2 block">
                    {t.contact.form.message}
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    required
                    rows={6}
                    className="bg-background border-border resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all hover:scale-105"
                >
                  {t.contact.form.submit}
                </Button>
              </form>
            </Card>

            {/* Alternative Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold mb-6">
                {t.contact.alternatives.title}
              </h3>

              {/* Email */}
              <Card className="p-6 hover-lift bg-card border-border transition-all">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a 
                      href={`mailto:${t.contact.alternatives.email}`}
                      className="font-body hover-gold transition-colors"
                    >
                      {t.contact.alternatives.email}
                    </a>
                  </div>
                </div>
              </Card>

              {/* WhatsApp */}
              <Card className="p-6 hover-lift bg-card border-border transition-all">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                    <a 
                      href={`https://wa.me/${t.contact.alternatives.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body hover-gold transition-colors"
                    >
                      {t.contact.alternatives.whatsapp}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Instagram */}
              <Card className="p-6 hover-lift bg-card border-border transition-all">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Instagram className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Instagram</p>
                    <a 
                      href={`https://instagram.com/${t.contact.alternatives.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body hover-gold transition-colors"
                    >
                      {t.contact.alternatives.instagram}
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
