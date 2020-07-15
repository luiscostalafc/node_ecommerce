import { schema } from '@ioc:Adonis/Core/Validator'

export const PermissionSchema = schema.create({
  permission: schema.string(),
})
