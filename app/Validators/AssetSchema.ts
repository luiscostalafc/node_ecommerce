import { schema } from '@ioc:Adonis/Core/Validator'

export const AssetSchema = schema.create({
  asset: schema.string(),
  mime: schema.string(),
  path: schema.string(),
})

