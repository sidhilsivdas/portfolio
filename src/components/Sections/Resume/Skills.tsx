import {CSSProperties, FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col" data-reveal>
      <span className="text-center text-lg font-bold">{name}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill index={index} key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType; index: number}> = memo(({skill, index}) => {
  const {name, level, max = 10} = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-2 text-sm font-medium">
        <span>{name}</span>
        <span className="text-neutral-500">{percentage}%</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-300">
        {/* Wrapper sets the width; the fill slides in with transform so it never triggers layout */}
        <div className="skill-bar" style={{width: `${percentage}%`}}>
          <div className="skill-bar__fill" style={{'--i': index} as CSSProperties} />
        </div>
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
