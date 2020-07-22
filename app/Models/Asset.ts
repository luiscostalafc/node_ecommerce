import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Group from './Group'
import Product from './Product'

export default class Asset extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public asset: string

  @column()
  public mime: string

  @column()
  public path: string

  @manyToMany(() => User, {
    pivotTable: 'assets_has_users',
  })
  public user: ManyToMany<typeof User>

  @manyToMany(() => Group, {
    pivotTable: 'groups_has_assets',
  })
  public group: ManyToMany<typeof Group>

  @manyToMany(() => Product, {
    pivotTable: 'products_has_assets',
  })
  public product: ManyToMany<typeof Product>
}
