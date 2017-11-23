// @flow

import * as React from 'react'

import s from '../lib/spacing'
import type { ContentType } from '../types'

import Flex from './flex'
import Text from './text'
import TextLinks from './text-links'
import TextLink from './text-link'

export default function PrintableCard({
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
    <div
      style={{
        padding: `${s.small} 0`,
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <Flex
        style={{
          margin: `0 0 ${s.small}`,
        }}
      >
        <Flex row style={{ alignItems: 'baseline' }}>
          <Text tag="h3" style={{ margin: `0 ${s.tiny} ${s.tiny} 0` }}>
            {title}
          </Text>
          <Text style={{ opacity: 0.6 }}>
            {[dateFrom, dateTo].filter(Boolean).join('-')}
          </Text>
        </Flex>
        <Text style={{ margin: 0 }}>{subtitle}</Text>
      </Flex>
      <Flex style={{ margin: `0 0 0 ${s.medium}` }}>
        {content.map((text, i) => (
          <Text
            key={text}
            style={{
              ...(i !== content.length - 1 ? { margin: '0 0 6px' } : {}),
              opacity: 0.8,
            }}
          >
            {`- ${text}`}
          </Text>
        ))}
        {tech && (
          <TextLinks printable>
            {tech.map(({ href, title }) => (
              <TextLink
                key={href}
                href={href}
                style={{ margin: `0 ${s.small} 0 0` }}
              >
                {title}
              </TextLink>
            ))}
          </TextLinks>
        )}
      </Flex>
    </div>
  )
}
