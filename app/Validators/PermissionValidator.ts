import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class PermissionValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    permission: schema.string(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
