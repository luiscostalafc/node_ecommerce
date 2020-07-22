import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ProductVariationSchema = schema.create({
  product_id: schema.number([
    rules.exists({ table: 'products', column: 'id' }),
  ]),
  product_variation: schema.string(),
})
