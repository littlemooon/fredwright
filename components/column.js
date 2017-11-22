// @flow

import * as React from 'react'

import Flex from './flex'

type Props = {
  right?: boolean,
  children: React.Node,
}

export default function Column({ right, children, ...props }: Props) {
  return (
    <Flex
      style={{
        width: '50%',
        padding: right ? '0 0 0 10px' : '0 10px 0 0',
      }}
      {...props}
    >
      {children}
    </Flex>
  )
}
