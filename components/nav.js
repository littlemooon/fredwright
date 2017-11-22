// @flow

import * as React from 'react'

import s from '../lib/spacing'
import type { Url } from '../types'

import NavLink from './nav-link'
import Flex from './flex'
import TextLink from './text-link'

type Props = {
  url: Url,
}

export default function Nav({ url }: Props) {
  return (
    <Flex tag="nav" row wrap style={{ margin: `0 0 ${s.large}` }}>
      <NavLink url={url} type="all" />
      <NavLink url={url} type="work" />
      <NavLink url={url} type="projects" />
      <NavLink url={url} type="education" />
      <TextLink onClick={() => window.print()}>{'SAVE_AS_PDF'}</TextLink>
    </Flex>
  )
}
