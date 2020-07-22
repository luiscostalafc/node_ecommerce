import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import Subgroup from './Subgroup'

export default class Group extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public group: string

  @hasMany(() => Product)
  public product: HasMany<typeof Product>

  @manyToMany(() => Subgroup, {
    pivotTable: 'products',
  })
  public subgroup: ManyToMany<typeof Subgroup>
}
