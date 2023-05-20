import React from 'react';
import '../styles/Main.scss';
import '../styles/Section.scss';
import { Card } from './Card';
import { SectionList } from './SectionList';
import { EDUCATION, PROJECTS, SECTIONS, SKILLS } from '../shared/config';
import { Project } from '../shared/types';

export const Main: React.FC = () => (
  <main className="Main">
    <article className="Main__article">
      <section id={SECTIONS[0]} className="Section">
        <h3>{SECTIONS[0]}</h3>
        <p>
          I am going to become a javascript frontend developer. I have a high
          learning ability, perseverance and desire to develop in this area.
        </p>
        <p>
          I enjoy creating mobile apps, playing sports and learning new things.
          Since childhood, I had a predisposition to work with electronics and
          computers. I love to disassemble, assemble and configure something...
        </p>
        <p>
          I haven’t had a chance to work in IT yet, all projects were completed
          as a freelancer.
        </p>
      </section>
      <section id={SECTIONS[1]} className="Section">
        <h3>{SECTIONS[1]}</h3>
        {PROJECTS.map((project: Project) => <Card key={project.href} project={project} /> )}
      </section>
    </article>
    <aside className="Main__aside">
      <SectionList id={SECTIONS[2]} items={SKILLS} />
      <SectionList id={SECTIONS[3]} items={EDUCATION} />
      <section id={SECTIONS[4]} className="Section">
        <h3>{SECTIONS[4]}</h3>
        <p>My english knowledge level is A2 (Pre-Intermediate).</p>
      </section>
    </aside>
  </main>
);
