import { ServiceItem, AdvantagePillar, NavRoute } from '@/types';

export const NAV_ROUTES: NavRoute[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'home-construction',
    title: 'HOME CONSTRUCTION',
    category: 'Infrastructure',
    shortDesc: 'Custom, sustainable residential construction built for durability, modern living, and architectural precision.',
    fullDesc: 'We design and build contemporary residential estates and bespoke homes utilizing advanced structural engineering, sustainable materials, and integrated IoT-ready electrical systems.',
    iconName: 'Home',
    features: ['Custom Architectural Design', 'Green Building Materials', 'Smart Home Cabling & IoT Ready', 'Turnkey Project Execution'],
    badgeText: 'Physical Foundation'
  },
  {
    id: 'road-infrastructure',
    title: 'ROAD & INFRASTRUCTURE',
    category: 'Infrastructure',
    shortDesc: 'Modern civil & road engineering, asphalt paving, drainage systems, and city transit access paths.',
    fullDesc: 'Comprehensive civil infrastructure development focusing on resilient roadways, highway connectors, stormwater drainage systems, and site excavation built to last generations.',
    iconName: 'Building2',
    features: ['High-Durability Asphalt & Concrete', 'Stormwater & Drainage Networks', 'Heavy Excavation & Site Prep', 'Urban Traffic Infrastructure'],
    badgeText: 'Civil Engineering'
  },
  {
    id: 'civil-structures',
    title: 'CIVIL & STRUCTURES',
    category: 'Infrastructure',
    shortDesc: 'Commercial development, structural reinforcement, concrete works, and heavy facility builds.',
    fullDesc: 'Precision structural framing and commercial facility construction utilizing steel framing, reinforced concrete, and modern seismic load standards.',
    iconName: 'Layers',
    features: ['Reinforced Concrete Frameworks', 'Commercial Real Estate Builds', 'Structural Retrofitting & Audits', 'Industrial Warehouses & Hubs'],
    badgeText: 'Structural Dev'
  },
  {
    id: 'web-app-dev',
    title: 'WEB & APPLICATION DEVELOPMENT',
    category: 'Digital',
    shortDesc: 'Enterprise web application development, custom business websites, and scalable full-stack software solutions.',
    fullDesc: 'Architecting enterprise web applications, responsive websites, 3D interactive web experiences (Three.js), CMS systems, and scalable digital platforms (e.g. eacyclic full-stack e-commerce & logistics platform). Built with HTML5, CSS3, JavaScript, TypeScript, Three.js, Next.js, NestJS, Node.js, Express, WordPress, Shopify, Laravel, React 19, Python DRF, and Cloud Infrastructure.',
    iconName: 'Code2',
    features: [
      'Modern Frontend & 3D Interactive Web (HTML5, CSS3, JS/TS, Three.js, React 19, Next.js)',
      'Full-Stack Backend Services (NestJS, Node.js, Express, Laravel, Python DRF)',
      'E-Commerce & CMS Systems (Shopify, WordPress, Custom Platforms e.g. eacyclic)',
      'RESTful & GraphQL API Architecture, Cloud & Token Auth'
    ],
    badgeText: 'Digital Engineering'
  },
  {
    id: 'mobile-app-dev',
    title: 'MOBILE APPLICATION DEVELOPMENT',
    category: 'Digital',
    shortDesc: 'Native & cross-platform iOS and Android mobile app development with real-time cloud backend sync.',
    fullDesc: 'Designing and deploying high-performance mobile applications for iOS and Android platforms. Built with React Native and native mobile frameworks integrated with cloud backend APIs, push notifications, offline storage, and secure payment gateway integrations.',
    iconName: 'Smartphone',
    features: [
      'Cross-Platform iOS & Android Mobile Apps (React Native)',
      'Real-Time Cloud Sync & Offline Support',
      'Push Notifications & User Auth Integration',
      'App Store & Google Play Store Publishing'
    ],
    badgeText: 'Mobile Stack'
  },
  {
    id: 'seo-social-marketing',
    title: 'SEO & SOCIAL MEDIA MANAGEMENT',
    category: 'Digital',
    shortDesc: 'Search engine optimization (SEO), digital marketing campaigns, brand strategy, and active social media management.',
    fullDesc: 'Boosting brand visibility, organic search engine rankings, and user engagement across India and GCC markets. We execute comprehensive technical SEO audits, keyword ranking strategies, content creation, social media account management, and performance analytics.',
    iconName: 'TrendingUp',
    features: [
      'Technical SEO & Organic Keyword Ranking',
      'Active Social Media Account Management (Instagram, LinkedIn, Facebook)',
      'Digital Brand Strategy & Content Creation',
      'Sitemap, Meta Tag Optimization & Analytics Reporting'
    ],
    badgeText: 'Growth & Reach'
  }
];

export const ADVANTAGE_PILLARS: AdvantagePillar[] = [
  {
    id: 'integrated-expertise',
    title: 'Integrated Expertise',
    subtitle: 'Single Partner Model',
    description: 'Eliminate friction between physical builders and technology providers. Mohis Developers delivers your physical building and digital IT ecosystem seamlessly under one unified team.',
    iconName: 'Cpu',
    metrics: [
      { label: 'Cross-Domain Synergy', value: '100%' },
      { label: 'Vendor Overhead Reduced', value: '40%' }
    ]
  },
  {
    id: 'modern-standards',
    title: 'Modern Standards',
    subtitle: '2026 Engineering Tech',
    description: 'We construct with 2026 eco-friendly green materials and develop software on cutting-edge, secure, cloud-native frameworks designed for instant scalability.',
    iconName: 'Zap',
    metrics: [
      { label: 'Energy Efficiency', value: 'A+ Rated' },
      { label: 'Uptime SLA', value: '99.99%' }
    ]
  },
  {
    id: 'agile-execution',
    title: 'Agile Execution',
    subtitle: 'Startup Velocity',
    description: 'Fast-track your timeline with our agile delivery sprints, transparent live project tracking dashboards, and proactive milestone updates.',
    iconName: 'Compass',
    metrics: [
      { label: 'On-Time Delivery Rate', value: '98%' },
      { label: 'Client Satisfaction', value: '5.0 ★' }
    ]
  }
];

export const STATS_DATA = [
  { value: '$45M+', label: 'Infrastructure Value Delivered' },
  { value: '120+', label: 'Projects Completed' },
  { value: '99.99%', label: 'Digital System Uptime' },
  { value: '2026', label: 'Tech & Civil Standards' }
];

import sreenivasanImg from '@/assets/team/sreenivasan.jpeg';
import musthafaImg from '@/assets/team/musthafa.jpeg';

export const TEAM_MEMBERS = [
  {
    id: 'latheef',
    name: 'Latheef',
    role: 'Chairman',
    badge: 'Executive Governance',
    experience: '18+ Yrs Vision',
    iconName: 'Award',
    bio: 'Providing executive governance, strategic vision, joint-venture civil infrastructure initiatives, and corporate expansion for Mohis Developers.',
    avatarLetter: 'L',
    avatarUrl: '',
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      email: 'mailto:latheef@mohisdevelopers.com',
      phone: 'tel:+919876543210'
    }
  },
  {
    id: 'musthafa',
    name: 'Musthafa',
    role: 'Managing Director (MD)',
    badge: 'Executive Leadership',
    experience: '22+ Yrs Leadership',
    iconName: 'Briefcase',
    bio: 'Directing operational management, financial stewardship, and institutional partnerships across physical & digital portfolio domains.',
    avatarLetter: 'M',
    avatarUrl: musthafaImg,
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      email: 'mailto:musthafa@mohisdevelopers.com',
      phone: 'tel:+919876543210'
    }
  },
  {
    id: 'sreenivasan',
    name: 'Sreenivasan',
    role: 'General Manager (GM)',
    badge: 'Operations & Execution',
    experience: '15+ Yrs Operations',
    iconName: 'ShieldCheck',
    bio: 'Overseeing daily civil site execution, quality assurance protocols, structural safety standards, and project operations.',
    avatarLetter: 'S',
    avatarUrl: sreenivasanImg,
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      email: 'mailto:sreenivasan@mohisdevelopers.com',
      phone: 'tel:+919745257040'
    }
  },
  {
    id: 'risvana',
    name: 'Risvana',
    role: 'Marketing Manager',
    badge: 'Growth & Strategy',
    experience: '8+ Yrs Brand Strategy',
    iconName: 'TrendingUp',
    bio: 'Leading brand positioning, digital marketing campaigns, SEO strategy, and client relationship expansion across India and GCC.',
    avatarLetter: 'R',
    avatarUrl: '',
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      email: 'mailto:risvana@mohisdevelopers.com',
      phone: 'tel:+919876543210'
    }
  }
];

export const COMPANY_SOCIALS = [
  { name: 'LinkedIn', href: 'https://linkedin.com', iconName: 'Linkedin' },
  { name: 'Twitter / X', href: 'https://x.com', iconName: 'Twitter' },
  { name: 'Instagram', href: 'https://instagram.com', iconName: 'Instagram' },
  { name: 'Facebook', href: 'https://facebook.com', iconName: 'Facebook' },
  { name: 'YouTube', href: 'https://youtube.com', iconName: 'Youtube' },
];

