// @flow

import * as React from 'react'

import Text from '../text'
import TextLinks from '../text-links'
import TextLink from '../text-link'
import SubSection from '../sub-section'

const content = `- Specialisation in Quantum Mechanics and Set Theory`

export default function Education() {
  return (
    <SubSection title="BSc Mathematics and Philosophy 2:1">
      <Text>{content}</Text>
      <TextLinks>
        <TextLink href="http://en.wikipedia.org/wiki/Mathematical_analysis">
          {'Mathematical Analysis'}
        </TextLink>
        <TextLink href="http://en.wikipedia.org/wiki/Logic">{'Logic'}</TextLink>
      </TextLinks>
    </SubSection>
  )
}
