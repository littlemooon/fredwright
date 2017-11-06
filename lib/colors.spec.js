// @flow
/* eslint-env jest */

import colors, { getRandomColor } from './colors.js'

describe('getRandomColor', () => {
  it('returns a random color', () => {
    const x = getRandomColor()
    expect(x).toMatch(`/${Object.values(colors).join('|')}/`)
  })
})
