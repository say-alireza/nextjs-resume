import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
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
  title: 'Alireza Rahimpanah - Frontend Developer',
  description: "Frontend developer specialized in React, Next.js, Tailwind, and Bootstrap.",
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

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Alireza Rahimpanah.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Frontend developer with 2+ years of experience in HTML, CSS, JavaScript, and TypeScript. Skilled in building responsive UIs with <strong className="text-stone-100">React</strong>, <strong className="text-stone-100">Next.js</strong>, <strong className="text-stone-100">Bootstrap</strong>, and <strong className="text-stone-100">Tailwind CSS</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Focused on clean code, efficient design, and delivering user-friendly web applications.
      </p>
    </>
  ),
  actions: [
    {
      href: '/Alireza-Rahimpanah-main.pdf',
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
  description: `Frontend developer skilled in React, Next.js, Tailwind, and Bootstrap. Over 2 years of experience building responsive and accessible web apps. Eager to learn and solve problems efficiently.`,
  aboutItems: [
    {label: 'Location', text: 'mashhad, South Khorasan, Iran', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Iranian', Icon: FlagIcon},
    {label: 'Interests', text: 'Frontend Development, UI/UX, Learning New Tech', Icon: SparklesIcon},
    {label: 'Study', text: 'BSc Computer Engineering, University of Birjand', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Frontend Developer Intern at Jahad-e Daneshgahi', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {name: 'JavaScript', level: 8},
      {name: 'TypeScript', level: 7},
      {name: 'Python', level: 5},
    ],
  },
  {
    name: 'Frontend Frameworks',
    skills: [
      {name: 'React', level: 8},
      {name: 'Next.js', level: 7},
      {name: 'Bootstrap', level: 8},
      {name: 'Tailwind CSS', level: 7},
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      {name: 'Git', level: 7},
      {name: 'REST APIs', level: 7},
      {name: 'Jira', level: 5},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'game hub',
    description: 'a store to sell games using react',
    url: 'https://github.com/say-alireza/gamehub-react', // لینک GitHub پروژه
    image: require('../images/portfolio/portfolio-1.jpg'),
  },
  {
    title: 'shopping pannel', 
    description: 'a shopping panel built with React and Bootstrap',
    url: 'https://github.com/say-alireza/bootstrap-project-shopping-pannel', // لینک GitHub پروژه
    image: require('../images/portfolio/portfolio-2.jpg'),
  },
  {
    title: 'trading bot panel',
    description: 'a trading bot panel built with bootstrap and Django',
    url: 'https://github.com/say-alireza/trade-bot-pannel-front-end', // لینک GitHub پروژه
    image: require('../images/portfolio/portfolio-3.jpg'),
  },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: require('../images/portfolio/portfolio-4.jpg'),
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: require('../images/portfolio/portfolio-5.jpg'),
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: require('../images/portfolio/portfolio-6.jpg'),
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: require('../images/portfolio/portfolio-7.jpg'),
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: require('../images/portfolio/portfolio-8.jpg'),
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: require('../images/portfolio/portfolio-9.jpg'),
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: require('../images/portfolio/portfolio-10.jpg'),
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: require('../images/portfolio/portfolio-11.jpg'),
  // },
];

/**
 * Education timeline
 */
export const education: TimelineItem[] = [
  {
    date: '2023 - Present',
    location: 'University of Birjand',
    title: 'BSc in Computer Engineering',
    content: <p>Currently studying computer engineering with a focus on software development and frontend technologies.</p>,
  },
];

/**
 * Experience timeline
 */
export const experience: TimelineItem[] = [
  {
    date: 'Dec 2023 - Aug 2024',
    location: 'Jahad-e Daneshgahi, Birjand',
    title: 'Frontend Developer Intern',
    content: (
      <p>
        Developed product pages using Bootstrap and JavaScript, resolved responsive layout issues, built React interfaces consuming REST APIs, learned Git and Jira, and contributed to team projects.
      </p>
    ),
  },
  {
    date: 'Sep 2024 - Jan 2025',
    location: 'Iran',
    title: 'Team Project: Trade Bot Panel',
    content: (
      <p>
        Collaborated with backend developers to implement Django functionality, including form handling, routing, and API endpoints, while contributing frontend interface improvements and documentation.
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
      name: 'John Doe',
      text: 'Alireza is a dedicated developer who delivers quality work on time.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out for collaborations or job opportunities.',
  items: [
    {
      type: ContactType.Email,
      text: 'a.rahimpanah71@gmail.com',
      href: 'mailto:a.rahimpanah71@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Birjand, South Khorasan, Iran',
      href: 'https://www.google.com/maps/place/Birjand',
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
];
