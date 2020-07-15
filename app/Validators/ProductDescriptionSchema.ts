import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ProductDescriptionSchema = schema.create({
  product_id: schema.number([
    rules.exists({ table: 'products', column: 'id' }),
  ]),
  title: schema.string(),
  name: schema.string(),
  type: schema.string(),
  position: schema.string(),
  system: schema.string(),
  color: schema.string(),
  material: schema.string(),
  obs: schema.string(),
})
