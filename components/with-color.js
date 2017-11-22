// @flow

import * as React from 'react'

import type { SectionType } from '../types'
import { getRandomColor } from '../lib/colors'
import { getRandomInt } from '../lib/utils'

type Props = {
  type: SectionType,
  opacity?: number,
  children: ({ color: string, timeout: number }) => React.Node,
}

type State = {
  color: string,
  timeout: number,
}

export default class WithColor extends React.Component<Props, State> {
  mounted: boolean = false

  state = {
    color: getRandomColor(this.props.type, this.props.opacity),
    timeout: getRandomInt({ min: 30, max: 90 }),
  }

  componentDidMount = () => {
    this.mounted = true
    this.setColor(() =>
      window.setInterval(
        () => this.mounted && this.setColor(),
        this.state.timeout * 1000
      )
    )
  }

  componentWillUnmount = () => {
    this.mounted = false
  }

  setColor = (cb?: () => {}) =>
    this.setState(
      { color: getRandomColor(this.props.type, this.props.opacity) },
      cb
    )

  render() {
    return this.props.children(this.state)
  }
}
