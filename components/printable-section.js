// @flow

import * as React from 'react'

import Flex from '../components/flex'
import Text from '../components/text'
import PrintableCard from '../components/printable-card'

import s from '../lib/spacing'
import { cardContent } from '../lib/content'

import type { CardType, ContentType } from '../types/'

type Props = {
  type: CardType,
}

export default function Print({ type }: Props) {
  const content = cardContent.filter(
    x => (type !== 'projects' || x.printable) && x.type === type
  )
  return (
    <Flex
      style={{
        borderTop: '1px solid black',
        padding: `${s.medium} 0 ${s.small}`,
      }}
    >
      <Text tag="h2" style={{ padding: `0 0 ${s.tiny}` }}>
        {type.toUpperCase()}
      </Text>
      {content.map(({ title, ...props }: ContentType): React.Node => (
        <PrintableCard key={title} title={title} {...props} />
      ))}
    </Flex>
  )
}
