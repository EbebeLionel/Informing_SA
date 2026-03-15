import type { NavItem } from '../types/nav';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    sections: [
      {
        sectionLabel: 'Navigate',
        items: [
          { label: 'Our Purpose', href: '#purpose' },
          { label: 'Our Vision',  href: '#vision'  },
          { label: 'What We Do',  href: '#what-we-do' },
        ],
      },
      {
        sectionLabel: 'About this site',
        items: [
          {
            label: 'Overview',
            description: 'A platform dedicated to honest, grounded, Africa-focused discourse.',
          },
        ],
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
    sections: [
      {
        sectionLabel: 'Our People',
        items: [
          { label: 'Meet the Founders', href: '/about#founders' },
          { label: 'Contributors',      href: '/about#contributors' },
          { label: 'Contact Us',        href: '/about#contact' },
        ],
      },
    ],
  },
  {
    label: 'Podcast',
    href: '/podcast',
    sections: [
      {
        sectionLabel: 'ChiLLy Talks',
        items: [
          { label: 'About the Show', href: '/podcast' },
          { label: 'Episodes',       href: '/podcast#episodes' },
          { label: 'Subscribe',      href: '/podcast#subscribe' },
        ],
      },
      {
        sectionLabel: 'Two Formats',
        items: [
          {
            label: 'ChiLL & ChiLLY',
            description: 'Expert conversations + controversial topics — on love, power, and everything in between.',
          },
        ],
      },
    ],
  },
];