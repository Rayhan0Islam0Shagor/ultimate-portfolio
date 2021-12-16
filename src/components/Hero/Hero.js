import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Hey there, This is Rayhan Islam Shagor. I'm a web developer who also
          works on{' '}
          <span>
            <a
              href="https://www.fiverr.com/rayhanislam45?up_rollout=true"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'underline' }}
            >
              Fiverr
            </a>
          </span>
          .
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/files/rayhan_islam_resume.pdf';
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
