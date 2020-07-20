import { schema } from '@ioc:Adonis/Core/Validator'

export const PhoneSchema = schema.create({
  type: schema.string(),
  area_code: schema.string(),
  phone: schema.string(),
  whatsapp: schema.boolean(),
  inactive: schema.boolean(),
  obs: schema.string.optional(),
})
