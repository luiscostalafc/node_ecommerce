import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class AddressValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    cep: schema.string(),
    zone: schema.string(),
    state: schema.string(),
    city: schema.string(),
    country: schema.string(),
    district: schema.string(),
    street: schema.string(),
    number: schema.string(),
    complement: schema.string(),
    delivery: schema.boolean(),
    inactive: schema.boolean(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
