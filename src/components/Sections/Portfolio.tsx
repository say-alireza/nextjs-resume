import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {useLanguage} from '../../context/LanguageContext';
import {SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const {t} = useLanguage();
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">{t.portfolioTitle}</h2>
        <div className="w-full columns-2 md:columns-3 lg:columns-4">
          {t.portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:opacity-95': !mobile},
        showOverlay ? 'opacity-95' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank">
      <div className="relative flex h-full w-full flex-col items-center justify-center p-4 text-center">
        <div className="flex w-full flex-col items-center justify-center gap-y-2 overflow-hidden">
          <h2 className="text-center font-bold text-white opacity-100 text-sm sm:text-base leading-snug">{title}</h2>
          <p className="line-clamp-4 text-xs text-neutral-200 opacity-100 sm:text-sm leading-relaxed max-w-xs">{description}</p>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-2 right-2 h-4 w-4 shrink-0 text-white/80 sm:bottom-2.5 sm:right-2.5 rtl:right-auto rtl:left-2 sm:rtl:left-2.5" />
      </div>
    </a>
  );
});

ItemOverlay.displayName = 'ItemOverlay';
