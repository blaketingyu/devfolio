import React from 'react'

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionCerts = ({ certs }) => {
    if (!certs.length) return null;
  
    return (
      <Section title="Certifications">
        {certs.map((cert) => (
          <SummaryItem
            key={cert.name}
            name={cert.name}
            title={cert.title}
            description={cert.description}
            link={cert.link}
          />
        ))}
      </Section>
    );
  };
  

export default SectionCerts