import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class OrderStatusValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    order_status: schema.string(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
