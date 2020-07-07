import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class GroupValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    group: schema.string(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
