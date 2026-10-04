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
        <div className="w-full columns-1 gap-6 sm:columns-2 md:columns-3 lg:columns-3">
          {t.portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-xl border border-neutral-700/60 shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-[1.02]',
                  )}>
                  <Image alt={title} className="h-full w-full object-cover" placeholder="blur" src={image} />
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
        'absolute inset-0 h-full w-full bg-neutral-950/85 backdrop-blur-xs transition-all duration-300',
        {'opacity-0 hover:opacity-100': !mobile},
        showOverlay ? 'opacity-100' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank">
      <div className="relative flex h-full w-full flex-col items-center justify-center p-4 text-center">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <h2 className="text-sm font-extrabold text-white sm:text-base leading-snug">{title}</h2>
          <p className="line-clamp-4 text-xs font-medium text-neutral-300 leading-relaxed max-w-xs">{description}</p>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-2.5 right-2.5 h-4 w-4 shrink-0 text-orange-400 rtl:right-auto rtl:left-2.5" />
      </div>
    </a>
  );
});

ItemOverlay.displayName = 'ItemOverlay';
