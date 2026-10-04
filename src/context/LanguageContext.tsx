import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import React, {createContext, ReactNode, useContext, useEffect, useMemo, useState} from 'react';

import {
  aboutData,
  contact,
  education,
  experience,
  heroData,
  homePageMeta,
  portfolioItems,
  SectionId,
  skills,
} from '../data/data';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  TimelineItem,
} from '../data/dataDef';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export type Language = 'en' | 'fa';

// --- Persian Translated Datasets (conforming to persian-typography & ZWNJ standard) ---

export const homePageMetaFa: HomepageMeta = {
  title: 'علیرضا رحیم‌پناه — توسعه‌دهنده وب و فرانت‌اند',
  description: 'رزومه و نمونه‌کارهای علیرضا رحیم‌پناه، توسعه‌دهنده فرانت‌اند و فول‌استک مسلط به React، Next.js، TypeScript و Django.',
};

export const heroDataFa: Hero = {
  imageSrc: heroData.imageSrc,
  name: 'علیرضا رحیم‌پناه',
  description: (
    <div className="flex flex-col gap-y-2 text-center max-w-xl">
      <p className="text-base text-gray-100 sm:text-lg leading-relaxed font-medium">
        سلام، علیرضام؛ توسعه‌دهنده فرانت‌اند ساکن مشهد.
      </p>
      <p className="text-sm text-gray-300 sm:text-base leading-relaxed">
        تمرکزم روی وب مدرن، اکوسیستم جاوااسکریپت و ساخت رابط‌های کاربری تمیزه؛ از پنل‌های مدیریتی تا پروژه‌های متن‌باز و بات‌های کاربردی تلگرام.
      </p>
      <p className="text-xs text-orange-400 sm:text-sm font-medium pt-1">
        روتین خارج از کد: بوکس • بدنسازی • فیلم و سریال • موزیک
      </p>
    </div>
  ),
  actions: [
    {
      href: `${basePath}/AlirezaRahimpanah-main.pdf`,
      text: 'دریافت رزومه',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'تماس با من',
      primary: false,
    },
  ],
};

export const aboutDataFa: About = {
  profileImageSrc: aboutData.profileImageSrc,
  description:
    'توسعه‌دهنده فرانت‌اند ساکن مشهد. بیشتر وقتم با کد زدن می‌گذره، اما توی اوقات فراغت بوکس و بدنسازی، فیلم و سریال و موزیک روتین ثابتمه و توی وقت آزادم هم طراحی سایت و پروژه‌های وب انجام می‌دم.',
  aboutItems: [
    {label: 'موقعیت', text: 'مشهد، ایران', Icon: MapIcon},
    {label: 'فعالیت', text: 'توسعه فرانت‌اند و طراحی وب', Icon: SparklesIcon},
    {label: 'تحصیلات', text: 'مهندسی کامپیوتر — دانشگاه بیرجند', Icon: AcademicCapIcon},
    {label: 'علاقه‌مندی‌ها', text: 'بوکس • بدنسازی • فیلم و سریال • موزیک', Icon: SparklesIcon},
  ],
};

export const skillsFa: SkillGroup[] = [
  {
    name: 'فرانت‌اند و رابط کاربری',
    skills: [
      {name: 'React', level: 8},
      {name: 'Next.js', level: 8},
      {name: 'TypeScript', level: 7},
      {name: 'Tailwind CSS', level: 9},
    ],
  },
  {
    name: 'بک‌اند و پایگاه داده',
    skills: [
      {name: 'Python', level: 8},
      {name: 'Django', level: 8},
      {name: 'PostgreSQL & SQLite', level: 7},
      {name: 'REST APIs & WebSockets', level: 8},
    ],
  },
  {
    name: 'ابزارها و توسعه',
    skills: [
      {name: 'Git & GitHub', level: 8},
      {name: 'Docker', level: 6},
      {name: 'Cloudflare / Edge', level: 8},
    ],
  },
];

export const portfolioItemsFa: PortfolioItem[] = [
  {
    title: 'باشگاه انگلیسی EPD',
    description: 'پلتفرم اختصاصی باشگاه گفت‌وگوی انگلیسی EPD با رزرواسیون صندلی و درگاه پرداخت.',
    url: 'https://epdcommunity.ir/',
    image: require('../images/portfolio/epd.jpg'),
  },
  {
    title: 'فروشگاه فایل آروین‌گران',
    description: 'پلتفرم فروشگاهی و مارکت‌پلیس دانلود آنلاین فایل‌ها، دوره‌ها و جزوات تخصصی.',
    url: 'http://files.arvingaran.com/',
    image: require('../images/portfolio/arvingaran.jpg'),
  },
  {
    title: 'پیام‌رسان شبکه محلی (LAN Chat)',
    description: 'اپلیکیشن متن‌باز چت بلادرنگ شبکه محلی با Next.js، Django و WebSockets.',
    url: 'https://github.com/say-alireza/local-chat-app',
    image: require('../images/portfolio/localchat.jpg'),
  },
  {
    title: 'وب‌سایت رستوران Wee',
    description: 'طراحی اختصاصی وب‌سایت معرفی و منوی آنلاین رستوران.',
    url: 'https://say-alireza.github.io/Wee/',
    image: require('../images/portfolio/wee.jpg'),
  },
  {
    title: 'ربات تلگرام گیف فارسی (@persiangifs_bot)',
    description: 'ربات تلگرامی جستجوی اینلاین گیف با دسته‌بندی و عبارات فارسی.',
    url: 'https://t.me/persiangifs_bot',
    image: require('../images/portfolio/persiangifs.jpg'),
  },
  {
    title: 'پنل مدیریت ربات ترید',
    description: 'داشبورد مدیریت و پایش استراتژی‌های معاملاتی با Django و Bootstrap.',
    url: 'https://github.com/say-alireza/trade-bot-pannel-front-end',
    image: require('../images/portfolio/portfolio-3.jpg'),
  },
  {
    title: 'پلتفرم Game Hub',
    description: 'آرشیو و فروشگاه بازی‌های ویدیویی پیاده‌سازی شده با React.',
    url: 'https://github.com/say-alireza/gamehub-react',
    image: require('../images/portfolio/portfolio-1.jpg'),
  },
];

export const educationFa: TimelineItem[] = [
  {
    date: '۱۴۰۲ — اکنون',
    location: 'دانشگاه بیرجند',
    title: 'کارشناسی مهندسی کامپیوتر',
    content: null,
  },
];

export const experienceFa: TimelineItem[] = [
  {
    date: 'اکنون',
    location: 'دورکاری / ریموت',
    title: 'توسعه‌دهنده فریلنسر وب',
    content: (
      <p>
        طراحی و اجرای پلتفرم‌های وب اختصاصی، داشبوردهای مدیریتی، ابزارهای اتوماسیون و ادغام‌های بلادرنگ با Next.js، React و Django برای مشتریان مختلف.
      </p>
    ),
  },
  {
    date: 'آذر ۱۴۰۲ — مرداد ۱۴۰۳',
    location: 'جهاد دانشگاهی بیرجند',
    title: 'کارآموز توسعه فرانت‌اند',
    content: (
      <p>
        توسعه رابط‌های کاربری با جاوااسکریپت و Bootstrap زیر نظر مهندس مهاجر (مسئول IT جهاد دانشگاهی).
      </p>
    ),
  },
];

export const contactFa: ContactSection = {
  headerText: 'راه‌های ارتباطی',
  description: 'برای همکاری در پروژه‌های فریلنسری، توسعه وب‌اپلیکیشن‌های اختصاصی یا گفت‌وگو درباره ایده‌ها پیام دهید.',
  items: [
    {
      type: ContactType.Email,
      text: 'a.rahimpanah71@gmail.com',
      href: 'mailto:a.rahimpanah71@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'مشهد، ایران',
      href: 'https://www.google.com/maps/place/Mashhad',
    },
  ],
};

export interface Translations {
  meta: HomepageMeta;
  nav: Record<SectionId, string>;
  heroData: Hero;
  aboutTitle: string;
  aboutData: About;
  resumeTitles: {
    education: string;
    work: string;
    skills: string;
  };
  skills: SkillGroup[];
  education: TimelineItem[];
  experience: TimelineItem[];
  portfolioTitle: string;
  portfolioItems: PortfolioItem[];
  contact: ContactSection;
}

const navEn: Record<SectionId, string> = {
  [SectionId.About]: 'About',
  [SectionId.Resume]: 'Resume',
  [SectionId.Portfolio]: 'Portfolio',
  [SectionId.Contact]: 'Contact',
  [SectionId.Hero]: 'Home',
  [SectionId.Skills]: 'Skills',
  [SectionId.Stats]: 'Stats',
  [SectionId.Testimonials]: 'Testimonials',
};

const navFa: Record<SectionId, string> = {
  [SectionId.About]: 'درباره من',
  [SectionId.Resume]: 'سوابق و مهارت‌ها',
  [SectionId.Portfolio]: 'نمونه‌کارها',
  [SectionId.Contact]: 'ارتباط',
  [SectionId.Hero]: 'خانه',
  [SectionId.Skills]: 'مهارت‌ها',
  [SectionId.Stats]: 'آمار',
  [SectionId.Testimonials]: 'نظرات',
};

// English portfolio items directly from data.tsx
export const portfolioItemsEn: PortfolioItem[] = portfolioItems;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// eslint-disable-next-line react-memo/require-memo
export const LanguageProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('site_lang') as Language;
    if (saved === 'fa' || saved === 'en') {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('site_lang', lang);
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'fa' : 'en';
    setLanguage(next);
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
      if (language === 'fa') {
        document.documentElement.classList.add('font-persian');
      } else {
        document.documentElement.classList.remove('font-persian');
      }
    }
  }, [language]);

  const t = useMemo<Translations>(() => {
    if (language === 'fa') {
      return {
        meta: homePageMetaFa,
        nav: navFa,
        heroData: heroDataFa,
        aboutTitle: 'درباره من',
        aboutData: aboutDataFa,
        resumeTitles: {
          education: 'تحصیلات آکادمیک',
          work: 'سوابق و تجربیات کاری',
          skills: 'تخصص‌ها و مهارت‌ها',
        },
        skills: skillsFa,
        education: educationFa,
        experience: experienceFa,
        portfolioTitle: 'نمونه‌کارها و پروژه‌های برگزیده',
        portfolioItems: portfolioItemsFa,
        contact: contactFa,
      };
    }
    return {
      meta: homePageMeta,
      nav: navEn,
      heroData,
      aboutTitle: 'About me',
      aboutData,
      resumeTitles: {
        education: 'Education',
        work: 'Work',
        skills: 'Skills',
      },
      skills,
      education,
      experience,
      portfolioTitle: 'Check out some of my work',
      portfolioItems: portfolioItemsEn,
      contact,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={{language, toggleLanguage, setLanguage, t}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
