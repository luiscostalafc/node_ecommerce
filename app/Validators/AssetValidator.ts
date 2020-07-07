import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class AssetValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    asset: schema.string(),
    mime: schema.string(),
    path: schema.string(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
