// @flow

import * as React from 'react'

import s from '../lib/spacing'

type Props = { children: React.Node, tag?: string, style?: {} }

export default function Grid({ children, tag = 'div', style = {} }: Props) {
  const Tag = tag
  return (
    <Tag
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(auto, ${s.card}))`,
        gridColumnGap: s.medium,
        gridRowGap: s.medium,
        ...style,
      }}
    >
      {children}
    </Tag>
  )
}
