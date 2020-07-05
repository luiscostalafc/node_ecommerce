import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, column, beforeSave } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public name: string

  @column()
  public username: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public activity: string

  @column()
  public complete_name: string

  @column()
  public email: string

  @column()
  public rg: string

  @column()
  public cpf_cnpj: string

  @column()
  public nick: string

  @column()
  public is_provider: boolean

  @column()
  public inactive: boolean

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.hash(user.password)
    }
  }
}
