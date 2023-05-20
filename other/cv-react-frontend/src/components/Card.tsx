import React from 'react';
import { CardProps } from '../shared/props';
import '../styles/Card.scss';

export const Card: React.FC<CardProps> = ({ project }) => (
  <figure className="Card">
    <a href={project.href.toString()} target="_blank" rel="noreferrer">
      <h4>{project.title}</h4>
      <div className="Card__container">
        <div>
          <p className="Card__primary">Technologies: {project.technologies}</p>
          <p>Description: {project.desc}</p>
        </div>
        <span className="Card__date">{project.date}</span>
      </div>
    </a>
  </figure>
);
