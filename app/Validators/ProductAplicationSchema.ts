import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ProductAplicationSchema = schema.create({
  product_id: schema.number([
    rules.exists({ table: 'products', column: 'id' }),
  ]),
  automaker: schema.string(),
  model: schema.string(),
  year_start: schema.number(),
  year_end: schema.number(),
  engine: schema.string(),
  complement: schema.string(),
  quantity_used: schema.number(),
  quantity_package: schema.number(),
})
