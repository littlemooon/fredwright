// @flow
/* eslint-env jest */

import * as utils from './utils.js'

describe('getRandomInt', () => {
  it('uses default values', () => {
    const x = utils.getRandomInt({})
    expect(x).toBeGreaterThanOrEqual(0)
    expect(x).toBeLessThanOrEqual(1)
  })

  it('uses min value', () => {
    const x = utils.getRandomInt({ min: 1 })
    expect(x).toBe(1)
  })

  it('uses max value', () => {
    const x = utils.getRandomInt({ max: 10 })
    expect(x).toBeGreaterThanOrEqual(0)
    expect(x).toBeLessThanOrEqual(10)
  })

  it('uses min and max values', () => {
    const x = utils.getRandomInt({ min: 8, max: 10 })
    expect(x).toBeGreaterThanOrEqual(8)
    expect(x).toBeLessThanOrEqual(10)
  })
})
