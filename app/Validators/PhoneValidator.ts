import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class PhoneValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    type: schema.string(),
    area_code: schema.string(),
    phone: schema.string(),
    whatsapp: schema.boolean(),
    inactive: schema.boolean(),
    obs: schema.string(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
