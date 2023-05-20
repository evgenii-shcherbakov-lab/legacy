import { Project } from './types';

export const NAME = 'Evgenii Shcherbakov';
export const SECTIONS: string[] = ['about', 'projects', 'skills', 'education', 'english'];
export const CONTACTS: string[] = [
  'mailto:iipekolict@gmail.com',
  'https://t.me/IIPEKOLICT',
  'https://github.com/IIPEKOLICT',
];

export const SKILLS: string[] = [
  'HTML, Pug',
  'CSS, SCSS, Stylus',
  'TypeScript',
  'Express, NestJS',
  'React, Angular',
  'Gulp, Webpack',
  'MobX, RxJS',
  'MongoDB, PostgreSQL',
];

export const EDUCATION: string[] = [
  'Minsk Radio Engineering College, Minsk (2015 - 2019)',
  'Belarusian State University of Informatics and Radio Electronics, Minsk (2019 - 2022)',
];

export const PROJECTS: Project[] = [
  {
    title: 'Hotel',
    href: 'https://iipekolict--hotel.herokuapp.com/',
    desc: 'Hotel MERN app (task on subject "Structures and databases" in BSUIR)',
    technologies: 'React, TypeScript, MobX, Express, MongoDB',
    date: '2022/01',
  },
  {
    title: 'Bookstore',
    href: 'https://iipekolict--bookstore.herokuapp.com/',
    desc: 'Bookstore MERN app (task on subject "Structures and databases" in BSUIR, too...)',
    technologies: 'React, JavaScript, MobX, Express, MongoDB',
    date: '2022/01',
  },
  {
    title: 'Christmas-toys',
    href: 'https://rolling-scopes-school.github.io/iipekolict-JSFE2021Q3/christmas-task-2',
    desc: 'Christmas toys SPA app (task in RS School) on pure TS',
    technologies: 'TypeScript',
    date: '2021/12',
  },
  {
    title: 'Angular todo app',
    href: 'https://iipekolict.github.io/todos-angular',
    desc: 'Todo app on Angular',
    technologies: 'Angular',
    date: '2021/11',
  },
];
