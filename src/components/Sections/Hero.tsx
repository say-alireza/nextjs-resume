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
  const {t} = useLanguage();
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
        <div className="z-10 max-w-screen-md px-4 sm:px-6">
          <div className="flex flex-col items-center gap-y-7 sm:gap-y-9 rounded-3xl bg-gray-900/70 p-8 sm:p-12 text-center shadow-2xl backdrop-blur-md border border-neutral-700/50">
            {/* Profile Avatar & Name */}
            <div className="flex flex-col items-center gap-y-2.5">
              <div className="relative h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-full border-2 border-white/20 shadow-2xl ring-1 ring-white/10 shrink-0">
                <Image alt={name} className="h-full w-full object-cover" placeholder="blur" priority src={profilepic} />
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">{name}</h1>
            </div>

            <div className="w-full flex justify-center">{description}</div>

            <div className="flex gap-x-6 text-neutral-200 pt-1 sm:pt-2">
              <Socials />
            </div>

            <div className="flex w-full justify-center gap-x-5 pt-2 sm:pt-3">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex items-center gap-x-2.5 rounded-full border-2 bg-none px-6 py-2.5 sm:px-7 sm:py-3 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base transition-all hover:scale-105',
                    primary
                      ? 'border-orange-500 ring-orange-500 text-orange-400 hover:text-white'
                      : 'border-neutral-400 ring-neutral-400',
                  )}
                  href={href}
                  key={text}>
                  <span>{text}</span>
                  {Icon && <Icon className="h-5 w-5 sm:h-6 sm:w-6" />}
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
