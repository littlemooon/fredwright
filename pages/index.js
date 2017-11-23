// @flow

import * as React from 'react'

import Head from 'next/head'

import Header from '../components/header'
import Nav from '../components/nav'
import Grid from '../components/grid'
import Section from '../components/section'
import Footer from '../components/footer'

import content from '../lib/content'
import s from '../lib/spacing'

import type { Url, ContentType } from '../types/'

type Props = {
  url: Url,
}

export default function Index({ url }: Props) {
  const queryType = url.query.type
  return (
    <div>
      <Head>
        <title>fredwright.me</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/static/favicon.ico"
        />
      </Head>
      <Header />
      <Nav url={url} />
      <Grid tag="main">
        {content
          .filter(
            ({ type }: ContentType): boolean => !queryType || type === queryType
          )
          .map(({ title, ...props }: ContentType): React.Node => (
            <Section key={title} title={title} {...props} />
          ))}
      </Grid>
      <Footer />
      <style jsx global>{`
        body {
          padding: ${s.medium};
          margin: 0 auto;
          max-width: ${parseInt(s.section) * 3 + parseInt(s.medium) * 2}px;
        }
      `}</style>
    </div>
  )
}
