import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ProductAsingmentSchema = schema.create({
  product_asingment: schema.string(),
  product_id: schema.number([
    rules.exists({ table: 'products', column: 'id' }),
  ]),
})
