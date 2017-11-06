// @flow

import * as React from 'react'

import Flex from './flex'

type Props = {
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'a',
  children: React.Node,
  style?: {},
}

export default function Text({
  children,
  tag = 'p',
  style = {},
  ...props
}: Props) {
  return (
    <Flex
      tag={tag}
      style={{
        whiteSpace: 'pre-line',
        fontFamily: tag === 'p' ? 'monospace' : 'monospace',
        ...style,
      }}
      {...props}
    >
      {children}
    </Flex>
  )
}