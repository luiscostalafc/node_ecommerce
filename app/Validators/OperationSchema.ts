import { schema } from '@ioc:Adonis/Core/Validator'

export const OperationSchema = schema.create({
  operation: schema.string(),
})
