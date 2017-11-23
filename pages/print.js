// @flow

import * as React from 'react'

import Head from '../components/head'
import Header from '../components/header'
import PrintableSection from '../components/printable-section'
import Provider from '../components/provider'

export default function Print() {
  return (
    <Provider>
      <Head />
      <Header printable />
      <PrintableSection type="work" />
      <PrintableSection type="education" />
      <PrintableSection type="projects" />
      <style jsx global>{`
        html {
          font-size: 12px;
        }
      `}</style>
    </Provider>
  )
}
