import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col gap-y-3">
      {/* عنوان گروه مهارت (مثلاً Backend & Database) - مشکی پررنگ */}
      <span className="text-center text-lg font-bold text-gray-900 md:text-left">{name}</span>
      <div className="flex flex-col gap-y-3">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, level, max = 10} = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex justify-between items-center px-1">
        {/* اسم مهارت - خاکستری تیره و خوانا */}
        <span className="text-sm font-semibold text-gray-800">{name}</span>
        {/* درصد مهارت */}
        <span className="text-xs font-bold text-gray-600">{percentage}%</span>
      </div>
      {/* نوار پیشرفت */}
      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-300">
        <div className="h-full rounded-full bg-orange-500" style={{width: `${percentage}%`}} />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
