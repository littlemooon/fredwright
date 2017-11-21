// @flow

import * as React from 'react'

import Text from '../text'
import TextLinks from '../text-links'
import TextLink from '../text-link'
import SubSection from '../sub-section'

const content = `- Design and implementation of immutable, state-management framework for React.js

- Overhaul of frontend tooling, including switch from Coffeescript to Babel ES6

- Development of base layout components used in all applications`

export default function FredWright() {
  return (
    <SubSection title="Personal Resume Website">
      <Text>{content}</Text>
      <TextLinks>
        <TextLink href="http://facebook.github.io/react/">{'React'}</TextLink>
        <TextLink href="https://babeljs.io/">{'Babel'}</TextLink>
        <TextLink href="http://webpack.github.io/">{'Webpack'}</TextLink>
        <TextLink href="https://github.com/Yomguithereal/baobab">
          {'Baobab'}
        </TextLink>
        <TextLink href="https://github.com/gaearon/redux">{'Redux'}</TextLink>
      </TextLinks>
    </SubSection>
  )
}
