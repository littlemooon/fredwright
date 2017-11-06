// @flow

import * as React from 'react'
import Link from 'next/link'

import Text from './text'
import type { Url, SectionType } from '../types'

type Props = {
  type: SectionType,
  url: Url,
}

export default function NavLink({ type, url }: Props) {
  const queryType = url.query.type
  const active = type === queryType || (type === 'all' && !queryType)
  return (
    <Link
      href={active || type === 'all' ? { pathname: '/' } : { query: { type } }}
    >
      <Text
        tag="a"
        style={{
          cursor: 'pointer',
          color: 'blue',
          textDecoration: active ? 'underline' : null,
          paddingRight: '15px',
        }}
      >
        {type.toUpperCase()}
      </Text>
    </Link>
  )
}