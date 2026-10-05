/* eslint-disable simple-import-sort/imports */
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TelegramIcon from '../components/Icon/TelegramIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Alireza Rahimapanah | Frontend & Full-Stack Developer',
  description: 'Portfolio & Resume of Alireza Rahimapanah (علیرضا رحیماپناه) — Software Engineer and Frontend Developer specializing in React, Next.js, and TypeScript based in Mashhad.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Alireza Rahimpanah`,
  description: (
    <div className="flex flex-col gap-y-3 sm:gap-y-3.5 text-center max-w-xl">
      <p className="text-base text-gray-100 sm:text-lg leading-relaxed font-semibold">
        Hi, I'm Alireza; a Full-Stack Developer based in Mashhad.
      </p>
      <p className="text-sm text-gray-300 sm:text-base leading-relaxed">
        Focused on end-to-end web development — building robust backends with Python & Django alongside modern, responsive interfaces with React & Next.js; from web applications and dashboards to practical Telegram bots.
      </p>
      <p className="text-xs sm:text-sm text-neutral-400 font-normal pt-1">
        In my free time, I enjoy boxing, fitness, cinema, and music.
      </p>
    </div>
  ),
  actions: [
    {
      href: `${basePath}/AlirezaRahimpanah-main.pdf`,
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I build websites, management panels, internal tools, and real-time web applications for small businesses and individuals. As a full-stack developer, I combine backend efficiency with responsive frontend design to deliver complete web products.`,
  aboutItems: [
    {label: 'Location', text: 'Mashhad, Iran', Icon: MapIcon},
    {label: 'Status', text: 'Available for Freelance', Icon: SparklesIcon},
    {label: 'Nationality', text: 'Iranian', Icon: FlagIcon},
    {label: 'Interests', text: 'Full-Stack Web Apps, Real-time Systems, UI/UX', Icon: SparklesIcon},
    {label: 'Study', text: 'BSc Computer Engineering, University of Birjand', Icon: AcademicCapIcon},
    {label: 'Experience', text: '2+ Years in Web Development', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend & Database',
    skills: [
      {name: 'Python', level: 8},
      {name: 'Django', level: 8},
      {name: 'PostgreSQL', level: 7},
      {name: 'WebSockets', level: 7},
    ],
  },
  {
    name: 'Frontend Frameworks',
    skills: [
      {name: 'React', level: 8},
      {name: 'Next.js', level: 7},
      {name: 'TypeScript', level: 7},
      {name: 'JavaScript', level: 8},
    ],
  },
  {
    name: 'Tools & DevOps',
    skills: [
      {name: 'Docker', level: 6},
      {name: 'Git', level: 8},
      {name: 'REST APIs', level: 8},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'EPD Community',
    description: 'Weekly English discussion club web platform featuring session booking, seat management, and real-time Telegram integration.',
    url: 'https://epdcommunity.ir/',
    image: require('../images/portfolio/epd.jpg'),
  },
  {
    title: 'Arvingaran Files',
    description: 'Digital file store platform for browsing, purchasing, and downloading digital goods and resources.',
    url: 'http://files.arvingaran.com/',
    image: require('../images/portfolio/arvingaran.jpg'),
  },
  {
    title: 'LAN Chat Application',
    description: 'Open-source real-time local chat app built with Next.js, Django, and WebSockets.',
    url: 'https://github.com/say-alireza/local-chat-app',
    image: require('../images/portfolio/localchat.jpg'),
  },
  {
    title: 'Wee Restaurant',
    description: 'Custom restaurant website built for a client.',
    url: 'https://say-alireza.github.io/Wee/',
    image: require('../images/portfolio/wee.jpg'),
  },
  {
    title: 'Persian GIF Bot (@persiangifs_bot)',
    description: 'Inline Persian GIF search Telegram bot for fast, categorized search across chats.',
    url: 'https://t.me/persiangifs_bot',
    image: require('../images/portfolio/persiangifs.jpg'),
  },
  {
    title: 'Trading Bot Panel',
    description: 'Management panel built with Django, Bootstrap, and REST integration.',
    url: 'https://github.com/say-alireza/trade-bot-pannel-front-end',
    image: require('../images/portfolio/portfolio-3.jpg'),
  },
  {
    title: 'Game Hub',
    description: 'Game store platform built using React and modern frontend tools.',
    url: 'https://github.com/say-alireza/gamehub-react',
    image: require('../images/portfolio/portfolio-1.jpg'),
  },
];

/**
 * Education timeline
 */
export const education: TimelineItem[] = [
  {
    date: '2023 - Present',
    location: 'University of Birjand',
    title: 'BSc in Computer Engineering',
    content: null,
  },
];

/**
 * Experience timeline
 */
export const experience: TimelineItem[] = [
  {
    date: 'Present',
    location: 'Remote',
    title: 'Freelance Full-Stack Developer',
    content: (
      <p>
        Building custom web platforms, business dashboards, internal management tools, and API integrations for clients
        using Django, React, and Next.js.
      </p>
    ),
  },
  {
    date: 'Dec 2023 - Aug 2024',
    location: 'Jahad-e Daneshgahi, Birjand',
    title: 'Frontend Developer Intern',
    content: (
      <p>
        Built frontend user interfaces using JavaScript and Bootstrap under the supervision of Eng. Mohajer (Head of IT).
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Client Feedback',
      text: 'Alireza delivers reliable, high-quality web solutions and communicates efficiently throughout the development process.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'Available for freelance projects and web development. Both email and Telegram are open, though I respond fastest on Telegram.',
  items: [
    {
      type: ContactType.Telegram,
      text: '@say_alireza (fastest response)',
      href: 'https://t.me/say_alireza',
    },
    {
      type: ContactType.Email,
      text: 'a.rahimpanah71@gmail.com',
      href: 'mailto:a.rahimpanah71@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Mashhad, Iran',
      href: 'https://www.google.com/maps/place/Mashhad',
    },
  ],
};

/**
 * Social links
 */
export const socialLinks: Social[] = [
  {
    label: 'Github',
    Icon: GithubIcon,
    href: 'https://github.com/say-alireza',
  },
  {
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://linkedin.com/in/alireza-rahimpanah-b7010a301',
  },
  {
    label: 'Telegram',
    Icon: TelegramIcon,
    href: 'https://t.me/say_alirexa',
  },
];