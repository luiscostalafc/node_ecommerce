import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class CardValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    card_number: schema.string(),
    brand: schema.string(),
    cvv: schema.string(),
    expiration_month: schema.number(),
    expiration_year: schema.number(),
    card_token: schema.string(),
    holder_name: schema.string(),
    holder_cpf: schema.string(),
    holder_birth_date: schema.date(),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
