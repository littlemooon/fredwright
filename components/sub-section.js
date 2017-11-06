// @flow

import * as React from 'react'

import Flex from './flex'
import Text from './text'

type Props = {
  title?: React.Node,
  children: React.Node,
}

export default function SubSection({ title, children }: Props) {
  return (
    <Flex tag="article">
      <Text tag="h3" style={{ margin: '0 0 20px' }}>
        {title}
      </Text>
      {children}
    </Flex>
  )
}
