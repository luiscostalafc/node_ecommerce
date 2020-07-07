import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class OrderValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    user_id: schema.number([
      rules.exists({ table: 'users', column: 'id' }),
    ]),
    provider_id: schema.number([
      rules.exists({ table: 'users', column: 'id' }),
    ]),
    order_status_id: schema.number([
      rules.exists({ table: 'orders', column: 'id' }),
    ]),
    delivery_id: schema.number([
      rules.exists({ table: 'deliveries', column: 'id' }),
    ]),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
