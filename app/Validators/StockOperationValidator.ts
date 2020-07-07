import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class StockOperationValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    quantity: schema.number(),
    unit_value: schema.number(),
    comment: schema.string(),
    operation_id: schema.number([
      rules.exists({ table: 'operations', column: 'id' }),
    ]),
    product_id: schema.number([
      rules.exists({ table: 'products', column: 'id' }),
    ]),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
