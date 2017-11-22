// @flow

import * as React from 'react'

import Head from 'next/head'

import Header from '../components/header'
import Nav from '../components/nav'
import Flex from '../components/flex'
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
    <div style={{ padding: s.large }}>
      <Head>
        <title>fredwright</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Nav url={url} />
      <Flex tag="main" row wrap>
        {content
          .filter(
            ({ type }: ContentType): boolean => !queryType || type === queryType
          )
          .map(({ title, ...props }: ContentType): React.Node => (
            <Section key={title} title={title} {...props} />
          ))}
      </Flex>
      <Footer />
      <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  )
}
