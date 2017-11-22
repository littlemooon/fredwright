// @flow

import * as React from 'react'
import Router from 'next/router'

import s from '../lib/spacing'

import Flex from './flex'
import TextLink from './text-link'

type Link = {
  title: string,
  href: string,
}

const links: Array<Link> = [
  {
    title: 'fredwright0@gmail.com',
    href: 'mailto:fredwright0@gmail.com',
  },
  {
    title: 'linkedin',
    href: 'https://www.linkedin.com/in/fred-wright/',
  },
  { title: 'github', href: 'https://github.com/littlemooon' },
]

const onClick = () => Router.push('/').then(window.print)

export default function SocialLinks() {
  return (
    <Flex>
      {links.map(({ title, href, Icon }) => (
        <TextLink key={title} href={href} style={{ padding: `0 0 ${s.tiny}` }}>
          {title}
        </TextLink>
      ))}
      <TextLink
        style={{
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        {'save_as_pdf'}
      </TextLink>
    </Flex>
  )
}
