import React from 'react';
import { PenTool, MapPin, Cpu, Smile, FileText, Search } from 'lucide-react';
import { NavLink, Feature, Service, Metric, TeamMember, Testimonial } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PLATFORM', href: '#platform' },
  { label: 'SOLUTIONS', href: '#solutions' },
  { label: 'TESTIMONIALS', href: '#testimonials' },
  { label: 'CONNECT', href: '#connect' },
];

export const FEATURES: Feature[] = [
  {
    id: 'createit',
    title: 'CreateIT',
    description: "Compelling content creation that drives engagement and brand loyalty across all digital channels.",
    icon: <PenTool className="w-8 h-8 text-accent" />,
  },
  {
    id: 'locateit',
    title: 'LOCATEIT',
    description: "Hyper-local SEO and presence management to ensure your customers find you first, everywhere.",
    icon: <MapPin className="w-8 h-8 text-accent" />,
  },
  {
    id: 'aigentit',
    title: 'AIGENTIT',
    description: "Intelligent AI agents for 24/7 customer support, lead generation, and automated interactions.",
    icon: <Cpu className="w-8 h-8 text-accent" />,
  },
  {
    id: 'socialit',
    title: 'SOCIALIT',
    description: "Strategic social media management that builds community and amplifies your brand's voice.",
    icon: <Smile className="w-8 h-8 text-accent" />,
  },
  {
    id: 'scriptit',
    title: 'SCRIPTIT',
    description: "Persuasive copywriting and scriptwriting that turns casual browsers into committed buyers.",
    icon: <FileText className="w-8 h-8 text-accent" />,
  },
  {
    id: 'searchit',
    title: 'SEARCHIT',
    description: "Data-driven SEO and SEM strategies to dominate search results and maximize visibility.",
    icon: <Search className="w-8 h-8 text-accent" />,
  },
];

export const SERVICES: Service[] = [
  {
    id: 'social-media',
    title: 'SOCIAL MEDIA MANAGEMENT',
    description: "Posting isn't presence. We turn your content into real connection.",
    image: 'https://picsum.photos/id/1/400/300', 
  },
  {
    id: 'ui-ux',
    title: 'UI / UX DEVELOPMENT',
    description: "We craft interfaces that customers love to use, reducing friction and boosting conversion.",
    image: 'https://picsum.photos/id/2/400/300', 
  },
  {
    id: 'performance',
    title: 'PERFORMANCE MARKETING',
    description: "Good ads get clicks. Great ones drive growth. We build for the full funnel.",
    image: 'https://picsum.photos/id/3/400/300', 
  },
];

export const IMPACT_METRICS: Metric[] = [
  { value: '85%', description: 'Increase in organic traffic within the first 6 months.', category: 'GROWTH' },
  { value: '4.5x', description: 'Return on Ad Spend (ROAS) for e-commerce partners.', category: 'PERFORMANCE' },
  { value: '10M+', description: 'Total leads generated across all client campaigns.', category: 'SCALE' },
  { value: '95%', description: 'Client retention rate year over year.', category: 'TRUST' },
  { value: '150+', description: 'Brands successfully transformed digitally.', category: 'EXPERIENCE' },
  { value: '24/7', description: 'Real-time monitoring and reputation management.', category: 'SUPPORT' },
];

export const TEAM: TeamMember[] = [
  { name: 'ANGEL CHATURVEDI', role: 'Head of Design', image: 'https://picsum.photos/id/64/300/300' },
  { name: 'KIRAN MULCHANDA', role: 'Strategy Director', image: 'https://picsum.photos/id/65/300/300' },
  { name: 'CHARVAK HERAMB', role: 'Lead Developer', image: 'https://picsum.photos/id/66/300/300' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "ConvergenSEE changed the trajectory and success of my business, and I'm a lifelong user at this point.",
    name: "Alina Sharma",
    role: "Marketing Director",
    company: "Mahindra",
    image: "https://picsum.photos/id/44/400/600",
    stats: [
      { label: "Increase in traffic growth", value: "96%" },
      { label: "Revenue increase", value: "10X" },
      { label: "Increase in sales", value: "96%" },
    ]
  },
  {
    quote: "We slashed our CPA by half while doubling lead volume. The dashboard visibility is unlike anything else in the market.",
    name: "Marcus Thorne",
    role: "VP of Growth",
    company: "TechFlow",
    image: "https://picsum.photos/id/107/400/600",
    stats: [
      { label: "Cost Per Acquisition", value: "-50%" },
      { label: "Lead Volume", value: "2.5X" },
      { label: "ROI Improvement", value: "140%" },
    ]
  },
  {
    quote: "Local presence management was a nightmare until we switched. Now every location page ranks #1 in its city.",
    name: "Sarah Jenkins",
    role: "Head of Operations",
    company: "Urban Eat",
    image: "https://picsum.photos/id/338/400/600",
    stats: [
      { label: "Local Rankings", value: "#1" },
      { label: "Foot Traffic", value: "+45%" },
      { label: "GMB Views", value: "2M+" },
    ]
  }
];