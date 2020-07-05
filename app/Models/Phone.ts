import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Phone extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public type: string

  @column()
  public area_code: string

  @column()
  public phone: string

  @column()
  public whatsapp: boolean

  @column()
  public inactive: boolean

  @column()
  public obs: string
}
