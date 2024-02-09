export interface NormalizedDestination {
  id: number
  isTop: boolean
  isFinalNode: boolean
  numEstablishments: number
  destinationData: {
    translatableName: {
      de?: string
      en: string
      es?: string
      fr?: string
      it?: string
      pt?: string
    }
    coordinates: {
      latitude: number
      longitude: number
    }
    photographs: string[]
  }
  childs?: number[]
  fatherDestination: number
  status: number
  ts: string
}
