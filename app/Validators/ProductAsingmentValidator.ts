import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ProductAsingmentValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    product_asingment: schema.string(),
    product_id: schema.number([
      rules.exists({ table: 'products', column: 'id' }),
    ]),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
