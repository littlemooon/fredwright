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
      // IndianRed: `rgba(205, 92, 92, ${opacity})`,
      // LightCoral: `rgba(240, 128, 128, ${opacity})`,
      // Salmon: `rgba(250, 128, 114, ${opacity})`,
      // DarkSalmon: `rgba(233, 150, 122, ${opacity})`,
      // LightSalmon: `rgba(255, 160, 122, ${opacity})`,
      // Crimson: `rgba(220, 20, 60, ${opacity})`,
      // Red: `rgba(255, 0, 0, ${opacity})`,
      // FireBrick: `rgba(178, 34, 34, ${opacity})`,
      // DarkRed: `rgba(139, 0, 0, ${opacity})`,
      // Coral: `rgba(255, 127, 80, ${opacity})`,
      // Tomato: `rgba(255, 99, 71, ${opacity})`,
      OrangeRed: `rgba(255, 69, 0, ${opacity})`,
      Orange: `rgba(255, 165, 0, ${opacity})`,
      DarkOrange: `rgba(255, 140, 0, ${opacity})`,
    },
    green: {
      // Green: `rgba(0, 128, 0, ${opacity})`,
      // GreenYellow: `rgba(173, 255, 47, ${opacity})`,
      // Chartreuse: `rgba(127, 255, 0, ${opacity})`,
      // LawnGreen: `rgba(124, 252, 0, ${opacity})`,
      // Lime: `rgba(0, 255, 0, ${opacity})`,
      // LimeGreen: `rgba(50, 205, 50, ${opacity})`,
      // PaleGreen: `rgba(152, 251, 152, ${opacity})`,
      // LightGreen: `rgba(144, 238, 144, ${opacity})`,
      // MediumSpringGreen: `rgba(0, 250, 154, ${opacity})`,
      // SpringGreen: `rgba(0, 255, 127, ${opacity})`,
      MediumSeaGreen: `rgba(60, 179, 113, ${opacity})`,
      SeaGreen: `rgba(46, 139, 87, ${opacity})`,
      LightSeaGreen: `rgba(32, 178, 170, ${opacity})`,
      // ForestGreen: `rgba(34, 139, 34, ${opacity})`,
      // DarkGreen: `rgba(0, 100, 0, ${opacity})`,
      // YellowGreen: `rgba(154, 205, 50, ${opacity})`,
      // OliveDrab: `rgba(107, 142, 35, ${opacity})`,
      // Olive: `rgba(128, 128, 0, ${opacity})`,
      // DarkOliveGreen: `rgba(85, 107, 47, ${opacity})`,
      // MediumAquamarine: `rgba(102, 205, 170, ${opacity})`,
      // DarkSeaGreen: `rgba(143, 188, 139, ${opacity})`,
      // DarkCyan: `rgba(0, 139, 139, ${opacity})`,
      // Teal: `rgba(0, 128, 128, ${opacity})`,
    },
    blue: {
      // Blue: `rgba(0, 0, 255, ${opacity})`,
      // Aqua: `rgba(0, 255, 255, ${opacity})`,
      // Cyan: `rgba(0, 255, 255, ${opacity})`,
      // LightCyan: `rgba(224, 255, 255, ${opacity})`,
      // PaleTurquoise: `rgba(175, 238, 238, ${opacity})`,
      // Aquamarine: `rgba(127, 255, 212, ${opacity})`,
      // Turquoise: `rgba(64, 224, 208, ${opacity})`,
      // MediumTurquoise: `rgba(72, 209, 204, ${opacity})`,
      // DarkTurquoise: `rgba(0, 206, 209, ${opacity})`,
      // CadetBlue: `rgba(95, 158, 160, ${opacity})`,
      // SteelBlue: `rgba(70, 130, 180, ${opacity})`,
      // LightSteelBlue: `rgba(176, 196, 222, ${opacity})`,
      // PowderBlue: `rgba(176, 224, 230, ${opacity})`,
      // LightBlue: `rgba(173, 216, 230, ${opacity})`,
      DodgerBlue: `rgba(30, 144, 255, ${opacity})`,
      SkyBlue: `rgba(135, 206, 235, ${opacity})`,
      LightSkyBlue: `rgba(135, 206, 250, ${opacity})`,
      DeepSkyBlue: `rgba(0, 191, 255, ${opacity})`,
      // CornflowerBlue: `rgba(100, 149, 237, ${opacity})`,
      // MediumSlateBlue: `rgba(123, 104, 238, ${opacity})`,
      // RoyalBlue: `rgba(65, 105, 225, ${opacity})`,
      // MediumBlue: `rgba(0, 0, 205, ${opacity})`,
      // DarkBlue: `rgba(0, 0, 139, ${opacity})`,
      // Navy: `rgba(0, 0, 128, ${opacity})`,
      // MidnightBlue: `rgba(25, 25, 112, ${opacity})`,
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
