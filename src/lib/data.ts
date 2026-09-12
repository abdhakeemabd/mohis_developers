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
    id: 'it-solutions',
    title: 'WEB & APPLICATION DEVELOPMENT',
    category: 'Digital',
    shortDesc: 'Enterprise web application development, custom websites, SEO, Social Media Management, and full-stack software solutions.',
    fullDesc: 'Architecting enterprise web applications, full-stack platforms, and high-performance digital solutions (e.g. eacyclic full-stack e-commerce & logistics management platform). We build scalable systems using modern tech stacks (React 19, Vite, Django REST Framework, Python, PostgreSQL, Tailwind CSS) while amplifying reach via search engine optimization (SEO) and social media management.',
    iconName: 'Code2',
    features: [
      'Web Application Development (React 19, Vite, Django DRF)',
      'Website Development (e.g. eacyclic e-commerce platform)',
      'SEO & Search Engine Optimization',
      'Social Media Management & Digital Marketing',
      'Full-Stack E-Commerce & Business Dashboards'
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

export const TEAM_MEMBERS = [
  {
    id: 'latheef',
    name: 'Latheef',
    role: 'Managing Director (MD)',
    badge: 'Executive Board',
    experience: '18+ Yrs Vision',
    iconName: 'Briefcase',
    bio: 'Directing strategic vision, joint-venture civil infrastructure initiatives, and corporate expansion for Mohis Developers.',
    avatarLetter: 'L',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
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
    role: 'Chairman',
    badge: 'Executive Governance',
    experience: '22+ Yrs Governance',
    iconName: 'Award',
    bio: 'Providing executive governance, financial stewardship, and institutional partnerships across physical & digital portfolio domains.',
    avatarLetter: 'M',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
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
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
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
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
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

