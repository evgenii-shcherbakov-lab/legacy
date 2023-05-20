import React from 'react';
import '../styles/Footer.scss';
import { Contacts } from './Contacts';

export const Footer: React.FC = () => (
  <footer className="Footer">
    <span>&copy; 2022, all rights reserved.</span>
    <Contacts prefix="footer" />
  </footer>
);
