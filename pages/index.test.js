// @flow
/* eslint-env jest */

import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Index from './index.js'

describe('With Enzyme', () => {
  it('Index shows title', () => {
    const x = mount(<Index url={{ pathname: '/', query: {} }} />)
    expect(x).toIncludeText(`fred wright`)
  })
})

describe('With Snapshot Testing', () => {
  it('Index renders', () => {
    const component = renderer.create(
      <Index url={{ pathname: '/', query: {} }} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
