// @flow

import type { ContentType } from '../../types'

const work: Array<ContentType> = [
  {
    type: 'work',
    title: 'Dooer',
    links: ['https://www.dooer.com/'],
    subtitle: 'Development Lead',
    dateFrom: '2017',
    content: [
      'Creation of company-wide product pipeline and process',
      'Full-stack tooling and development of an event-driven microservice architecture',
      'Optimisation of frontend build system, architecture and modules',
    ],
    tech: [
      { href: 'http://facebook.github.io/react/', title: 'React' },
      { href: 'https://nodejs.org/', title: 'Node' },
      {
        href: 'https://en.wikipedia.org/wiki/Event-driven_architecture',
        title: 'Event-driven',
      },
      { href: 'https://www.hashicorp.com', title: 'Hashicorp' },
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
      'Leadership of agile development, product and design processes',
      'Full-stack development of a serverless microservice architecture',
      'Architecture of three web applications from scratch',
    ],
    tech: [
      { href: 'http://facebook.github.io/react/', title: 'React' },
      { href: 'http://rubyonrails.org/', title: 'Ruby_on_rails' },
      { href: 'https://serverless.com/', title: 'Serverless' },
      { href: 'https://aws.amazon.com/', title: 'AWS' },
    ],
  },
  {
    type: 'work',
    title: 'Quinyx',
    links: ['https://www.quinyx.com'],
    subtitle: 'Frontend Architect',
    dateFrom: '2015',
    content: [
      'Design and implementation of immutable, state-management framework for React',
      'Overhaul of frontend tooling, including switch from Coffeescript to Babel ES6',
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
]

export default work
