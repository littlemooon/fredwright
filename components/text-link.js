// @flow

import * as React from 'react'

import { cleanHref } from '../lib/utils'

import Text from './text'

type Props = {
  children: React.Node,
  style?: {},
  href?: string,
  onClick?: (SyntheticEvent<*>) => void,
}

export default function TextLink({
  href,
  children,
  onClick,
  style = {},
}: Props) {
  return (
    <Text
      tag="a"
      className="text-link"
      href={href}
      title={cleanHref(href)}
      onClick={onClick}
      style={{
        color: 'blue',
        cursor: 'pointer',
        ...style,
      }}
    >
      <style jsx global>{`
        .text-link {
          text-decoration: none;
        }
        .text-link:hover {
          text-decoration: underline;
        }
      `}</style>
      {children}
    </Text>
  )
}
