// @flow

import * as React from 'react'

import Text from './text'

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
      href={href}
      style={{
        padding: inList ? '0 10px 5px 0' : '',
        cursor: 'pointer',
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </Text>
  )
}
