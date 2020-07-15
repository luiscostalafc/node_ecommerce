import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const StockOperationSchema = schema.create({
  quantity: schema.number(),
  unit_value: schema.number(),
  comment: schema.string(),
  operation_id: schema.number([
    rules.exists({ table: 'operations', column: 'id' }),
  ]),
  product_id: schema.number([
    rules.exists({ table: 'products', column: 'id' }),
  ]),
})
