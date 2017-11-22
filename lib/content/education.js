// @flow

import type { ContentType } from '../../types'

const education: Array<ContentType> = [
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
        title: 'Mathematical Analysis',
      },
      { href: 'http://en.wikipedia.org/wiki/Logic', title: 'Logic' },
    ],
  },
]

export default education
