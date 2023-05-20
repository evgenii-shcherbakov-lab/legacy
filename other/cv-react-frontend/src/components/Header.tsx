import React from 'react';
import '../styles/Header.scss';
import photo from '../assets/img/photo.png';
import { NAME } from '../shared/config';
import { Contacts } from './Contacts';
import { HeaderType } from '../shared/types';

export const Header: React.FC<HeaderType> = ({ toggle }) => (
  <header className="Header">
    <button className="Header__btn" onClick={toggle} />
    <img src={photo} alt="my face" className="Header__img" />
    <h1>{NAME}</h1>
    <Contacts prefix="header" />
  </header>
);
