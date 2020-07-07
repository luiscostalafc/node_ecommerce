import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class DeliveryValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    delivery: schema.string(),
    inactive: schema.boolean(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
