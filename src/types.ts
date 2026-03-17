import { LucideIcon, Shield, Zap, Award, CheckCircle2, Star, Users, Hammer, Building2, Home as HomeIcon, Ruler, Construction } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  longDescription: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Commercial' | 'Residential';
  location: string;
  service: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}
