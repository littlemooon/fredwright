// @flow

import type { ContentType } from '../../types'

const projects: Array<ContentType> = [
  {
    type: 'projects',
    title: 'fredwright.me',
    links: ['http://www.github.com/littlemooon/fredwright', 'fredwright.me'],
    subtitle: 'Personal Resume Website',
    date: '2017',
    content: ['Server-side rendered, website using next.js'],
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
    date: '2016',
    content: ['Static website using wintersmith.js'],
    tech: [
      { href: 'http://wintersmith.io/', title: 'Wintersmith' },
      { href: 'http://stylus-lang.com/', title: 'Stylus' },
    ],
  },
  {
    type: 'projects',
    title: 'bertiewright.co.uk',
    links: ['http://www.github.com/littlemooon/bertie', 'bertiewright.co.uk'],
    subtitle: 'Musician Brand Website',
    date: '2014',
    content: [
      'Leadership of agile development, product and design processes',
      'Full-stack microservice development, including Node.js, React.js and Ruby on Rails',
      'Architecture of three web applications from scratch, using Redux, Webpack and Babel',
    ],
    tech: [
      { href: 'http://facebook.github.io/react/', title: 'React' },
      { href: 'https://babeljs.io/', title: 'Babel' },
      { href: 'http://webpack.github.io/', title: 'Webpack' },
      { href: 'https://github.com/Yomguithereal/baobab', title: 'Baobab' },
      { href: 'https://github.com/gaearon/redux', title: 'Redux' },
    ],
  },
  {
    type: 'projects',
    title: 'react-data-viz',
    links: ['http://www.github.com/littlemooon/bertie', 'bertiewright.co.uk'],
    subtitle: 'Musician Brand Website',
    date: '2014',
    content: ['Example React application with D3 bitcoin graphs'],
    tech: [
      { href: 'http://facebook.github.io/react/', title: 'React' },
      { href: 'https://babeljs.io/', title: 'Babel' },
      { href: 'http://webpack.github.io/', title: 'Webpack' },
      { href: 'https://github.com/Yomguithereal/baobab', title: 'Baobab' },
      { href: 'https://github.com/gaearon/redux', title: 'Redux' },
    ],
  },
]

export default projects

// section.home
// h3 Static site developer and designer
// p
//   | Personal site -&nbsp;
//   a(href='http://littlemoon.io') littlemoon.io
// p
//   | Music site -&nbsp;
//   a(href='http://bertiewright.co.uk') bertiewright.co.uk
// p
//   | Personal resume -&nbsp;
//   a(href='http://fredwright.me') fredwright.me
// .skills
//   a(href='http://sass-lang.com/') SASS
//   | ,&nbsp;
//   a(href='http://learnboost.github.io/stylus/') Stylus
//   | ,&nbsp;
//   a(href='http://git-scm.com/') Git
//   | ,&nbsp;
//   a(href='http://jade-lang.com/') Jade
//   | ,&nbsp;
//   a(href='http://jekyllrb.com/') Jekyll
//   | ,&nbsp;
//   a(href='http://www.heroku.com/') Heroku
//   | ,&nbsp;
//   a(href='http://smacss.com/') SMACSS
//   | ,&nbsp;
//   a(href='http://www.html5rocks.com/en/mobile/responsivedesign/') Mobile-first design

// h3 Javascript web app developer
// p
//   | Example React application with D3 bitcoin graphs -&nbsp;
//   a(href='https://github.com/littlemooon/react-dataviz-example') react-dataviz-example
// p
//   | Bank statement reporting tool -&nbsp;
//   a(href='https://github.com/littlemooon/payments') payments
// p
//   | UI for adding simple JSON objects to MongoDB -&nbsp;
//   a(href='https://github.com/littlemooon/mongo-data-builder') mongo-data-builder
// .skills
//   a(href='http://facebook.github.io/react/') React
//   | ,&nbsp;
//   a(href='http://angularjs.org/') Angular
//   | ,&nbsp;
//   a(href='http://nodejs.org/') Node
//   | ,&nbsp;
//   a(href='http://koajs.com/') Koa
//   | ,&nbsp;
//   a(href='http://expressjs.com/') Express
//   | ,&nbsp;
//   a(href='http://www.mongodb.org/') MongoDB
//   | ,&nbsp;
//   a(href='http://sailsjs.org/') Sails
//   | ,&nbsp;
//   a(href='http://backbonejs.org/') Backbone
//   | ,&nbsp;
//   a(href='http://getbootstrap.com/') Bootstrap

// h3 Javascript framework developer
// p
//   | Thin layer over React for interacting with a single tree of state -&nbsp;
//   a(href='https://github.com/littlemooon/mowgli') mowgli
// p
//   | Actions wrapper for use with mowgli -&nbsp;
//   a(href='https://github.com/littlemooon/kaa') kaa
// p
//   | Reusable React tree component -&nbsp;
//   a(href='https://github.com/littlemooon/react-tree') react-tree

// footer.home
// .line
// .skills
//   a(href='https://facebook.github.io/immutable-js/') ImmutableJs
//   | ,&nbsp;
//   a(href='https://github.com/swannodette/mori') Mori
//   | ,&nbsp;
//   a(href='https://babeljs.io/') Babel
//   | ,&nbsp;
//   a(href='http://webpack.github.io/') Webpack
//   | ,&nbsp;
//   a(href='https://github.com/Yomguithereal/baobab') Baobab
//   | ,&nbsp;
//   a(href='https://github.com/mquan/cortex') Cortex
// p &nbsp;
// a(href='https://github.com/littlemooon') github.com/littlemooon
