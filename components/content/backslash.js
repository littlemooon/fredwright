// @flow

import * as React from 'react'

import TextLinks from '../text-links'
import TextLink from '../text-link'
import Text from '../text'
import SubSection from '../sub-section'

const content = `- Leadership of agile development, product and design processes

- Full-stack microservice development, including Node.js, React.js and Ruby on Rails

- Architecture of three web applications from scratch, using Redux, Webpack and Babel`

export default function Backslash() {
  return (
    <SubSection title="Lead Developer">
      <Text>{content}</Text>
      <TextLinks>
        <TextLink href="http://en.wikipedia.org/wiki/Java_(programming_language)">
          {'Java'}
        </TextLink>
        <TextLink href="http://en.wikipedia.org/wiki/Css">{'CSS'}</TextLink>
        <TextLink href="http://en.wikipedia.org/wiki/Unix_shell">
          {'Unix shell'}
        </TextLink>
        <TextLink href="http://www-03.ibm.com/software/products/en/ibm-mq">
          {'MQ'}
        </TextLink>
      </TextLinks>
    </SubSection>
  )
}
