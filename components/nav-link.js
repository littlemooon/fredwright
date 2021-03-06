// @flow

import * as React from 'react'
import Link from 'next/link'

import { getColors, getColorType } from '../lib/colors'
import s from '../lib/spacing'

import Text from './text'
import type { Url, CardType } from '../types'

type Props = {
  type: CardType,
  url: Url,
}

export default function NavLink({ type, url }: Props) {
  const queryType = url.query.type
  const color = getColorType(type, 0.2)[0]
  const active = type === queryType || (type === 'all' && !queryType)
  const hasType = type !== 'all'
  const href =
    active || type === 'all' ? { pathname: '/' } : { query: { type } }

  return (
    <Link href={href}>
      <Text
        tag="a"
        style={{
          cursor: 'pointer',
          borderBottom: hasType
            ? `2px solid ${color}`
            : active ? `2px solid ${getColors(0.2).grey}` : null,
          height: '20px',
          lineHeight: '23px',
          background: active ? color || getColors(0.1).grey : null,
          textDecoration: null,
          padding: `0 ${s.small} 0`,
          margin: hasType ? `0 ${s.tiny} 0` : `0 ${s.tiny} 0 0`,
        }}
      >
        {type.toUpperCase()}
      </Text>
    </Link>
  )
}
