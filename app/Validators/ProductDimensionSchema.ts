import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ProductDimensionSchema = schema.create({
  product_id: schema.number([
    rules.exists({ table: 'products', column: 'id' }),
  ]),
  size: schema.number(),
  height: schema.number(),
  width: schema.number(),
  lenth: schema.number(),
  weight: schema.number(),
  inner_diameter: schema.number(),
  external_diameter: schema.number(),
})
