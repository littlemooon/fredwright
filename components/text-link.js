// @flow

import * as React from 'react'

import Text from './text'
import { cleanHref } from '../lib/utils'

type Props = {
  children: React.Node,
  style?: {},
  href?: string,
  onClick?: (SyntheticEvent<*>) => void,
  inList?: boolean,
}

export default function TextLink({
  href,
  onClick,
  children,
  style = {},
  inList = true,
}: Props) {
  return (
    <Text
      tag="a"
      target="blank"
      className="text-link"
      href={href}
      title={cleanHref(href)}
      style={{
        padding: inList ? '0 10px 5px 0' : '',
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
