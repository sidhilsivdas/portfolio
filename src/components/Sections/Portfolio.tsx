import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {CSSProperties, FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-2xl font-bold text-white" data-reveal>
          Projects I've worked on
        </h2>
        <div className=" w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div
                className="break-inside-avoid pb-6"
                data-reveal="zoom"
                key={`${title}-${index}`}
                style={{'--i': index % 4} as CSSProperties}>
                <div className="project-card">
                  <div className="relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl">
                    <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                    <div className="project-caption pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-8">
                      <h3 className="text-xs font-bold text-white sm:text-sm">{title}</h3>
                    </div>
                    <ItemOverlay item={item} />
                  </div>
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
      if (!url) {
        // Nothing to open: just toggle the description
        event.preventDefault();
        setShowOverlay(!showOverlay);
      } else if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay, url],
  );

  return (
    <a
      className={classNames(
        'project-overlay absolute inset-0 h-full w-full bg-gray-900 transition-opacity duration-300',
        {'opacity-0 hover:opacity-90': !mobile},
        showOverlay ? 'is-open opacity-90' : 'opacity-0',
        {'cursor-default': !url},
      )}
      href={url ?? '#'}
      onClick={handleItemClick}
      ref={linkRef}
      rel="noreferrer"
      target="_blank">
      <div className="relative h-full w-full p-4">
        <div className="project-overlay__content flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
        {url && (
          <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
        )}
      </div>
    </a>
  );
});
