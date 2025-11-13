// Content types for the portfolio
export interface NavContent {
  story: string;
  about: string;
  services: string;
  portfolio: string;
  contact: string;
}

export interface HeroContent {
  headline: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  microcopy: string;
}

export interface StoryContent {
  title: string;
  text: string[];
  microcopy: string;
}

export interface AboutItemContent {
  label: string;
  text: string;
}

export interface AboutContent {
  title: string;
  mission: AboutItemContent;
  vision: AboutItemContent;
  differential: AboutItemContent;
  microcopy: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export interface ServicesContent {
  title: string;
  items: ServiceItem[];
  cta: string;
  microcopy: string;
}

export interface PortfolioProject {
  title: string;
  description: string;
  type: string;
}

export interface PortfolioContent {
  title: string;
  intro: string;
  projects: PortfolioProject[];
  cta: string;
}

export interface BrandPartner {
  name: string;
  tagline: string;
}

export interface PartnersContent {
  title: string;
  intro: string;
  brands: BrandPartner[];
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface TestimonialsContent {
  title: string;
  items: Testimonial[];
  microcopy: string;
}

export interface PhilosophyPrinciple {
  title: string;
  description: string;
}

export interface PhilosophyContent {
  title: string;
  intro: string[];
  principles: PhilosophyPrinciple[];
  microcopy: string;
}

export interface ContactForm {
  name: string;
  email: string;
  projectType: string;
  projectTypes: string[];
  message: string;
  submit: string;
}

export interface ContactAlternatives {
  title: string;
  email: string;
  whatsapp: string;
  instagram: string;
}

export interface ContactContent {
  title: string;
  intro: string;
  form: ContactForm;
  alternatives: ContactAlternatives;
  microcopy: string;
}

export interface FooterContent {
  copyright: string;
  rights: string;
}

export interface SiteContent {
  nav: NavContent;
  hero: HeroContent;
  story: StoryContent;
  about: AboutContent;
  services: ServicesContent;
  portfolio: PortfolioContent;
  partners: PartnersContent;
  testimonials: TestimonialsContent;
  philosophy: PhilosophyContent;
  contact: ContactContent;
  footer: FooterContent;
}

export interface Content {
  pt: SiteContent;
  en: SiteContent;
}

export type Language = 'pt' | 'en';
