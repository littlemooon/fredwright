// @flow

import type { SectionType } from '../types'

import { getRandomInt } from './utils'

type ColorsType = {
  red: { [string]: string },
  green: { [string]: string },
  blue: { [string]: string },
  grey: string,
}

export function getColors(opacity: number = 1): ColorsType {
  return {
    red: {
      // IndianRed: `rgb(205, 92, 92, ${opacity})`,
      // LightCoral: `rgb(240, 128, 128, ${opacity})`,
      // Salmon: `rgb(250, 128, 114, ${opacity})`,
      // DarkSalmon: `rgb(233, 150, 122, ${opacity})`,
      // LightSalmon: `rgb(255, 160, 122, ${opacity})`,
      // Crimson: `rgb(220, 20, 60, ${opacity})`,
      // Red: `rgb(255, 0, 0, ${opacity})`,
      // FireBrick: `rgb(178, 34, 34, ${opacity})`,
      // DarkRed: `rgb(139, 0, 0, ${opacity})`,
      // Coral: `rgb(255, 127, 80, ${opacity})`,
      // Tomato: `rgb(255, 99, 71, ${opacity})`,
      OrangeRed: `rgb(255, 69, 0, ${opacity})`,
      DarkOrange: `rgb(255, 140, 0, ${opacity})`,
      Orange: `rgb(255, 165, 0, ${opacity})`,
    },
    green: {
      // Green: `rgb(0, 128, 0, ${opacity})`,
      // GreenYellow: `rgb(173, 255, 47, ${opacity})`,
      // Chartreuse: `rgb(127, 255, 0, ${opacity})`,
      // LawnGreen: `rgb(124, 252, 0, ${opacity})`,
      // Lime: `rgb(0, 255, 0, ${opacity})`,
      // LimeGreen: `rgb(50, 205, 50, ${opacity})`,
      // PaleGreen: `rgb(152, 251, 152, ${opacity})`,
      // LightGreen: `rgb(144, 238, 144, ${opacity})`,
      // MediumSpringGreen: `rgb(0, 250, 154, ${opacity})`,
      // SpringGreen: `rgb(0, 255, 127, ${opacity})`,
      MediumSeaGreen: `rgb(60, 179, 113, ${opacity})`,
      SeaGreen: `rgb(46, 139, 87, ${opacity})`,
      // ForestGreen: `rgb(34, 139, 34, ${opacity})`,
      // DarkGreen: `rgb(0, 100, 0, ${opacity})`,
      // YellowGreen: `rgb(154, 205, 50, ${opacity})`,
      // OliveDrab: `rgb(107, 142, 35, ${opacity})`,
      // Olive: `rgb(128, 128, 0, ${opacity})`,
      // DarkOliveGreen: `rgb(85, 107, 47, ${opacity})`,
      // MediumAquamarine: `rgb(102, 205, 170, ${opacity})`,
      // DarkSeaGreen: `rgb(143, 188, 139, ${opacity})`,
      LightSeaGreen: `rgb(32, 178, 170, ${opacity})`,
      // DarkCyan: `rgb(0, 139, 139, ${opacity})`,
      // Teal: `rgb(0, 128, 128, ${opacity})`,
    },
    blue: {
      // Blue: `rgb(0, 0, 255, ${opacity})`,
      // Aqua: `rgb(0, 255, 255, ${opacity})`,
      // Cyan: `rgb(0, 255, 255, ${opacity})`,
      // LightCyan: `rgb(224, 255, 255, ${opacity})`,
      // PaleTurquoise: `rgb(175, 238, 238, ${opacity})`,
      // Aquamarine: `rgb(127, 255, 212, ${opacity})`,
      // Turquoise: `rgb(64, 224, 208, ${opacity})`,
      // MediumTurquoise: `rgb(72, 209, 204, ${opacity})`,
      // DarkTurquoise: `rgb(0, 206, 209, ${opacity})`,
      // CadetBlue: `rgb(95, 158, 160, ${opacity})`,
      // SteelBlue: `rgb(70, 130, 180, ${opacity})`,
      // LightSteelBlue: `rgb(176, 196, 222, ${opacity})`,
      // PowderBlue: `rgb(176, 224, 230, ${opacity})`,
      // LightBlue: `rgb(173, 216, 230, ${opacity})`,
      SkyBlue: `rgb(135, 206, 235, ${opacity})`,
      LightSkyBlue: `rgb(135, 206, 250, ${opacity})`,
      DeepSkyBlue: `rgb(0, 191, 255, ${opacity})`,
      DodgerBlue: `rgb(30, 144, 255, ${opacity})`,
      // CornflowerBlue: `rgb(100, 149, 237, ${opacity})`,
      // MediumSlateBlue: `rgb(123, 104, 238, ${opacity})`,
      // RoyalBlue: `rgb(65, 105, 225, ${opacity})`,
      // MediumBlue: `rgb(0, 0, 205, ${opacity})`,
      // DarkBlue: `rgb(0, 0, 139, ${opacity})`,
      // Navy: `rgb(0, 0, 128, ${opacity})`,
      // MidnightBlue: `rgb(25, 25, 112, ${opacity})`,
    },
    grey: `rgba(0, 0, 0, ${opacity})`,
  }
}

export function getColorType(
  type: SectionType,
  opacity: number = 1
): Array<any> {
  return type === 'all'
    ? []
    : Object.values(
        getColors(opacity)[
          type === 'work' ? 'red' : type === 'projects' ? 'blue' : 'green'
        ]
      )
}

export function getRandomColor(type: SectionType, opacity: number = 1): any {
  const colorsByType = getColorType(type, opacity)

  return (
    colorsByType && colorsByType[getRandomInt({ max: colorsByType.length - 1 })]
  )
}
