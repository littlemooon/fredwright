// @flow

import * as React from 'react'

import Head from 'next/head'

import Header from '../components/header'
import Nav from '../components/nav'
import Content from '../components/content'
import Footer from '../components/footer'
import type { Url } from '../types/'

type Props = {
  url: Url,
}

export default function Index({ url }: Props) {
  return (
    <div>
      <Head>
        <title>fredwright</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Nav url={url} />
      <Content url={url} />
      <Footer />
      <style global jsx>{`
        h1,
        h2,
        h3,
        p,
        a {
          margin: 0;
        }
      `}</style>
    </div>
  )
}
