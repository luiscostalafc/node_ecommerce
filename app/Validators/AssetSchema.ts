import { schema } from '@ioc:Adonis/Core/Validator'

export const AssetSchema = schema.create({
  file: schema.file({
    size: '2mb',
    extnames: ['jpg', 'png', 'jpeg'],
  }),
})

