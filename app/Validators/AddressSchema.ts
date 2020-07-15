import { schema } from '@ioc:Adonis/Core/Validator'

export const AddressSchema = schema.create({
  cep: schema.string(),
  zone: schema.string(),
  state: schema.string(),
  city: schema.string(),
  country: schema.string(),
  district: schema.string(),
  street: schema.string(),
  number: schema.string(),
  complement: schema.string(),
  delivery: schema.boolean(),
  inactive: schema.boolean(),
})
