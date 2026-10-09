import {Dialog, Transition} from '@headlessui/react';
import {Bars3BottomRightIcon, LanguageIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';

import {useLanguage} from '../../context/LanguageContext';
import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = useMemo(() => [SectionId.Hero, SectionId.Resume, SectionId.Portfolio, SectionId.Contact], []);

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
    </>
  );
});

const DesktopNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const {language, toggleLanguage, t} = useLanguage();
    const baseClass =
      '-m-1.5 p-1.5 rounded-md font-bold hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100';
    const activeClass = classNames(baseClass, 'text-orange-500');
    const inactiveClass = classNames(baseClass, 'text-neutral-100');
    return (
      <header className="fixed top-0 z-50 hidden w-full bg-neutral-900/60 p-4 backdrop-blur-md sm:block" id={headerID}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4">
          <nav className="flex items-center gap-x-8">
            {navSections.map(section => (
              <NavItem
                activeClass={activeClass}
                current={section === currentSection}
                inactiveClass={inactiveClass}
                key={section}
                label={t.nav[section]}
                section={section}
              />
            ))}
          </nav>

          <button
            aria-label="تغییر زبان / Change Language"
            className="flex items-center gap-x-2 rounded-full border border-neutral-700 bg-neutral-800/80 px-3.5 py-1.5 text-xs font-bold text-neutral-200 transition-all hover:border-orange-500 hover:text-white hover:shadow-sm"
            onClick={toggleLanguage}
            type="button">
            <LanguageIcon className="h-4 w-4 text-orange-400" />
            <span>{language === 'en' ? 'فارسی' : 'English'}</span>
          </button>
        </div>
      </header>
    );
  },
);

const MobileNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const {language, toggleLanguage, t} = useLanguage();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);

    const baseClass =
      'p-2 rounded-md transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500';
    const activeClass = classNames(baseClass, 'bg-neutral-900 text-white font-bold');
    const inactiveClass = classNames(baseClass, 'text-neutral-200 font-medium');
    return (
      <>
        <div className="fixed right-3 top-3 z-40 flex items-center gap-x-2 sm:hidden">
          <button
            aria-label="تغییر زبان"
            className="flex items-center gap-x-1.5 rounded-lg border border-neutral-700 bg-neutral-900/90 px-3 py-2 text-xs font-bold text-neutral-200 shadow-md backdrop-blur"
            onClick={toggleLanguage}
            type="button">
            <LanguageIcon className="h-4 w-4 text-orange-400" />
            <span>{language === 'en' ? 'فا' : 'EN'}</span>
          </button>
          <button
            aria-label="Menu Button"
            className="rounded-lg bg-orange-500 p-2 text-white shadow-md hover:bg-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            onClick={toggleOpen}
            type="button">
            <Bars3BottomRightIcon className="h-6 w-6 text-white" />
            <span className="sr-only">Open sidebar</span>
          </button>
        </div>

        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-50 flex sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-stone-900/80 backdrop-blur-sm" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <div className="relative w-4/5 max-w-xs bg-neutral-900 p-6 shadow-xl">
                <div className="mb-6 flex items-center justify-between border-b border-neutral-800 pb-4">
                  <span className="text-sm font-bold text-neutral-200">
                    {language === 'fa' ? 'منو و دسترسی' : 'Navigation'}
                  </span>
                  <button
                    className="flex items-center gap-x-1.5 rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 text-xs font-bold text-orange-400"
                    onClick={() => {
                      toggleLanguage();
                      toggleOpen();
                    }}
                    type="button">
                    <LanguageIcon className="h-3.5 w-3.5" />
                    <span>{language === 'en' ? 'فارسی' : 'English'}</span>
                  </button>
                </div>
                <nav className="flex flex-col gap-y-2">
                  {navSections.map(section => (
                    <NavItem
                      activeClass={activeClass}
                      current={section === currentSection}
                      inactiveClass={inactiveClass}
                      key={section}
                      label={t.nav[section]}
                      onClick={toggleOpen}
                      section={section}
                    />
                  ))}
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
    );
  },
);

const NavItem: FC<{
  section: string;
  label: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
}> = memo(({section, label, current, inactiveClass, activeClass, onClick}) => {
  return (
    <Link
      className={classNames(current ? activeClass : inactiveClass)}
      href={`#${section}`}
      key={section}
      onClick={onClick}>
      {label}
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;
