// @flow

import * as React from 'react'

import TextLinks from '../text-links'
import TextLink from '../text-link'
import Text from '../text'
import SubSection from '../sub-section'

const content = ``

export default function Backslash() {
  return (
    <SubSection title="Lead Developer">
      <Text>{content}</Text>
      <TextLinks>
        <TextLink href="http://facebook.github.io/react/">{'React'}</TextLink>
        <TextLink href="http://facebook.github.io/flux/docs/overview.html">
          {'Flux'}
        </TextLink>
        <TextLink href="https://babeljs.io/">{'Babel'}</TextLink>
        <TextLink href="http://webpack.github.io/">{'Webpack'}</TextLink>
        <TextLink href="https://www.python.org/">{'Python'}</TextLink>
        <TextLink href="http://flask.pocoo.org/">{'Flask'}</TextLink>
      </TextLinks>
    </SubSection>
  )
}
