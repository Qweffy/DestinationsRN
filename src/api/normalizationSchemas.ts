import { schema } from 'normalizr'

export const destinationSchema = new schema.Entity('destinations')
export const destinationListSchema = [destinationSchema]
