// @flow

import * as React from 'react'

import type { Url } from '../types'
import NavLink from './nav-link'
import Flex from './flex'
import TextLink from './text-link'

type Props = {
  url: Url,
}

export default function Nav({ url }: Props) {
  return (
    <Flex tag="nav" row style={{ margin: '60px 20px 20px' }}>
      <NavLink url={url} type="all" />
      <NavLink url={url} type="work" />
      <NavLink url={url} type="projects" />
      <NavLink url={url} type="education" />
      <TextLink onClick={() => window.print()}>{'SAVE_AS_PDF'}</TextLink>
    </Flex>
  )
}
