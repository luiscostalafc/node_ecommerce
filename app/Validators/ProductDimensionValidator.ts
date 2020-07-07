import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ProductDimensionValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    product_id: schema.number([
      rules.exists({ table: 'products', column: 'id' }),
    ]),
    size: schema.number(),
    height: schema.number(),
    width: schema.number(),
    lenth: schema.number(),
    weight: schema.number(),
    inner_diameter: schema.number(),
    external_diameter: schema.number(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
