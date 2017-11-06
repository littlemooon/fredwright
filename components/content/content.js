// @flow

import type { ContentType } from '../../types'

import Education from './education'
import Saab from './saab'
import Alfa from './alfa'
import Dooer from './dooer'
import Albacross from './albacross'
import Backslash from './backslash'
import Quinyx from './quinyx'

const content: Array<ContentType> = [
  {
    type: 'work',
    title: 'Dooer AB 2017-2017',
    subtitle: 'automated bookkeeping',
    Component: Dooer,
    link: 'https://www.dooer.com/',
  },
  {
    type: 'work',
    title: 'Albacross 2015-2017',
    subtitle: 'b2b advertising',
    Component: Albacross,
    link: 'https://albacross.com/',
  },
  {
    type: 'work',
    title: 'Quinyx AB 2015-2015',
    subtitle: 'workforce management',
    Component: Quinyx,
    link: 'https://www.quinyx.com',
  },
  {
    type: 'work',
    title: 'Backslash 2014-2015',
    subtitle: 'bitcoin wallet',
    Component: Backslash,
    link: 'https://www.linkedin.com/company/4285708',
  },
  {
    type: 'work',
    title: 'Alfa 2012-2015',
    subtitle: 'asset finance',
    Component: Alfa,
    link: 'https://www.alfasystems.com',
  },
  {
    type: 'work',
    title: 'SAAB AB 2011-2011',
    subtitle: 'defence engineering',
    Component: Saab,
    link: 'https://saab.com',
  },
  {
    type: 'education',
    title: 'University of Bristol 2008-2011',
    Component: Education,
    link: 'http://www.bristol.ac.uk/',
  },
]

export default content
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
