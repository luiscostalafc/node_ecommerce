import { schema } from '@ioc:Adonis/Core/Validator'

export const GroupSchema = schema.create({
  group: schema.string(),
})

