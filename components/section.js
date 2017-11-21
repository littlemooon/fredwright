// @flow

import * as React from 'react'

import { getRandomColor } from '../lib/colors'
import { getRandomInt } from '../lib/utils'

import Flex from './flex'
import Text from './text'
import TextLinks from './text-links'
import TextLink from './text-link'
import Link from './icons/link'
import LinkedIn from './icons/linkedin'
import Github from './icons/github'
import type { ContentType } from '../types'

type State = {
  color: string,
  timeout: number,
}

export default class Section extends React.Component<ContentType, State> {
  mounted: boolean = false

  state = {
    color: getRandomColor(),
    timeout: getRandomInt({ min: 10, max: 30 }),
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
    const { title, content, link, links, subtitle, date } = this.props
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
        <Flex row style={{ justifyContent: 'space-between' }}>
          <Text tag="h2" style={{ marginTop: '10px' }}>
            {title}
          </Text>
          {link && (
            <TextLink inList={false} href={link}>
              {link.includes('linkedin') ? (
                <LinkedIn title={link} />
              ) : link.includes('github') ? (
                <Github title={link} />
              ) : (
                <Link title={link} />
              )}
            </TextLink>
          )}
        </Flex>
        <Text tag="h3" style={{ margin: 0 }}>
          {subtitle}
        </Text>
        {date && <Text style={{ opacity: 0.6 }}>{date}</Text>}
        {content.map(text => (
          <Text key={text} style={{ marginBottom: 0 }}>
            {text}
          </Text>
        ))}
        {links && (
          <TextLinks>
            {links.map(({ href, title }) => (
              <TextLink key={href} href={href}>
                {title}
              </TextLink>
            ))}
          </TextLinks>
        )}
      </Flex>
    )
  }
}
