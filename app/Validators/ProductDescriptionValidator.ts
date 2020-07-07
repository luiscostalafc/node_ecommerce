import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ProductDescriptionValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    product_id: schema.number([
      rules.exists({ table: 'products', column: 'id' }),
    ]),
    title: schema.string(),
    name: schema.string(),
    type: schema.string(),
    position: schema.string(),
    system: schema.string(),
    color: schema.string(),
    material: schema.string(),
    obs: schema.string(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
