// @flow

import * as React from 'react'

import Flex from '../flex'
import Section from '../section'
import type { Url, ContentType } from '../../types/'

import content from './content'

type Props = {
  url: Url,
}

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
