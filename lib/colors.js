// @flow

import { getRandomInt } from './utils'

const opacity = 0.25

const colors: { [string]: string } = {
  aqua: `rgba(0, 255, 255, ${opacity})`,
  aquamarine: `rgba(127, 255, 212, ${opacity})`,
  blueviolet: `rgba(138, 43, 226, ${opacity})`,
  cadetblue: `rgba(95, 158, 160, ${opacity})`,
  coral: `rgba(255, 127, 80, ${opacity})`,
  cornflowerblue: `rgba(100, 149, 237, ${opacity})`,
  darkorange: `rgba(255, 140, 0, ${opacity})`,
  darkorchid: `rgba(153, 50, 204, ${opacity})`,
  darksalmon: `rgba(233, 150, 122, ${opacity})`,
  darkseagreen: `rgba(143, 188, 143, ${opacity})`,
  darkturquiose: `rgba(0, 206, 209, ${opacity})`,
  darkviolet: `rgba(148, 0, 211, ${opacity})`,
  dodgerblue: `rgba(30, 144, 255, ${opacity})`,
  hotpink: `rgba(255, 105, 180, ${opacity})`,
  indianred: `rgba(205, 92, 92, ${opacity})`,
  lightsalmon: `rgba(255, 160, 122, ${opacity})`,
  lightseagreen: `rgba(32, 178, 170, ${opacity})`,
  mediumorchid: `rgba(186, 85, 211, ${opacity})`,
  salmon: `rgba(250, 128, 114, ${opacity})`,
  skyblue: `rgba(135, 206, 235, ${opacity})`,
  slateblue: `rgba(106, 90, 205, ${opacity})`,
  steelblue: `rgba(70, 130, 180, ${opacity})`,
  teal: `rgba(0, 128, 128, ${opacity})`,
  tomato: `rgba(255, 99, 71, ${opacity})`,
}

export function getRandomColor(): string {
  return Object.values(colors)[
    getRandomInt({ max: Object.keys(colors).length - 1 })
  ]
}

export default colors
