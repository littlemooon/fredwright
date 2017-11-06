// @flow

import * as React from 'react'

import Flex from './flex'

type Props = {
  children: React.Node,
}

export default function TextLinks({ children }: Props) {
  return (
    <Flex row wrap style={{ margin: '20px 0 0' }}>
      {children}
    </Flex>
  )
}
