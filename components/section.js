// @flow

import * as React from 'react'

import s from '../lib/spacing'
import type { ContentType } from '../types'

import Flex from './flex'
import WithColor from './with-color'
import Text from './text'
import TextLinks from './text-links'
import TextLink from './text-link'
import Link from './icons/link'
import Github from './icons/github'

export default function Section({
  type,
  title,
  content,
  links,
  tech,
  subtitle,
  dateFrom,
  dateTo,
}: ContentType) {
  return (
    <WithColor type={type} opacity={0.2}>
      {({ color, timeout }) => (
        <div
          style={{
            padding: `${s.medium} ${s.medium}`,
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
              margin: `0 0 ${s.medium}`,
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
          <Text style={{ opacity: 0.6, margin: `0 0 ${s.medium}` }}>
            {[dateFrom, dateTo].filter(Boolean).join('-')}
          </Text>
          {content.map((text, i) => (
            <Text
              key={text}
              style={
                i !== content.length - 1 ? { margin: `0 0 ${s.small}` } : {}
              }
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
        </div>
      )}
    </WithColor>
  )
}
