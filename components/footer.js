// @flow

import * as React from 'react'

import s from '../lib/spacing'

import Flex from './flex'
import TextLink from './text-link'

export default function Footer() {
  return (
    <Flex
      tag="footer"
      style={{
        margin: `${s.medium} 0 0`,
      }}
    >
      <TextLink
        href="https://github.com/littlemooon/fredwright"
        style={{ justifyContent: 'center' }}
      >
        {'made by me :)'}
      </TextLink>
    </Flex>
  )
}
