// @flow

import * as React from 'react'

import s from '../lib/spacing'
import type { Url } from '../types'

import NavLink from './nav-link'
import Grid from './grid'
import Flex from './flex'

type Props = {
  url: Url,
}

export default function Nav({ url }: Props) {
  return (
    <Grid style={{ margin: `${s.large} 0` }}>
      <Flex tag="nav" row wrap>
        <NavLink url={url} type="all" />
        <NavLink url={url} type="work" />
        <NavLink url={url} type="projects" />
        <NavLink url={url} type="education" />
      </Flex>
    </Grid>
  )
}
