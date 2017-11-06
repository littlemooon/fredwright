// @flow

export function getRandomInt({
  min = 0,
  max = 1,
}: {
  min?: number,
  max?: number,
}): number {
  const highestMin = Math.ceil(min)
  const lowestMax = Math.floor(max)
  return Math.floor(Math.random() * (lowestMax - highestMin)) + highestMin
}
