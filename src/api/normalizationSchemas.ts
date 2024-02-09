import { schema } from 'normalizr'

const destinationSchema = new schema.Entity('destinations', {})
destinationSchema.define({ childs: [destinationSchema] })

export const destinationListSchema = [destinationSchema]
