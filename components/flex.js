// @flow

import * as React from 'react'

type Props = {
  children: React.Node,
  row?: boolean,
  wrap?: boolean,
  tag?: string,
  basis?: string,
  grow?: number,
  shrink?: number,
  style?: {},
}

export default function Flex({
  tag = 'div',
  row,
  wrap,
  children,
  basis = 'auto',
  grow,
  shrink,
  style = {},
  ...props
}: Props) {
  const Tag = tag
  return (
    <Tag
      style={{
        display: 'flex',
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        flexDirection: row ? 'row' : 'column',
        flexWrap: wrap ? 'wrap' : 'nowrap',
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  )
}
