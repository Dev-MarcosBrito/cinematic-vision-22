import { useState } from 'react';
import { Mail, MessageCircle, Instagram, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { content } from '@/data/content';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { language } = useLanguage();
  const t = content[language];
  const [ref, isVisible] = useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', projectType: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: language === 'pt' ? 'Mensagem enviada!' : 'Message sent!', description: language === 'pt' ? 'Entraremos em contato em breve.' : 'We will get in touch soon.' });
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-cinematic mb-6 text-center">{t.contact.title}</h2>
          <p className="text-center text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">{t.contact.intro}</p>
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-accent/10 rounded-full border border-accent/20">
              <p className="text-lg italic text-accent font-display">"{t.contact.microcopy}"</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 bg-card border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div><Label htmlFor="name">{t.contact.form.name}</Label><Input id="name" type="text" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} required className="bg-background border-border" /></div>
                <div><Label htmlFor="email">{t.contact.form.email}</Label><Input id="email" type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} required className="bg-background border-border" /></div>
                <div><Label htmlFor="projectType">{t.contact.form.projectType}</Label><Select value={formData.projectType} onValueChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}><SelectTrigger className="bg-background border-border"><SelectValue placeholder={t.contact.form.projectType} /></SelectTrigger><SelectContent>{t.contact.form.projectTypes.map((type) => (<SelectItem key={type} value={type}>{type}</SelectItem>))}</SelectContent></Select></div>
                <div><Label htmlFor="message">{t.contact.form.message}</Label><Textarea id="message" value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} required rows={6} className="bg-background border-border resize-none" /></div>
                <Button type="submit" size="lg" variant="cinematic" className="w-full"><Send className="mr-2 h-5 w-5" />{t.contact.form.submit}</Button>
              </form>
            </Card>
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold mb-6">{t.contact.alternatives.title}</h3>
              <Card className="p-6 hover-lift bg-card border-border"><div className="flex items-center gap-4"><div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center"><Mail className="h-6 w-6 text-accent" /></div><div><p className="text-sm text-muted-foreground mb-1">Email</p><a href={`mailto:${t.contact.alternatives.email}`} className="font-body hover-gold transition-colors">{t.contact.alternatives.email}</a></div></div></Card>
              <Card className="p-6 hover-lift bg-card border-border"><div className="flex items-center gap-4"><div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center"><MessageCircle className="h-6 w-6 text-accent" /></div><div><p className="text-sm text-muted-foreground mb-1">WhatsApp</p><a href={`https://wa.me/${t.contact.alternatives.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="font-body hover-gold transition-colors">{t.contact.alternatives.whatsapp}</a></div></div></Card>
              <Card className="p-6 hover-lift bg-card border-border"><div className="flex items-center gap-4"><div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center"><Instagram className="h-6 w-6 text-accent" /></div><div><p className="text-sm text-muted-foreground mb-1">Instagram</p><a href={`https://instagram.com/${t.contact.alternatives.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="font-body hover-gold transition-colors">{t.contact.alternatives.instagram}</a></div></div></Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
