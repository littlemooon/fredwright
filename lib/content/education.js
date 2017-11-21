// @flow

import type { ContentType } from '../../types'

const education: Array<ContentType> = [
  {
    type: 'education',
    title: 'University of Bristol',
    link: 'http://www.bristol.ac.uk/',
    subtitle: 'BSc Mathematics and Philosophy 2:1',
    date: '2008-2011',
    content: ['Specialisation in Quantum Mechanics and Set Theory'],
    links: [
      {
        href: 'http://en.wikipedia.org/wiki/Mathematical_analysis',
        title: 'Mathematical Analysis',
      },
      { href: 'http://en.wikipedia.org/wiki/Logic', title: 'Logic' },
    ],
  },
]

export default education
