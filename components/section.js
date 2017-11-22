// @flow

import * as React from 'react'

import { getRandomColor } from '../lib/colors'
import { getRandomInt } from '../lib/utils'
import s from '../lib/spacing'
import type { ContentType } from '../types'

import Flex from './flex'
import Text from './text'
import TextLinks from './text-links'
import TextLink from './text-link'
import Link from './icons/link'
import Github from './icons/github'

type State = {
  color: string,
  timeout: number,
}

export default class Section extends React.Component<ContentType, State> {
  mounted: boolean = false

  state = {
    color: getRandomColor(),
    timeout: getRandomInt({ min: 30, max: 90 }),
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
    const { title, content, links, tech, subtitle, date } = this.props
    const { color, timeout } = this.state
    return (
      <Flex
        tag="section"
        basis={s.section}
        shrink={1}
        grow={1}
        style={{
          maxWidth: s.section,
          margin: `0 ${s.medium} ${s.medium} 0`,
          padding: `${s.small} ${s.medium} ${parseInt(s.medium) -
            parseInt(s.tiny)}px`,
          boxSizing: 'border-box',
          overflow: 'hidden',
          backgroundColor: color,
          transition: `background-color ${timeout}s`,
        }}
      >
        <Flex
          row
          style={{
            justifyContent: 'space-between',
            margin: `${s.small} 0 ${s.medium}`,
          }}
        >
          <Text tag="h2" style={{ marginTop: 0 }}>
            {title}
          </Text>
          {links && (
            <Flex row>
              {links.map(link => {
                const Icon = link.includes('github') ? Github : Link
                return (
                  <TextLink
                    key={link}
                    style={{ padding: `0 0 0 ${s.small}` }}
                    href={link}
                  >
                    <Icon title={link} />
                  </TextLink>
                )
              })}
            </Flex>
          )}
        </Flex>
        <Text tag="h3" style={{ margin: 0 }}>
          {subtitle}
        </Text>
        {date && (
          <Text style={{ opacity: 0.6, margin: `0 0 ${s.medium}` }}>
            {date}
          </Text>
        )}
        {content.map((text, i) => (
          <Text
            key={text}
            style={i !== content.length - 1 ? { margin: `0 0 ${s.small}` } : {}}
          >
            {text}
          </Text>
        ))}
        {tech && (
          <TextLinks>
            {tech.map(({ href, title }) => (
              <TextLink
                key={href}
                href={href}
                style={{ margin: `0 ${s.small} ${s.tiny} 0` }}
              >
                {title}
              </TextLink>
            ))}
          </TextLinks>
        )}
      </Flex>
    )
  }
}
