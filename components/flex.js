// @flow

import * as React from 'react'

type Props = {
  children: React.Node,
  row?: boolean,
  alignItems?: 'flex-start' | 'flex-end',
  wrap?: boolean,
  tag?: string,
  basis?: string,
  grow?: number,
  shrink?: number,
  style?: {},
  className?: string,
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
  className,
  alignItems,
  ...props
}: Props) {
  const Tag = tag
  return (
    <Tag
      className={`flex ${className || ''}`}
      style={{
        display: 'flex',
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        flexDirection: row ? 'row' : 'column',
        flexWrap: wrap ? 'wrap' : 'nowrap',
        alignItems,
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  )
}
