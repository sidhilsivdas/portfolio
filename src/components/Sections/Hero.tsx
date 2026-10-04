import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {CSSProperties, FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

// Stagger index for the hero's entrance animation
const delay = (i: number) => ({'--i': i}) as CSSProperties;

const Hero: FC = memo(() => {
  const {imageSrc, name, roles, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <Image
          alt={`${name}-image`}
          className="ken-burns absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="zoom-in flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="fade-up text-gradient text-4xl font-bold sm:text-5xl lg:text-7xl" style={delay(0)}>
              {name}
            </h1>
            {roles && roles.length > 0 && (
              <p
                aria-label={roles.join(', ')}
                className="fade-up text-lg font-semibold text-orange-400 sm:text-2xl"
                style={delay(1)}>
                <span aria-hidden="true" className="rotator">
                  <span className="rotator__list">
                    {[...roles, roles[0]].map((role, index) => (
                      <span key={`${role}-${index}`}>{role}</span>
                    ))}
                  </span>
                </span>
              </p>
            )}
            <div className="fade-up flex flex-col gap-y-4" style={delay(2)}>
              {description}
            </div>
            <div className="fade-up flex gap-x-4 text-neutral-100" style={delay(3)}>
              <Socials />
            </div>
            <div className="fade-up flex w-full justify-center gap-x-4" style={delay(4)}>
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'btn-shine flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            aria-label="Scroll to about section"
            className="bounce-soft rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
