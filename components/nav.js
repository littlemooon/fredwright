// @flow

import * as React from 'react'
import Router from 'next/router'

import s from '../lib/spacing'
import type { Url } from '../types'

import NavLink from './nav-link'
import Flex from './flex'
import Text from './text'

type Props = {
  url: Url,
}

const onClick = () => Router.push('/').then(window.print)

export default function Nav({ url }: Props) {
  return (
    <Flex tag="nav" row wrap style={{ margin: `0 0 ${s.large}` }}>
      <NavLink url={url} type="all" />
      <NavLink url={url} type="work" />
      <NavLink url={url} type="projects" />
      <NavLink url={url} type="education" />
      <Text
        style={{
          cursor: 'pointer',
          height: '20px',
          lineHeight: '23px',
          textDecoration: null,
          padding: `0 ${s.tiny} 0`,
          margin: `0 ${s.tiny} 0`,
          color: null,
        }}
        onClick={onClick}
      >
        {'SAVE_AS_PDF'}
      </Text>
    </Flex>
  )
}
