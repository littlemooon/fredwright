// @flow

import * as React from 'react'

import Flex from './flex'

type Props = {
  onClick: (SyntheticEvent<HTMLButtonElement>) => void,
  children: React.Node,
}

export default function SectionButton({ onClick, children }: Props) {
  return (
    <Flex tag="button" style={{ width: '100%' }} onClick={onClick}>
      {children}
    </Flex>
  )
}
