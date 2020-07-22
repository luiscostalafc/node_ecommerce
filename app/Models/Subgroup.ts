import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import Group from './Group'

export default class Subgroup extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public subgroup: string

  @hasMany(() => Product)
  public product: HasMany<typeof Product>

  @manyToMany(() => Group, {
    pivotTable: 'products',
  })
  public group: ManyToMany<typeof Group>
}
