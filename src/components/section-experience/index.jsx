import React from 'react';

import Section from '../section';
import ExperienceItem from '../experience-item';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item) => (
        <ExperienceItem
          key={`${item.name} ${item.title}`}
          name={item.name}
          description={item.description}
          title={item.title}
          technologies={item.technologies}
        />
      ))}
    </Section>
  );
};

export default SectionExperience;
