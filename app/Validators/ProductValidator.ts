import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ProductValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    inactive: schema.boolean(),
    group_id: schema.number([
      rules.exists({ table: 'groups', column: 'id' }),
    ]),
    subgroup_id: schema.number([
      rules.exists({ table: 'subgroups', column: 'id' }),
    ]),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
