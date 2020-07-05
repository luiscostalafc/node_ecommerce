import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Card extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public card_number: string

  @column()
  public brand: string

  @column()
  public cvv: string

  @column()
  public expiration_month: number

  @column()
  public expiration_year: number

  @column()
  public card_token: string

  @column()
  public holder_name: string

  @column()
  public holder_cpf: string

  @column()
  public holder_birth_date: string
}
