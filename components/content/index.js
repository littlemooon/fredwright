// @flow

import * as React from 'react'

import Flex from '../flex'
import Section from '../section'
import type { SectionType, Url } from '../../types/'

import Education from './education'
import Saab from './saab'
import Alfa from './alfa'
import Dooer from './dooer'
import Albacross from './albacross'
import Backslash from './backslash'
import Quinyx from './quinyx'

type Props = {
  url: Url,
}

type ContentType = {
  type: SectionType,
  title: string,
  subtitle?: string,
  Component: React.ComponentType<*>,
  link?: string,
}

const content = [
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

export default function Content({ url }: Props) {
  const queryType = url.query.type
  return (
    <Flex tag="main" row wrap>
      {content
        .filter(
          ({ type }: ContentType): boolean => !queryType || type === queryType
        )
        .map(({ title, ...props }: ContentType): React.Node => (
          <Section key={title} title={title} {...props}>
            <props.Component />
          </Section>
        ))}
    </Flex>
  )
}
