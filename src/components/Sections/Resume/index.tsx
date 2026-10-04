import {FC, memo} from 'react';

import {useLanguage} from '../../../context/LanguageContext';
import {SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const {t} = useLanguage();
  return (
    <Section className="bg-neutral-100 text-neutral-900" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title={t.resumeTitles.education}>
          {t.education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={t.resumeTitles.work}>
          {t.experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={t.resumeTitles.skills}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {t.skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
