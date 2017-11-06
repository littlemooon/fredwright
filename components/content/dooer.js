// @flow

import * as React from 'react'

import Text from '../text'
import TextLinks from '../text-links'
import TextLink from '../text-link'
import SubSection from '../sub-section'

const content = `- Design and implementation of immutable, state-management framework for React.js

- Overhaul of frontend tooling, including switch from Coffeescript to Babel ES6

- Development of base layout components used in all applications`

export default function Dooer() {
  return (
    <SubSection title="Development Lead">
      <Text>{content}</Text>
      <TextLinks>
        <TextLink href="http://en.wikipedia.org/wiki/SQL">{'SQL'}</TextLink>
        <TextLink href="http://www.tableausoftware.com/products/desktop">
          {'Tableau'}
        </TextLink>
      </TextLinks>
    </SubSection>
  )
}
