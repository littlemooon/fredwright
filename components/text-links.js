// @flow

import * as React from 'react'

import s from '../lib/spacing'

import Flex from './flex'

type Props = {
  children: React.Node,
  printable?: boolean,
}

export default function TextLinks({ children, printable }: Props) {
  return (
    <Flex row wrap style={{ margin: `${printable ? s.small : s.medium} 0 0` }}>
      {children}
    </Flex>
  )
}
