// @flow

import * as React from 'react'

import Flex from './flex'
import TextLink from './text-link'
import SocialLinks from './social-links'

export default function Footer() {
  return (
    <Flex
      row
      tag="footer"
      style={{
        margin: '40px 20px 60px',
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
