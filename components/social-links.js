// @flow

import * as React from 'react'

import Flex from './flex'
import TextLink from './text-link'

export default function SocialLinks() {
  return (
    <Flex>
      <TextLink href="https://www.linkedin.com/in/fred-wright/">
        {'linkedin'}
      </TextLink>
      <TextLink href="https://github.com/littlemooon">{'github'}</TextLink>
      <TextLink href="https://twitter.com/littlemooon">{'twitter'}</TextLink>
    </Flex>
  )
}
