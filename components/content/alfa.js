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
        <TextLink href="http://facebook.github.io/react/">{'React'}</TextLink>
        <TextLink href="http://facebook.github.io/flux/docs/overview.html">
          {'Flux'}
        </TextLink>
        <TextLink href="http://www.oracle.com/technetwork/java/javaee/overview/index.html">
          {'JavaEE'}
        </TextLink>
        <TextLink href="http://groovy.codehaus.org/">{'Groovy'}</TextLink>
        <TextLink href="http://gulpjs.com/">{'Gulp'}</TextLink>
        <TextLink href="http://phantomjs.org/">{'PhantomJs'}</TextLink>
        <TextLink href="http://cordova.apache.org/">{'Cordova'}</TextLink>
        <TextLink href="http://ionicframework.com/">{'Ionic'}</TextLink>
        <TextLink href="http://ramda.github.io/ramdocs/docs/">
          {'Ramda'}
        </TextLink>
        <TextLink href="http://en.wikipedia.org/wiki/Test-driven_development">
          {'TDD'}
        </TextLink>
        <TextLink href="http://agilemethodology.org/">
          {'Agile development'}
        </TextLink>
      </TextLinks>
    </SubSection>
  )
}
