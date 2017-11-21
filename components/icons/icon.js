// @flow

import * as React from 'react'

import { cleanHref } from '../../lib/utils'

type Props = {
  title: string,
  width?: string,
  height?: string,
  viewBox?: string,
  children: React.Node,
}

export default function Icon({
  title,
  width = '18px',
  height = '18px',
  viewBox = '0 0 24 24',
  children,
}: Props) {
  return (
    <svg
      style={{ width, height }}
      role="img"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <style jsx>{`
        svg:hover {
          fill: blue;
        }
      `}</style>
      <title>{cleanHref(title)}</title>
      {children}
    </svg>
  )
}
