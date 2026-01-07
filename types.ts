export interface ServiceItem {
  title: string;
  features: string[];
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface PortfolioItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Basic text representation for now or svg path
}