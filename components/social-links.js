// @flow

import * as React from 'react'
import Router from 'next/router'

import s from '../lib/spacing'
import { cleanHref } from '../lib/utils'

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

const onClick = () => Router.push('/print').then(window.print)

type Props = {
  printable?: boolean,
}

export default function SocialLinks({ printable }: Props) {
  return (
    <Flex>
      {links.map(({ title, href, Icon }) => (
        <TextLink key={href} href={href} style={{ padding: `0 0 ${s.tiny}` }}>
          {printable ? cleanHref(href) : title}
        </TextLink>
      ))}
      {printable ? null : (
        <TextLink
          style={{
            cursor: 'pointer',
          }}
          onClick={onClick}
        >
          {'save_as_pdf'}
        </TextLink>
      )}
    </Flex>
  )
}
