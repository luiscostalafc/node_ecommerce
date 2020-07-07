import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class OrderDetailValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    reference: schema.string(),
    payment_method: schema.string(),
    order_status: schema.string(),
    extra_amount: schema.string(),
    intallment_quantity: schema.number(),
    intallment_value: schema.number(),
    order_id: schema.number([
      rules.exists({ table: 'orders', column: 'id' }),
    ]),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
