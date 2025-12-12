import { ReactNode } from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Metric {
  value: string;
  description: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
  stats: { label: string; value: string }[];
}