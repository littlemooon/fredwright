// @flow

import * as React from 'react'

import Flex from './flex'
import Text from './text'
import SocialLinks from './social-links'

export default function Header() {
  return (
    <Flex tag="header" style={{ margin: '20px' }}>
      <Flex row style={{ justifyContent: 'space-between', margin: '60px 0 0' }}>
        <Text tag="h1">{'fred wright 1990'}</Text>
        <SocialLinks />
      </Flex>
      <Text tag="h2" style={{ margin: '40px 0 40px' }}>
        {'full stack lead developer'}
      </Text>
      <Text>{`Interested in optimising the output of all team members. 

      A lightweight agile methodology, close communication with Product and freedom to explore technologies are essential. 

      Passion for working alongside all areas of the business; from sales, marketing and operations, to product, design and development. 

      Its also fun to travel, meet and work with new people from different cultures.`}</Text>
    </Flex>
  )
}
