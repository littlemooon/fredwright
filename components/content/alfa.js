// @flow

import * as React from 'react'

import TextLinks from '../text-links'
import TextLink from '../text-link'
import Text from '../text'
import SubSection from '../sub-section'

const content = `- Full-stack development of a financial Java web application

- Prototype design and development of web and mobile software

- On-site implementation consultancy`

export default function Alfa() {
  return (
    <SubSection title="Technical Consultant">
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
