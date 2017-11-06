// @flow

import * as React from 'react'

import { getRandomColor } from '../lib/colors'
import { getRandomInt } from '../lib/utils'

import Flex from './flex'
import Text from './text'
import TextLink from './text-link'
import type { SectionType } from '../types'

type Props = {
  title: React.Node,
  subtitle?: string,
  children: React.Node,
  type: SectionType,
  link?: string,
}

type State = {
  color: string,
  timeout: number,
}

export default class Section extends React.Component<Props, State> {
  mounted: boolean = false

  state = {
    color: getRandomColor(),
    timeout: getRandomInt({ min: 15, max: 60 }),
  }

  componentDidMount = () => {
    this.mounted = true
    window.setInterval(
      () => this.mounted && this.setState({ color: getRandomColor() }),
      this.state.timeout * 1000
    )
  }

  componentWillUnmount = () => {
    this.mounted = false
  }

  render() {
    const { title, children, link, subtitle } = this.props
    const { color, timeout } = this.state

    return (
      <Flex
        tag="section"
        basis="360px"
        shrink={1}
        grow={1}
        style={{
          maxWidth: '360px',
          margin: '20px',
          padding: '20px',
          boxSizing: 'border-box',
          overflow: 'hidden',
          backgroundColor: color,
          transition: `background-color ${timeout}s`,
        }}
      >
        <Flex
          row
          style={{ justifyContent: 'space-between', margin: '0 0 20px' }}
        >
          <Flex>
            <Text tag="h2" style={{ margin: '0 0 10px' }}>
              {title}
            </Text>
            {subtitle && <Text>{`- ${subtitle}`}</Text>}
          </Flex>
          {link && (
            <TextLink inList={false} href={link}>
              {'link'}
            </TextLink>
          )}
        </Flex>
        {children}
      </Flex>
    )
  }
}
