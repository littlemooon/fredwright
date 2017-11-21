// @flow

import type { ContentType } from '../../types'

const work: Array<ContentType> = [
  {
    type: 'work',
    title: 'Dooer AB',
    link: 'https://www.dooer.com/',
    subtitle: 'Development Lead',
    date: '2017',
    content: ['asd'],
    links: [{ title: 'asd', href: 'asd' }],
  },
  {
    type: 'work',
    title: 'Albacross',
    link: 'https://albacross.com/',
    subtitle: 'Lead Developer',
    date: '2015-2017',
    content: [
      'Leadership of agile development, product and design processes',
      'Full-stack microservice development, including Node.js, React.js and Ruby on Rails',
      'Architecture of three web applications from scratch, using Redux, Webpack and Babel',
    ],
    links: [{ title: 'asd', href: 'asd' }],
  },
  {
    type: 'work',
    title: 'Quinyx AB',
    link: 'https://www.quinyx.com',
    subtitle: 'Frontend Architect',
    date: '2015',
    content: [
      'Design and implementation of immutable, state-management framework for React.js',
      'Overhaul of frontend tooling, including switch from Coffeescript to Babel ES6',
      'Development of base layout components used in all applications',
    ],
    links: [
      { href: 'http://facebook.github.io/react/', title: 'React' },
      { href: 'https://babeljs.io/', title: 'Babel' },
      { href: 'http://webpack.github.io/', title: 'Webpack' },
      { href: 'https://github.com/Yomguithereal/baobab', title: 'Baobab' },
      { href: 'https://github.com/gaearon/redux', title: 'Redux' },
    ],
  },
  {
    type: 'work',
    title: 'Backslash',
    link: 'https://www.linkedin.com/company/4285708',
    subtitle: 'Lead Developer',
    date: '2014-2015',
    content: ['as'],
    links: [
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
    link: 'https://www.alfasystems.com',
    subtitle: 'Technical Consultant',
    date: '2012-2015',
    content: [
      'Full-stack development of a financial Java web application',
      'Prototype design and development of web and mobile software',
      'On-site implementation consultancy',
    ],
    links: [
      { href: 'http://facebook.github.io/react/', title: 'React' },
      {
        href: 'http://facebook.github.io/flux/docs/overview.html',
        title: 'Flux',
      },
      {
        href:
          'http://www.oracle.com/technetwork/java/javaee/overview/index.html',
        title: 'JavaEE',
      },
      { href: 'http://groovy.codehaus.org/', title: 'Groovy' },
      { href: 'http://gulpjs.com/', title: 'Gulp' },
      { href: 'http://phantomjs.org/', title: 'PhantomJs' },
      { href: 'http://cordova.apache.org/', title: 'Cordova' },
      { href: 'http://ionicframework.com/', title: 'Ionic' },
      { href: 'http://ramda.github.io/ramdocs/docs/', title: 'Ramda' },
      {
        href: 'http://en.wikipedia.org/wiki/Test-driven_development',
        title: 'TDD',
      },
      { href: 'http://agilemethodology.org/', title: 'Agile development' },
    ],
  },
  {
    type: 'work',
    title: 'SAAB AB',
    link: 'https://saab.com',
    subtitle: 'Development Analyst',
    date: '2011',
    content: [
      'Analysis and presentation of big data',
      'Functional design and prototyping of analytics software',
      'Data collection and strategy',
    ],
    links: [
      { href: 'http://en.wikipedia.org/wiki/SQL', title: 'SQL' },
      {
        href: 'http://www.tableausoftware.com/products/desktop',
        title: 'Tableau',
      },
    ],
  },
]

export default work
