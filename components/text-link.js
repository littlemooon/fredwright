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
  onClick,
  children,
  style = {},
}: Props) {
  return (
    <Text
      tag="a"
      target="blank"
      className="text-link"
      href={href}
      title={cleanHref(href)}
      style={{
        color: 'blue',
        cursor: 'pointer',
        ...style,
      }}
      onClick={onClick}
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
