import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class OperationValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    operation: schema.string(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
