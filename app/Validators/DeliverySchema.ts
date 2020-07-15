import { schema } from '@ioc:Adonis/Core/Validator'

export const DeliverySchema = schema.create({
  delivery: schema.string(),
  inactive: schema.boolean(),
})

