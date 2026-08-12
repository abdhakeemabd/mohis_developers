import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mohis Developers | Engineering Physical Foundations. Building Digital Futures.',
  description: 'A modern 2026 tech-first hybrid developer bridging civil infrastructure (Homes, Roads, Civil) and digital solutions (Software, IT Support).',
  keywords: ['Mohis Developers', 'Home Construction', 'Road Infrastructure', 'Civil Engineering', 'IT Solutions', 'Software Development', 'IT Support'],
  icons: {
    icon: '/fav.png',
    shortcut: '/favicon.png',
    apple: '/fav.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased text-navy bg-white selection:bg-gold selection:text-navy">
        {children}
      </body>
    </html>
  );
}
