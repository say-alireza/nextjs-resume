import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {useLanguage} from '../../context/LanguageContext';
import {SectionId} from '../../data/data';
import profilepic from '../../images/profilepic.jpg';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {t, language} = useLanguage();
  const {imageSrc, name, description, actions} = t.heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex min-h-screen w-full items-center justify-center py-20">
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10 max-w-screen-md px-4">
          <div className="flex flex-col items-center gap-y-5 rounded-2xl bg-gray-900/60 p-6 sm:p-8 text-center shadow-2xl backdrop-blur-md border border-neutral-700/40">
            {/* Profile Avatar */}
            <div className="relative h-28 w-28 sm:h-36 sm:w-36 overflow-hidden rounded-full border-4 border-orange-500 shadow-xl ring-4 ring-orange-500/20 shrink-0">
              <Image alt={name} className="h-full w-full object-cover" placeholder="blur" priority src={profilepic} />
            </div>

            <h1
              className={classNames(
                'font-bold text-white',
                language === 'fa' ? 'font-nastaliq text-5xl sm:text-7xl lg:text-8xl py-1 tracking-normal' : 'text-3xl sm:text-5xl lg:text-6xl',
              )}>
              {name}
            </h1>
            {description}
            <div className="flex gap-x-4 text-neutral-100 pt-1">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4 pt-2">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex items-center gap-x-2 rounded-full border-2 bg-none px-5 py-2.5 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base transition-colors',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  <span>{text}</span>
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            aria-label="Scroll down to Resume section"
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2 transition-transform hover:scale-110"
            href={`#${SectionId.Resume}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6 text-gray-900" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
