import React from 'react';
import { CONTACTS } from '../shared/config';
import '../styles/Contacts.scss';
import { ContactProps } from '../shared/props';

export const Contacts: React.FC<ContactProps> = ({ prefix }) => (
  <ul className="Contacts">
    {CONTACTS.map((contact) => (
      <li key={contact}>
        <a href={contact} key={prefix + contact}>
          <i className="hidden" aria-hidden="true">
            Contacts link
          </i>
        </a>
      </li>
    ))}
  </ul>
);
