import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class SubgroupValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    subgroup: schema.string(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
