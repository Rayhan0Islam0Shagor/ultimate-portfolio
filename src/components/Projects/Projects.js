import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <>
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          return (
            <BlogCard key={i}>
              <Img src={p.image} />

              <HeaderThree title={p.title}>{p.title}</HeaderThree>
              <Hr />

              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Tech Stack</TitleContent>
                <Hr />
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks target="_blank" href={p.visit}>
                  Live Preview
                </ExternalLinks>
                {p.source && (
                  <ExternalLinks target="_blank" href={p.source}>
                    Source Code
                  </ExternalLinks>
                )}
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>

      <ExternalLinks
        target="_blank"
        href={'https://github.com/Rayhan0Islam0Shagor?tab=repositories'}
      >
        <div style={{ padding: '5px 10px' }}>View more on Github</div>
      </ExternalLinks>
    </Section>
  </>
);

export default Projects;
