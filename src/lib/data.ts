import { ServiceItem, AdvantagePillar, NavRoute } from '@/types';

export const NAV_ROUTES: NavRoute[] = [
  { label: 'Services', href: '#services' },
  { label: 'How We Work', href: '#why-mohis' },
  { label: 'Tech & Infra', href: '#tech-infra' },
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
    id: 'it-solutions',
    title: 'IT SOLUTIONS',
    category: 'Digital',
    shortDesc: 'Custom software, Web & Mobile apps, SEO, Digital Marketing, Social Media Ads, and Poster Designs.',
    fullDesc: 'Engineering enterprise software, web platforms, and growth engines. We build scalable digital products while driving brand visibility through targeted SEO, social media ad campaigns, performance marketing, and creative poster designs.',
    iconName: 'Code2',
    features: [
      'Full-Stack Web & Mobile Apps',
      'SEO & Performance Digital Marketing',
      'Social Media Ads Management (Meta / Google)',
      'Creative Branding & Poster Designs',
      'Cloud Architecture (AWS / GCP / Azure)'
    ],
    badgeText: 'Digital Future'
  },
  {
    id: 'it-support-digital',
    title: 'IT SUPPORT & DIGITAL',
    category: 'Digital',
    shortDesc: '24/7 technical support, digital infrastructure management, cybersecurity, and hardware deployment.',
    fullDesc: 'Managed IT services, network infrastructure setup (fiber optic, structured cabling), active cybersecurity monitoring, and round-the-clock technical operations support.',
    iconName: 'ShieldCheck',
    features: ['24/7 Managed IT Service Desk', 'Cybersecurity & Firewalls', 'Structured Cabling & Server Racks', 'Cloud Data Backup & Recovery'],
    badgeText: 'Managed Services'
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
