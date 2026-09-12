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

export interface TeamSocials {
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  email?: string;
  phone?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  bio: string;
  experience: string;
  avatarLetter: string;
  avatarUrl: string;
  socials: TeamSocials;
}

export interface SocialChannel {
  name: string;
  href: string;
  iconName: string;
}
