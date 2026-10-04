import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import {CSSProperties, FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact}>
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4" data-reveal>
          <div className="flex items-center gap-4">
            <EnvelopeIcon className="hidden h-12 w-12 text-orange-400 md:block" />
            <h2 className="text-2xl font-bold text-white">{headerText}</h2>
          </div>
          <p className="max-w-prose leading-6 text-neutral-300">{description}</p>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map(({type, text, href}, index) => {
            const {Icon, srLabel} = ContactValueMap[type];
            // Only external links (maps, socials) open in a new tab; mailto/tel stay in place
            const external = href?.startsWith('http');
            return (
              <li data-reveal key={srLabel} style={{'--i': index} as CSSProperties}>
                <a
                  className="contact-link stat-card flex h-full items-center gap-x-4 rounded-xl bg-neutral-900 p-4 text-neutral-300 shadow-lg shadow-black/30 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  href={href}
                  rel={external ? 'noreferrer' : undefined}
                  target={external ? '_blank' : undefined}>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-800">
                    <Icon aria-hidden="true" className="h-5 w-5 text-orange-400" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="text-xs font-medium uppercase tracking-wide text-neutral-500">{srLabel}</span>
                    <span className="truncate text-sm sm:text-base">{text}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
