export interface ServiceItem {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Digital';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  badgeText: string;
}

export interface AdvantagePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  metrics: { label: string; value: string }[];
}

export interface TechStackItem {
  name: string;
  category: string;
  description: string;
}

export interface NavRoute {
  label: string;
  href: string;
}
