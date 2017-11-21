// @flow

import * as React from 'react'

import Flex from './flex'
import TextLink from './text-link'

type Link = {
  title: string,
  href: string,
}

const links: Array<Link> = [
  {
    title: 'linkedin',
    href: 'https://www.linkedin.com/in/fred-wright/',
  },
  { title: 'github', href: 'https://github.com/littlemooon' },
  { title: 'twitter', href: 'https://twitter.com/littlemooon' },
]

export default function SocialLinks() {
  return (
    <Flex alignItems="flex-end">
      {links.map(({ title, href, Icon }) => (
        <TextLink key={title} href={href}>
          {title}
        </TextLink>
      ))}
    </Flex>
  )
}
