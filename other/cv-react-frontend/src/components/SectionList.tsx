import React from 'react';
import { SectionListProps } from '../shared/props';
import '../styles/Section.scss';

export const SectionList: React.FC<SectionListProps> = ({ id, items }) => (
  <section id={id} className="Section">
    <h3>{id}</h3>
    <ul className="ul">
      {items.map((item: string) => <li key={item}>{item}</li> )}
    </ul>
  </section>
);
