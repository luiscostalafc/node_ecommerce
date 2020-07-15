import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const SynonymSchema = schema.create({
  synonym: schema.string(),
  product_id: schema.number([
    rules.exists({ table: 'products', column: 'id' }),
  ]),
})
