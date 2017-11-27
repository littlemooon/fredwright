// @flow

import type { ContentType } from '../types'

export const headerContent: {
  title: string,
  subtitle: string,
  description: string,
} = {
  title: 'fred wright',
  subtitle: 'full stack lead developer',
  description: `After gathering many years of experience in high pressure positions I have decided to begin working as a remote consultant.
  
  This allows me to utilise the broad knowledge gained working with the latest technologies, in diverse industries, and with all areas of a business.
  
  While this has been incredibly interesting and beneficial, my real passion lies in delivering products of extreme quality.
  
  Primary skills and interests are in Javascript, React and Node.`,
}

export const cardContent: Array<ContentType> = [
  {
    type: 'work',
    title: 'Dooer',
    links: ['https://www.dooer.com/'],
    subtitle: 'Development Lead',
    dateFrom: '2017',
    content: [
      'Creation of company-wide product pipeline and process',
      'Full-stack development of an event-driven microservice architecture',
      'Optimisation of frontend build system, architecture and user experience',
    ],
    tech: [
      { href: 'http://facebook.github.io/react/', title: 'React' },
      {
        href: 'https://facebook.github.io/react-native/',
        title: 'React_native',
      },
      { href: 'https://nodejs.org/', title: 'Node' },
      {
        href: 'https://en.wikipedia.org/wiki/Event-driven_architecture',
        title: 'Event-driven',
      },
      { href: 'https://www.hashicorp.com', title: 'Hashicorp' },
    ],
  },
  {
    type: 'projects',
    printable: true,
    title: 'fredwright.me',
    links: [
      'http://www.github.com/littlemooon/fredwright',
      'https://fredwright.me',
    ],
    subtitle: 'Personal Resume Website',
    dateFrom: '2017',
    content: ['Server-side rendered website using Next.js'],
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
      'Boilerplate setup for creating Next.js apps with React.js',
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
    type: 'work',
    title: 'Albacross',
    links: ['https://albacross.com/'],
    subtitle: 'Lead Developer',
    dateTo: '2017',
    dateFrom: '2015',
    content: [
      'Leadership of agile development, product and design teams',
      'Full-stack development of a serverless microservice architecture',
      'Creation of three web applications from scratch',
      'Close ties with all areas of the business, including strategy, finance, marketing and sales',
    ],
    tech: [
      { href: 'http://facebook.github.io/react/', title: 'React' },
      { href: 'http://rubyonrails.org/', title: 'Ruby_on_rails' },
      { href: 'https://serverless.com/', title: 'Serverless' },
      { href: 'https://aws.amazon.com/', title: 'AWS' },
    ],
  },
  {
    type: 'projects',
    printable: true,
    title: 'littlemoon.io',
    links: [
      'http://www.github.com/littlemooon/littlemoon',
      'https://littlemoon.io',
    ],
    subtitle: 'Personal Brand Website',
    dateFrom: '2016',
    content: ['Static website using wintersmith.js'],
    tech: [
      { href: 'http://wintersmith.io/', title: 'Wintersmith' },
      { href: 'http://stylus-lang.com/', title: 'Stylus' },
    ],
  },
  {
    type: 'work',
    title: 'Quinyx',
    links: ['https://www.quinyx.com'],
    subtitle: 'Frontend Architect',
    dateFrom: '2015',
    content: [
      'Design and implementation of immutable, state-management framework for React.js',
      'Overhaul of frontend tooling, including switch from Coffeescript to Babel ESNext',
      'Development of base layout components used in all applications',
    ],
    tech: [
      { href: 'http://facebook.github.io/react/', title: 'React' },
      { href: 'https://babeljs.io/', title: 'Babel' },
      { href: 'http://webpack.github.io/', title: 'Webpack' },
      { href: 'https://github.com/littlemooon/jungle', title: 'Jungle' },
    ],
  },
  {
    type: 'projects',
    printable: true,
    title: 'jungle',
    links: ['http://www.github.com/littlemooon/jungle'],
    subtitle: 'Immutable State Management',
    dateFrom: '2015',
    content: [
      'Lightweight toolkit for creating maintainable applications with React.js',
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
    printable: true,
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
    type: 'work',
    title: 'Backslash',
    links: ['https://www.linkedin.com/company/4285708'],
    subtitle: 'Lead Developer',
    dateTo: '2015',
    dateFrom: '2014',
    content: [
      'Development of a web application from scratch',
      'All work undertaken while working full time at Alfa',
    ],
    tech: [
      { href: 'http://facebook.github.io/react/', title: 'React' },
      {
        href: 'http://facebook.github.io/flux/docs/overview.html',
        title: 'Flux',
      },
      { href: 'https://babeljs.io/', title: 'Babel' },
      { href: 'http://webpack.github.io/', title: 'Webpack' },
      { href: 'https://www.python.org/', title: 'Python' },
      { href: 'http://flask.pocoo.org/', title: 'Flask' },
    ],
  },
  {
    type: 'work',
    title: 'Alfa',
    links: ['https://www.alfasystems.com'],
    subtitle: 'Technical Consultant',
    dateTo: '2015',
    dateFrom: '2012',
    content: [
      'Full-stack development of a financial Java web application',
      'Prototype design and development of web and mobile software',
      'On-site implementation consultancy',
    ],
    tech: [
      { href: 'http://facebook.github.io/react/', title: 'React' },
      {
        href:
          'http://www.oracle.com/technetwork/java/javaee/overview/index.html',
        title: 'JavaEE',
      },
      { href: 'http://groovy.codehaus.org/', title: 'Groovy' },
      { href: 'http://gulpjs.com/', title: 'Gulp' },
      { href: 'http://cordova.apache.org/', title: 'Cordova' },
      {
        href: 'http://en.wikipedia.org/wiki/Test-driven_development',
        title: 'TDD',
      },
      { href: 'http://agilemethodology.org/', title: 'Agile_development' },
    ],
  },
  {
    type: 'projects',
    title: 'payments',
    links: ['https://github.com/littlemooon/payments'],
    subtitle: 'Bank Statement Reporting Tool',
    dateFrom: '2014',
    content: [
      'Tool for consuming bank statements and producing filterable reports',
      'Used by myself',
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
    printable: true,
    title: 'bertiewright.co.uk',
    links: [
      'http://www.github.com/littlemooon/bertie',
      'https://bertiewright.co.uk',
    ],
    subtitle: 'Musician Brand Website',
    dateFrom: '2014',
    content: [
      'My first production site as the sole developer',
      'Design, development and deployment',
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
  {
    type: 'work',
    title: 'SAAB',
    links: ['https://saab.com'],
    subtitle: 'Development Analyst',
    dateFrom: '2011',
    content: [
      'Analysis and presentation of big data',
      'Functional design and prototyping of analytics software',
      'Data collection and strategy',
    ],
    tech: [
      { href: 'http://en.wikipedia.org/wiki/SQL', title: 'SQL' },
      {
        href: 'http://www.tableausoftware.com/products/desktop',
        title: 'Tableau',
      },
    ],
  },
  {
    type: 'education',
    title: 'University of Bristol',
    links: ['http://www.bristol.ac.uk/'],
    subtitle: 'BSc Mathematics and Philosophy 2:1',
    dateTo: '2011',
    dateFrom: '2008',
    content: ['Specialisation in Quantum Mechanics and Set Theory'],
    tech: [
      {
        href: 'http://en.wikipedia.org/wiki/Mathematical_analysis',
        title: 'Mathematical_analysis',
      },
      { href: 'http://en.wikipedia.org/wiki/Logic', title: 'Logic' },
    ],
  },
]
