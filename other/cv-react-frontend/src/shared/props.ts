import { Project } from './types';

export interface CardProps {
  project: Project;
}

export interface ContactProps {
  prefix: string;
}

export interface SectionListProps {
  id: string;
  items: string[];
}
