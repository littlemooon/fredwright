// @flow

import * as React from 'react'

import Flex from './flex'

type Props = {
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'a',
  children: React.Node,
  style?: {},
  className?: string,
}

export default function Text({
  children,
  tag = 'p',
  style = {},
  className,
  ...props
}: Props) {
  return (
    <Flex
      className={className}
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
