import { schema } from '@ioc:Adonis/Core/Validator'

export const OrderStatusSchema = schema.create({
  order_status: schema.string(),
})
