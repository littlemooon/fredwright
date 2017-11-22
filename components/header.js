// @flow

import * as React from 'react'

import s from '../lib/spacing'

import Flex from './flex'
import Text from './text'
import TextLink from './text-link'
import SocialLinks from './social-links'

export default function Header() {
  return (
    <Flex tag="header" style={{ margin: `0 0 ${s.large}` }}>
      <Flex
        row
        style={{
          justifyContent: 'space-between',
          margin: `${s.medium} 0 ${s.large}`,
        }}
      >
        <Flex
          style={{
            justifyContent: 'space-between',
          }}
        >
          <Text tag="h1" style={{ margin: '0 0 4px' }}>
            {'fred wright'}
          </Text>
          <TextLink href="mailto:fredwright0@gmail.com">
            {'fredwright0@gmail.com'}
          </TextLink>
        </Flex>
        <SocialLinks />
      </Flex>
      <Text tag="h2" style={{ margin: `0 0 ${s.large}` }}>
        {'full stack lead developer'}
      </Text>
      <Text
      >{`After gathering many years of experience in high pressure positions I have decided to begin working as a remote consultant.

This allows me to utilise the broad knowledge gained working with the latest technologies, in diverse industries, and with all areas of a business.

While this has been incredibly interesting and beneficial, my real passion lies in delivering products of extreme quality.

Primary skills and interests are in Javascript, React and Node.`}</Text>
    </Flex>
  )
}
