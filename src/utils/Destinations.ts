import { NormalizedDestination } from '../types'

export const orderByIsTop = (destinations: NormalizedDestination[]) =>
  [...destinations].sort((a, b) => Number(b.isTop) - Number(a.isTop))
