// @flow

import * as React from 'react'

import s from '../lib/spacing'

import Flex from './flex'
import Text from './text'
import SocialLinks from './social-links'

export default function Header() {
  return (
    <Flex row wrap tag="header">
      <Flex
        style={{
          width: `${parseInt(s.section) + parseInt(s.medium)}px`,
          margin: `${s.large} 0 0`,
        }}
      >
        <Text tag="h1" style={{ height: '30px', margin: `0 0 ${s.large}` }}>
          {'fred wright'}
        </Text>
        <SocialLinks />
      </Flex>
      <Flex
        style={{
          margin: `${s.large} 0 0`,
          maxWidth: `${parseInt(s.section) * 2 + parseInt(s.medium)}px`,
        }}
      >
        <Text tag="h2" style={{ height: '30px', margin: `0 0 ${s.large} 0` }}>
          {'full stack lead developer'}
        </Text>
        <Text>
          {`After gathering many years of experience in high pressure positions I have decided to begin working as a remote consultant.

This allows me to utilise the broad knowledge gained working with the latest technologies, in diverse industries, and with all areas of a business.

While this has been incredibly interesting and beneficial, my real passion lies in delivering products of extreme quality.

Primary skills and interests are in Javascript, React and Node.`}
        </Text>
      </Flex>
    </Flex>
  )
}
