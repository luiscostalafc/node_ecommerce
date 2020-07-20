import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ProductSchema = schema.create({
  inactive: schema.boolean.optional(),
  group_id: schema.number([
    rules.exists({ table: 'groups', column: 'id' }),
  ]),
  subgroup_id: schema.number([
    rules.exists({ table: 'subgroups', column: 'id' }),
  ]),
})
