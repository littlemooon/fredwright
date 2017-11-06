// @flow

import * as React from 'react'

import Flex from './flex'
import Text from './text'
import SocialLinks from './social-links'

export default function Footer() {
  return (
    <Flex
      row
      tag="footer"
      style={{
        margin: '60px 20px 80px',
        justifyContent: 'space-between',
        alignContent: 'center',
      }}
    >
      <Text>{'made by me :)'}</Text>
      <SocialLinks />
    </Flex>
  )
}
