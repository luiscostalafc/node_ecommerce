import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public cep: string

  @column()
  public zone: string

  @column()
  public state: string

  @column()
  public city: string

  @column()
  public country: string

  @column()
  public district: string

  @column()
  public street: string

  @column()
  public number: string

  @column()
  public complement: string

  @column()
  public delivery: boolean

  @column()
  public inactive: boolean

  @manyToMany(() => User, {
    pivotTable: 'groups_has_users',
  })
  public user: ManyToMany<typeof User>
}
