import {CSSProperties, FC, memo} from 'react';

import {stats, techStack} from '../../data/data';

const Stats: FC = memo(() => (
  <div className="bg-neutral-900 px-4 py-12 md:py-16 lg:px-8">
    <div className="mx-auto flex max-w-screen-lg flex-col gap-y-10">
      <dl className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {stats.map(({title, value, suffix, Icon}, index) => (
          <div
            className="stat-card flex flex-col items-center gap-y-2 rounded-xl bg-neutral-800 p-5 text-center shadow-lg shadow-black/30"
            data-reveal
            key={title}
            style={{'--i': index} as CSSProperties}>
            {Icon && <Icon aria-hidden="true" className="h-7 w-7 text-orange-400 sm:h-8 sm:w-8" />}
            <dt className="order-last text-xs font-medium uppercase tracking-wide text-neutral-400 sm:text-sm">
              {title}
            </dt>
            <dd className="text-3xl font-bold text-white sm:text-4xl">
              {/* Number is drawn by CSS (@property counter); the sr-only copy keeps it readable */}
              <span aria-hidden="true" className="stat-num" style={{'--target': value} as CSSProperties} />
              <span className="sr-only">{value}</span>
              {suffix && <span className="text-orange-400">{suffix}</span>}
            </dd>
          </div>
        ))}
      </dl>
      <div className="marquee" data-reveal>
        <ul className="marquee__track">
          {[...techStack, ...techStack].map((tech, index) => (
            <li
              aria-hidden={index >= techStack.length ? 'true' : undefined}
              className="whitespace-nowrap rounded-full border border-neutral-700 bg-neutral-800 px-4 py-2 text-sm font-medium text-neutral-200"
              key={`${tech}-${index}`}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
));

Stats.displayName = 'Stats';
export default Stats;
