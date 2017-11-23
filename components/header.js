// @flow

import * as React from 'react'

import s from '../lib/spacing'
import { headerContent } from '../lib/content'

import Flex from './flex'
import Text from './text'
import SocialLinks from './social-links'

type Props = {
  printable?: boolean,
}

export default function Header({ printable }: Props) {
  return (
    <Flex
      row
      wrap={!printable}
      tag="header"
      style={{
        margin: `${printable ? s.small : 0} 0 ${printable
          ? s.medium
          : s.large}`,
      }}
    >
      <Flex
        style={{
          width: printable
            ? s.card
            : `${parseInt(s.card) + parseInt(s.medium)}px`,
          margin: `${printable ? s.medium : s.large} ${printable
            ? s.medium
            : 0} 0 0`,
        }}
      >
        <Text
          tag="h1"
          style={{
            height: '30px',
            margin: `0 0 ${printable ? s.medium : s.large}`,
          }}
        >
          {headerContent.title}
        </Text>
        <SocialLinks printable={printable} />
      </Flex>
      <Flex
        style={{
          margin: `${printable ? s.medium : s.large} 0 0`,
          maxWidth: `${parseInt(s.card) * 2 + parseInt(s.medium)}px`,
        }}
      >
        <Text
          tag="h2"
          style={{
            height: '30px',
            margin: `0 0 ${printable ? s.medium : s.large} 0`,
            justifyContent: 'center',
          }}
        >
          {headerContent.subtitle}
        </Text>
        <Text>{headerContent.description}</Text>
      </Flex>
    </Flex>
  )
}
