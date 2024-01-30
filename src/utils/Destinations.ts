import { Destination } from '../types'

export const orderByIsTop = (destinations: Destination[]) =>
  [...destinations].sort((a, b) => Number(b.isTop) - Number(a.isTop))
