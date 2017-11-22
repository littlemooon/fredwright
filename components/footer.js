// @flow

import * as React from 'react'

import s from '../lib/spacing'

import Flex from './flex'
import TextLink from './text-link'
import SocialLinks from './social-links'

export default function Footer() {
  return (
    <Flex
      row
      tag="footer"
      style={{
        margin: `${s.large} 0 0`,
        justifyContent: 'space-between',
      }}
    >
      <TextLink
        href="https://github.com/littlemooon/fredwright"
        style={{ justifyContent: 'center' }}
      >
        {'made by me :)'}
      </TextLink>
      <SocialLinks />
    </Flex>
  )
}
