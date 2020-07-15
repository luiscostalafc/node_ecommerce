import { schema } from '@ioc:Adonis/Core/Validator'

export const SubgroupSchema = schema.create({
  subgroup: schema.string(),
})
