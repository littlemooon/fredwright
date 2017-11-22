// @flow

import type { ContentType } from '../../types'

const projects: Array<ContentType> = [
  {
    type: 'projects',
    title: 'fredwright.me',
    links: ['http://www.github.com/littlemooon/fredwright', 'fredwright.me'],
    subtitle: 'Personal Resume Website',
    dateFrom: '2017',
    content: ['Server-side rendered website using next.js'],
    tech: [
      { href: 'http://facebook.github.io/react/', title: 'React' },
      { href: 'https://github.com/zeit/next.js', title: 'Next' },
      { href: 'http://flow.org/', title: 'Flow' },
      { href: 'https://prettier.io/', title: 'Prettier' },
    ],
  },
  {
    type: 'projects',
    title: 'next-starter',
    links: ['http://www.github.com/littlemooon/next-starter'],
    subtitle: 'Boilerplate Project',
    dateFrom: '2017',
    content: [
      'Boilerplate setup for creating next.js apps with react.js',
      'Used by fredwright.me',
    ],
    tech: [
      { href: 'http://facebook.github.io/react/', title: 'React' },
      { href: 'https://github.com/zeit/next.js', title: 'Next' },
      { href: 'http://flow.org/', title: 'Flow' },
      { href: 'https://prettier.io/', title: 'Prettier' },
    ],
  },
  {
    type: 'projects',
    title: 'littlemoon.io',
    links: ['http://www.github.com/littlemooon/littlemoon', 'littlemoon.io'],
    subtitle: 'Personal Brand Website',
    dateFrom: '2016',
    content: ['Static website using wintersmith.js'],
    tech: [
      { href: 'http://wintersmith.io/', title: 'Wintersmith' },
      { href: 'http://stylus-lang.com/', title: 'Stylus' },
    ],
  },
  {
    type: 'projects',
    title: 'jungle',
    links: ['http://www.github.com/littlemooon/jungle'],
    subtitle: 'Immutable State Management',
    dateFrom: '2015',
    content: [
      'Lightweight toolkit for creating maintainable applications with react.js',
      'Very similar to Redux, which was not developed until later',
      'Used in production at Quinyx',
    ],
    tech: [
      { href: 'http://facebook.github.io/react/', title: 'React' },
      { href: 'https://github.com/Yomguithereal/baobab', title: 'Baobab' },
    ],
  },
  {
    type: 'projects',
    title: 'react-dataviz-example',
    links: ['https://github.com/littlemooon/react-dataviz-example'],
    subtitle: 'Recruitment Task',
    dateFrom: '2015',
    content: [
      'Example React application with D3 graphs',
      'Use of an existing open bitcoin API',
    ],
    tech: [
      { href: 'http://facebook.github.io/react/', title: 'React' },
      { href: 'https://d3js.org/', title: 'D3' },
      { href: 'https://expressjs.com/', title: 'Express' },
    ],
  },
  {
    type: 'projects',
    title: 'react-tree',
    links: ['https://github.com/littlemooon/react-tree'],
    subtitle: 'Reusable Library',
    dateFrom: '2015',
    content: ['Construct component trees of arbitrary depth'],
    tech: [{ href: 'http://facebook.github.io/react/', title: 'React' }],
  },
  {
    type: 'projects',
    title: 'payments',
    links: ['https://github.com/littlemooon/payments'],
    subtitle: 'Bank Statement Reporting Tool',
    dateFrom: '2014',
    content: [
      'Tool for consuming bank statements and producing filterable reports',
    ],
    tech: [
      { href: 'http://angularjs.org/', title: 'Angular' },
      { href: 'http://koajs.com/', title: 'Koa' },
      { href: 'https://www.mongodb.com/', title: 'MongoDB' },
    ],
  },
  {
    type: 'projects',
    title: 'mongo-data-builder',
    links: ['https://github.com/littlemooon/mongo-data-builder'],
    subtitle: 'MongoDB Data Creation Tool',
    dateFrom: '2014',
    content: ['UI for adding simple JSON objects to MongoDB'],
    tech: [
      { href: 'http://angularjs.org/', title: 'Angular' },
      { href: 'http://koajs.com/', title: 'Koa' },
      { href: 'https://www.mongodb.com/', title: 'MongoDB' },
    ],
  },
  {
    type: 'projects',
    title: 'bertiewright.co.uk',
    links: ['http://www.github.com/littlemooon/bertie', 'bertiewright.co.uk'],
    subtitle: 'Musician Brand Website',
    dateFrom: '2014',
    content: [
      'My first production site as the sole developer',
      'Complete design, development and deployment',
    ],
    tech: [
      { href: 'http://sass-lang.com/', title: 'SASS' },
      { href: 'http://gulpjs.com/', title: 'Gulp' },
      { href: 'https://jquery.com/', title: 'jQuery' },
      {
        href: 'http://www.html5rocks.com/en/mobile/responsivedesign/',
        title: 'Mobile_first_design',
      },
    ],
  },
]

export default projects
