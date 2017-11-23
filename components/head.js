// @flow

import * as React from 'react'

import NextHead from 'next/head'

export default function Head() {
  return (
    <NextHead>
      <title>fred wright</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/favicon.ico"
      />
    </NextHead>
  )
}
