// @flow

import * as React from 'react'

import Head from '../components/head'
import Header from '../components/header'
import Nav from '../components/nav'
import Grid from '../components/grid'
import Card from '../components/card'
import Footer from '../components/footer'
import Provider from '../components/provider'

import { cardContent } from '../lib/content'
import s from '../lib/spacing'

import type { Url, ContentType } from '../types/'

type Props = {
  url: Url,
}

export default function Index({ url }: Props) {
  const queryType = url.query.type
  return (
    <Provider>
      <Head />
      <Header />
      <Nav url={url} />
      <Grid tag="main">
        {cardContent
          .filter(
            ({ type }: ContentType): boolean => !queryType || type === queryType
          )
          .map(({ title, ...props }: ContentType): React.Node => (
            <Card key={title} title={title} {...props} />
          ))}
      </Grid>
      <Footer />
      <style jsx global>{`
        body {
          padding: ${s.medium};
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
          max-width: ${parseInt(s.card) * 3 + parseInt(s.medium) * 4}px;
        }
      `}</style>
    </Provider>
  )
}
