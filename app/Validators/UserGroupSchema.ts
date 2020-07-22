import { schema } from '@ioc:Adonis/Core/Validator'

export const UserGroupSchema = schema.create({
  group: schema.string(),
  is_visible: schema.boolean(),
})
