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
      <Text>{`Interested in optimising the output of all team members. 

      A lightweight agile methodology, close communication with Product and freedom to explore technologies are essential. 

      Passion for working alongside all areas of the business; from sales, marketing and operations, to product, design and development. 

      Its also fun to travel, meet and work with new people from different cultures.`}</Text>
    </Flex>
  )
}
