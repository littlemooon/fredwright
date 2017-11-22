// @flow

import * as React from 'react'

import s from '../lib/spacing'

import Flex from './flex'

type Props = {
  children: React.Node,
}

export default function TextLinks({ children }: Props) {
  return (
    <Flex row wrap style={{ margin: `${s.medium} 0 0` }}>
      {children}
    </Flex>
  )
}
