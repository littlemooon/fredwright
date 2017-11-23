// @flow

import * as React from 'react'

import hotjar from '../lib/hotjar'

type Props = {
  children: React.Node,
}

export default class Provider extends React.Component<Props> {
  componentDidMount() {
    hotjar.initialize()
  }

  render() {
    return this.props.children
  }
}
